import { Link } from 'react-router-dom';
import { TransactionItem } from '../features/transactions/transactionListSlice';
import euroFormatter from '../utils/euroFormatter';

interface TransactionsTableProps {
  data: TransactionItem[];
}

export default function TransactionsTable(props: TransactionsTableProps) {
  return (
    <div className="flex w-full flex-col gap-4 ">
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
              <div className="overflow-hidden border-y  border-primary-900 bg-white md:rounded-2xl md:border">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left font-bold text-base md:pl-6 ">
                        Date
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left font-bold text-base">
                        Location
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left font-bold text-base">
                        Payer
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left font-bold text-base">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.map((data) => (
                      <tr key={Math.random()}>
                        <td className="font-base whitespace-nowrap py-4 pl-4 pr-3 text-base md:pl-6 ">{data.date}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-base">{data.location}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-base">{data.payer}</td>
                        <td className="whitespace-nowrap py-4 px-3 text-base">{euroFormatter(data.amount)}</td>
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
