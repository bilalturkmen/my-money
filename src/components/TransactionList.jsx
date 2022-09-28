import { useFirestore } from "../hooks/useFirestore";

export default function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore("transactions");

  return (
    <ul className="mt-5">
      {transactions.map((transaction) => (
        <li
          key={transaction.id}
          className="border-b relative  border-indigo-100 mb-6 "
        >
          <div className="flex justify-between gap-1 items-center  ">
            <div className=" text-xl">{transaction.name}</div>
            <div className="font-medium text-xl text-gray-600 mr-12">
              {transaction.amount}$
            </div>
            <button
              className="absolute  right-0  "
              onClick={() => deleteDocument(transaction.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
