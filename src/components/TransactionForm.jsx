import { useState, useEffect } from "react";
import { useFirestore } from "../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  };

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <div>
      <h3 className="font-bold mb-3 text-white">Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-1">
          <label className="form-label inline-block mb-2 text-white">
            Transaction name:
          </label>
          <input
            type="text"
            maxLength={60}
            required
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-white">
            Amount:
          </label>
          <input
            type="number"
            maxLength={6}
            required
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>

        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      border
      border-white
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-indigo-600 hover:shadow-lg
      focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-700 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Send Transaction
        </button>
      </form>
    </div>
  );
}
