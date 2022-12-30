import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import euroFormatter from "../../utils/euroFormatter";
import { fetchTransactionDetail } from "./transactionDetailSlice";

import ErrorModal from "../../components/ErrorModal";

export default function TransactionDetailPage() {
  const [openModal, setOpenModal] = useState(false);
  const params = useParams();
  const { transactionId } = params;
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Reikia safe kad grazintu atgal jei neegzistuoja id
  useEffect(() => {
    if (transactionId) {
      dispatch(fetchTransactionDetail(transactionId));
    }
  }, []);

  const transactionDate = useAppSelector(
    (state) => state.transactionDetail.transcation?.timestamp
  );
  const transactionAmount = useAppSelector(
    (state) => state.transactionDetail.transcation?.amount
  );
  const transactionLocation = useAppSelector(
    (state) => state.transactionDetail.transcation?.location
  );
  const transactionPayer = useAppSelector(
    (state) => state.transactionDetail.transcation?.payer.firstName
  );
  const transactionCreatedBy = useAppSelector(
    (state) => state.transactionDetail.transcation?.createdBy.firstName
  );
  const transactionCreatedAt = useAppSelector(
    (state) => state.transactionDetail.transcation?.createdAt
  );
  const transactionUpdatedAt = useAppSelector(
    (state) => state.transactionDetail.transcation?.updatedAt
  );

  let formattedDate;
  if (transactionDate) {
    formattedDate = new Date(transactionDate).toString().slice(0, 11);
  }
  const formattedAmount = euroFormatter(Number(transactionAmount));

  return (
    <div className="flex flex-col gap-8">
      {openModal && (
        <ErrorModal
          transactionId={transactionId}
          open={openModal}
          setOpen={setOpenModal}
        />
      )}
      <div className="flex items-center gap-4">
        <Link to="..">
          <ArrowLeftIcon className="h-8" />
        </Link>
        <h1 className="flex w-full items-stretch font-bold text-3xl ">
          {`${formattedAmount} on ${formattedDate}`}
        </h1>
        <Link
          to={`./edit`}
          className="flex w-auto flex-row items-center justify-center whitespace-nowrap rounded-lg  bg-primary-900 bg-opacity-20 py-2 px-6 font-bold text-primary-900 text-base"
        >
          Edit
        </Link>

        <div onClick={() => setOpenModal(true)}>
          <button className="flex w-auto flex-row items-center justify-center whitespace-nowrap rounded-lg  bg-red-600 bg-opacity-20 py-2 px-6 font-bold text-red-600 text-base">
            Delete
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl  border border-y border-primary-900 bg-white">
        <div className="m-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-base">Transaction date</h1>
              <div className="font-bold text-2xl">{transactionDate}</div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-base">Amount</h1>
              <div className="font-bold text-2xl">{formattedAmount}</div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-base">Location</h1>
              <div className="font-bold text-2xl">{transactionLocation}</div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-base">Payer</h1>
              <div className="font-bold text-2xl">{transactionPayer}</div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-base">Created by</h1>
              <div className="font-bold text-2xl">{transactionCreatedBy}</div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-base">Created at</h1>
              <div className="font-bold text-2xl">{transactionCreatedAt}</div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-base">Updated at</h1>
              <div className="font-bold text-2xl">{transactionUpdatedAt}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
