import ContentCard from "../components/ContentCard";
import ColoredSpan from "../components/ColoredSpan";
import TransactionsList from "../components/TransactionsList";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import euroFormatter from "../utils/euroFormatter";
import { useAppSelector } from "../app/hook";
import { selectTransactions } from "../features/transactions/transactionListSlice";

export default function TransactionsPage() {
  const data = useAppSelector(selectTransactions);
  return (
    <>
      <PageHeader title={"Hello, User Name!"} />
      <div className="flex w-full justify-center ">
        <div className="flex w-full flex-col items-center justify-center md:w-[48rem]">
          <div className=" flex w-full flex-col items-center justify-center gap-8 px-0 pb-8 pt-6 ">
            <div className="flex w-full flex-col items-start gap-4 p-0">
              <SectionHeader title={"Overview"} />
              <div className="flex w-full flex-col items-start gap-6 p-0 md:flex-row">
                <ContentCard description="Total transactions" content={125} />
                <ContentCard
                  description="Your balance"
                  content={
                    <ColoredSpan color="success">
                      {euroFormatter(360.59)}
                    </ColoredSpan>
                  }
                />
              </div>
            </div>
          </div>
          <TransactionsList data={data} />
        </div>
      </div>
    </>
  );
}