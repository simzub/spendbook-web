const data = [
  { date: '2022-11-25', location: 'McDonalds', payer: 'Lukas', amount: '€ 24,12' },
  { date: '2022-11-25', location: 'Manami', payer: 'Simonas', amount: '€ 24,12' },
  { date: '2022-11-25', location: 'Maxima', payer: 'Lukas', amount: '€ 24,12' },
  { date: '2022-11-25', location: 'McDonalds', payer: 'Lukas', amount: '€ 24,12' },
  { date: '2022-11-25', location: 'KFC', payer: 'Simonas', amount: '€ 24,12' },
];

export default function TransactionsTable() {
  return (
    <div className="flex w-full flex-col items-center justify-center ">
      <div className="flex h-full w-main flex-col content-center items-center gap-4">
        <div className="flex w-main flex-row items-center gap-4 py-6 px-0 ">
          <h2 className="flex w-main items-stretch font-bold text-2xl ">Transactions</h2>
          <button className="flex h-40px w-auto flex-row items-center justify-center whitespace-nowrap rounded-lg  bg-primary bg-opacity-20 py-2 px-6 font-bold text-primary text-base">
            Add transaction
          </button>
        </div>
        <table className="flex w-main flex-row items-start justify-between rounded-2xl border border-primary py-4 px-8 ">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Payer</th>
              <th>Amount</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.date}</td>
                  <td>{val.location}</td>
                  <td>{val.payer}</td>
                  <td>{val.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
