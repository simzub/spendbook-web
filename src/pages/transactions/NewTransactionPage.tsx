import { useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  CreateTransactionData,
  UserResponse,
} from "../../services/spendbook/transaction.requests";
import { createTransaction, fetchPayers } from "./transactionsCreateSlice";
import Loading from "../../components/Loading";

export default function NewTransactionPage() {
  const dispatch = useAppDispatch();
  const { transactionId } = useParams();

  useEffect(() => {
    dispatch(fetchPayers());
  }, [dispatch]);

  const payers = useAppSelector((state) => state.transactionsCreate.payers);
  const loading = useAppSelector((state) => state.transactionsCreate.isLoading);

  // React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTransactionData>();
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<CreateTransactionData> = (
    data: CreateTransactionData
  ) => dispatch(createTransaction(data));

  let headerTitle = "";
  if (!transactionId) {
    headerTitle = "Add transaction";
  } else {
    headerTitle = `Edit transaction (id: ${transactionId})`;
  }
  return (
    <div>
      <div className="flex w-full justify-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center justify-center px-4 pb-36 sm:px-6 md:w-[48rem] lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16"
        >
          <div className=" mx-auto flex w-full max-w-lg flex-col items-stretch font-bold text-3xl lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <div className="flex items-center gap-4">
                <Link to="..">
                  <ArrowLeftIcon className="h-8" />
                </Link>
                <h1
                  id="add-transactions"
                  className="flex w-full items-stretch font-bold text-3xl "
                >
                  {headerTitle}
                </h1>
              </div>
              <div className="mt-6">
                <label htmlFor="date" className="block font-bold text-base">
                  Date
                </label>
                <div className="mt-1">
                  <input
                    {...register("timestamp", { required: true })}
                    type="datetime-local"
                    id="date"
                    defaultValue={new Date().toISOString()}
                    max="2050-06-30T16:30"
                    className="block w-full rounded-md border-gray-300 font-normal shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-base"
                  />
                  {errors.timestamp && "Date is required"}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="payer" className="block font-bold text-base">
                  Payer
                </label>
                <div className="mt-1">
                  <select
                    {...register("payer", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    id="payer"
                    name="payer"
                    className="block w-full rounded-md border-gray-300 font-normal shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-base"
                  >
                    <option hidden selected>
                      Select payer...
                    </option>
                    {payers.map((payer: UserResponse) => (
                      <option key={payer.id} value={payer.id}>
                        {payer.firstName}
                      </option>
                    ))}
                  </select>
                  {errors.payer && "Payer is required"}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="location" className="block font-bold text-base">
                  Location
                </label>
                <div className="mt-1">
                  <input
                    {...register("location", { required: true })}
                    placeholder="Location"
                    type="text"
                    id="location"
                    name="location"
                    className="block w-full rounded-md border-gray-300 font-normal shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-base"
                  />
                  <div className="mt-1 font-normal text-red-600 text-sm">
                    {errors.location && "Location is required"}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="amount" className="block font-bold text-base">
                  Amount
                </label>
                <div className="mt-1">
                  <input
                    {...register("amount", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    placeholder="Amount"
                    type="number"
                    id="amount"
                    name="amount"
                    step=".01"
                    className="block w-full rounded-md border-gray-300 font-normal shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-base"
                  />
                  <div className="mt-1 font-normal text-red-600 text-sm">
                    {errors.amount && "Amount is required"}
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 flex w-auto flex-col gap-4 sm:flex sm:items-center sm:justify-between">
              <button
                type="submit"
                className="relative flex w-full justify-center rounded-lg bg-primary-900 bg-opacity-20 py-2 px-4 font-bold  text-primary-900 text-base"
              >
                {loading ? <Loading /> : "Save"}
              </button>
              <Link
                to={".."}
                className="relative flex w-full justify-center rounded-lg bg-secondary bg-opacity-20 py-2 px-4 font-bold text-base"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
