import ContentCard from './ContentCard';

function euroFormatter(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  })
    .format(value)
    .replace(/^(\D+)/, '$1 ');
}

export default function Main() {
  return (
    <div className="flex w-full flex-col items-center justify-center ">
      <div className=" flex w-main flex-col items-center justify-center gap-8 py-6 px-0 ">
        <h1 className="flex w-main items-stretch font-bold text-3xl ">Hello, User Name!</h1>
        <div className="flex w-main flex-col items-start gap-4 p-0">
          <h2 className="flex w-main items-stretch font-bold text-2xl ">Overview</h2>
          <div className="flex flex-row items-start gap-6 p-0">
            <ContentCard description="Total transactions" content={123} />
            <ContentCard description="Your balance" content={euroFormatter(360.12)} />
          </div>
        </div>
      </div>
    </div>
  );
}
