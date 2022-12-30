import { Link } from "react-router-dom";
import { TransactionResponse } from "../../services/spendbook/transaction.requests";
import euroFormatter from "../../utils/euroFormatter";

interface TransactionsTableProps {
  data: TransactionResponse[];
}

export default function TransactionsList(props: TransactionsTableProps) {
  return (
    <div className="flex w-full flex-col gap-4 overflow-clip ">
      <div className="flex flex-row items-center justify-between py-2.5 px-0 ">
        <h2 className="flex items-stretch font-bold text-2xl">Transactions</h2>
        <Link to="./new">
          <button
            type="button"
            className="flex w-auto flex-row items-center justify-center whitespace-nowrap rounded-lg  bg-primary-900 bg-opacity-20 py-2 px-6 font-bold text-primary-900 text-base"
          >
            Add transaction
          </button>
        </Link>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden rounded-2xl  border border-y border-primary-900 bg-white">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left font-bold text-base md:pl-6 "
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left font-bold text-base"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left font-bold text-base"
                      >
                        Payer
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left font-bold text-base"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.map((data) => (
                      <tr key={data.id}>
                        <td className="font-base whitespace-nowrap py-4 pl-4 pr-3 text-base md:pl-6 ">
                          {new Date(data.timestamp).toLocaleDateString()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-base">
                          {data.location}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-base">
                          {data.payer.firstName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-base">
                          {euroFormatter(Number(data.amount))}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-base">
                          <Link to={`./${data.id}`}>
                            <div className="font-bold text-primary-600 hover:text-primary-900">
                              View
                              <span className="sr-only">{data.payer.id}</span>
                            </div>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
