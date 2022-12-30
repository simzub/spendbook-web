import { useEffect } from "react";
import ContentCard from "../../components/ContentCard";
import ColoredSpan from "../../components/ColoredSpan";
import TransactionsList from "./TransactionsList";
import PageHeader from "../../components/PageHeader";
import SectionHeader from "../../components/SectionHeader";
import euroFormatter from "../../utils/euroFormatter";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchTransactionData } from "./transactionsListSlice";

export default function TransactionsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTransactionData());
  }, []);

  const totalTransactions = useAppSelector(
    (state) => state.transactionsList.overview?.transactionCount
  );
  const balance = useAppSelector(
    (state) => state.transactionsList.overview?.balance
  );
  const transactions = useAppSelector(
    (state) => state.transactionsList.transcations?.items || []
  );
  const sortedTransactions = [...transactions].sort(
    (x, y) => +new Date(y.timestamp) - +new Date(x.timestamp)
  );

  const userName = useAppSelector((state) => state.users.user?.firstName);

  return (
    <>
      <PageHeader title={`Hello, ${userName}!`} />
      <div className="flex w-full justify-center ">
        <div className="flex w-full flex-col items-center justify-center md:w-[48rem]">
          <div className=" flex w-full flex-col items-center justify-center gap-8 px-0 pb-8 pt-6 ">
            <div className="flex w-full flex-col items-start gap-4 p-0">
              <SectionHeader title={"Overview"} />
              <div className="flex w-full flex-col items-start gap-6 p-0 md:flex-row">
                <ContentCard
                  description="Total transactions"
                  content={totalTransactions}
                />
                <ContentCard
                  description="Your balance"
                  content={
                    <>
                      {balance && (
                        <ColoredSpan
                          color={Number(balance) >= 0 ? "success" : "error"}
                        >
                          {euroFormatter(Number(balance))}
                        </ColoredSpan>
                      )}
                    </>
                  }
                />
              </div>
            </div>
          </div>
          <TransactionsList data={sortedTransactions} />
        </div>
      </div>
    </>
  );
}
