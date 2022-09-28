import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

import { useCollection } from "../hooks/useCollection";

function Home({ user }) {
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className="max-w-screen-xl mx-auto p-3 mt-3 grid sm:grid-cols-3 grid-cols-1 sm:gap-x-6 gap-y-3">
      <div className="border rounded-md col-span-2 p-10 ">
        {error && <p> {error} </p>}
        <h3 className="font-bold mb-3 ">Your money expenses</h3>
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className=" row-start-1 sm:col-start-3  ">
        <div className="bg-indigo-500 rounded-md p-10">
          <TransactionForm uid={user.uid} />
        </div>
      </div>
    </div>
  );
}

export default Home;
