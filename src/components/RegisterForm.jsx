import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  };

  return (
    <div className="block p-6 rounded-lg border shadow-sm bg-white w-96">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-6">
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
            placeholder="Display name"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </div>

        <div className="form-group mb-6">
          <input
            type="email"
            maxLength={60}
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
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="password"
            maxLength={60}
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
            id="exampleInput126"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {!isPending && (
          <button
            type="submit"
            onClick={() => {
              alert("user registration disabled for this demo");
            }}
            className="
      w-full
      px-6
      py-2.5
      bg-indigo-500
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
            Sign up
          </button>
        )}
        {/* {isPending && (
          <button
            type="submit"
            disabled
            className="
      w-full
      px-6
      py-2.5
      bg-indigo-500
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
            Loading...
          </button>
        )} */}
        {error && <p className="p-3 text-red-600">{error} </p>}

        <p className="text-gray-800 mt-6 text-center">
          Already a member?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
