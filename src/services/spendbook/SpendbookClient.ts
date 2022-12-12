import { PaginationParams } from "./params/Paginations.params";

type FetchMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type SpendbookEndpoint = string;
type SpendbookBody = object;

export interface SpendbookError {
  error: string;
  message: string;
  statusCode: number;
  details?: object;
}

export interface SpendbookResponse<T> {
  ok: boolean;
  status: number;
  data?: T;
  error?: SpendbookError;
}

export type SpendbookRequestOptions = {
  search?: string;
  paginationParams?: PaginationParams;
  queryParams?: object;
};

async function extractSpendbookError(
  response: Response
): Promise<SpendbookError> {
  const body = await response.json();

  if (!body) {
    return {
      error: "unknown",
      message: "Unknown error",
      statusCode: 500,
    };
  }

  // TODO: map message by body.error
  return {
    error: body.error,
    message: body.message,
    statusCode: body.statusCode,
    details: body.details,
  };
}

type FetchSpendbookOptions = {
  endpoint: SpendbookEndpoint;
  method: FetchMethod;
  body?: SpendbookBody;
  options?: SpendbookRequestOptions;
};

class SpendbookClient {
  private static TOKEN_KEY = "token";

  private static async fetchSpendbook<T>(
    fetchSpendbookOptions: FetchSpendbookOptions
  ): Promise<SpendbookResponse<T>> {
    const { endpoint, method, body, options } = fetchSpendbookOptions;

    let baseEndpoint = `${process.env.REACT_APP_API_URL}${endpoint}`;

    if (options) {
      const optionsArray: string[] = [];
      if (options?.search) {
        optionsArray.push(`search=${options?.search}`);
      }
      if (options?.paginationParams) {
        optionsArray.push(`offset=${options?.paginationParams?.offset}`);
        optionsArray.push(`limit=${options?.paginationParams?.limit}`);
      }
      if (
        options?.queryParams &&
        Object.keys(options?.queryParams).length > 0
      ) {
        Object.entries(options?.queryParams).forEach(([key, value]) => {
          optionsArray.push(`${key}=${value}`);
        });
      }
      if (optionsArray.length > 0) {
        baseEndpoint = `${baseEndpoint}?${optionsArray.join("&")}`;
      }
    }

    try {
      const token = SpendbookClient.getToken();
      const headers: HeadersInit = {};
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      headers["Content-Type"] = "application/json";
      const response = await fetch(baseEndpoint, {
        headers,
        method,
        body: body && JSON.stringify(body),
      });

      if (response.ok) {
        const responseBody: T | undefined =
          response.status !== 204 ? await response.json() : undefined;
        return {
          ok: true,
          status: response.status,
          data: responseBody,
        };
      }
      if (response.status === 401) {
        this.clearToken();
      }
      return {
        ok: false,
        status: response.status,
        error: await extractSpendbookError(response),
      };
    } catch (error: any | unknown) {
      return {
        ok: false,
        status: error?.status || 500,
        error: {
          error: error?.name || "unknown",
          message: error?.message || "Unknown",
          statusCode: error?.status || 500,
        },
      };
    }
  }

  private static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public static setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public static clearToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  static async get<T>(
    endpoint: SpendbookEndpoint,
    options?: SpendbookRequestOptions
  ): Promise<SpendbookResponse<T>> {
    return SpendbookClient.fetchSpendbook({
      endpoint,
      method: "GET",
      options,
    });
  }

  static async post<T>(
    endpoint: SpendbookEndpoint,
    body: SpendbookBody
  ): Promise<SpendbookResponse<T>> {
    return SpendbookClient.fetchSpendbook({
      endpoint,
      method: "POST",
      body,
    });
  }

  static async patch<T>(
    endpoint: SpendbookEndpoint,
    body: SpendbookBody
  ): Promise<SpendbookResponse<T>> {
    return SpendbookClient.fetchSpendbook({
      endpoint,
      method: "PATCH",
      body,
    });
  }

  static async put<T>(
    endpoint: SpendbookEndpoint,
    body: SpendbookBody
  ): Promise<SpendbookResponse<T>> {
    return SpendbookClient.fetchSpendbook({
      endpoint,
      method: "PUT",
      body,
    });
  }

  static async delete<T>(
    endpoint: SpendbookEndpoint
  ): Promise<SpendbookResponse<T>> {
    return SpendbookClient.fetchSpendbook({
      endpoint,
      method: "DELETE",
    });
  }
}

export default SpendbookClient;
