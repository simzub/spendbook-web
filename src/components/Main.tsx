import ContentCard from './ContentCard';
import ColoredSpan from './ColoredSpan';
import TransactionsTable from './TransactionsTable';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
});

export default function Main() {
  return (
    <main className="sm:max-w-main flex w-full justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className=" flex w-full flex-col items-center justify-center gap-8 py-6 px-0 ">
          <h1 className="flex w-full items-stretch font-bold text-3xl ">Hello, User Name!</h1>
          <div className="flex w-full flex-col items-start gap-4 p-0">
            <h2 className="flex w-full items-stretch font-bold text-2xl ">Overview</h2>
            <div className="flex w-full flex-row items-start gap-6 p-0">
              <ContentCard description="Total transactions" content={123} />
              <ContentCard
                description="Your balance"
                content={<ColoredSpan color="success">{formatter.format(360.12)}</ColoredSpan>}
              />
              <ContentCard description="Your balance">
                <ColoredSpan color="error">{formatter.format(360.12)}</ColoredSpan>
              </ContentCard>
            </div>
          </div>
        </div>
        <TransactionsTable />
      </div>
    </main>
  );
}
