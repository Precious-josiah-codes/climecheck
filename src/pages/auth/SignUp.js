import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { pollutantsContext } from "../../state/context/pollutants";
import Google from "../../SvgIcons/Icons";

const SignUp = () => {
  const { authenticateUser, signUpWithEmailPassword, authSuccess } =
    useContext(pollutantsContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="text-gray-400 bg-primaryColor body-font h-screen flex justify-center sm:justify-between items-center px-6">
      {/* start signup form */}
      <div className="sm:pr-6 sm:w-[40%] w-full">
        <div className="mb-4 font-bold text-tetiary">ClimeCheck</div>
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Start by creating an
          <br class="hidden lg:inline-block" /> account with climecheck
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUpWithEmailPassword(email, password);
          }}
        >
          <div className="mb-6">
            <input
              type="email"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className={`inline-flex justify-center items-center space-x-3 text-white border-0 py-2 px-6 focus:outline-none bg-secondaryColor rounded text-lg mt-6  w-full ${
              !email.length && !password.length
                ? "pointer-events-none"
                : "pointer-events-auto"
            }`}
          >
            <div>
              {authSuccess ? (
                <svg
                  className="w-5 h-5 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "CREATE ACCOUNT"
              )}
            </div>
          </button>
        </form>
        <p className="inline-flex justify-center mt-6 w-full font-bold">OR</p>
        <button
          onClick={authenticateUser}
          class="inline-flex justify-center items-center space-x-3 text-white bg-tetiary border-0 py-2 px-6 focus:outline-none hover:bg-secondaryColor rounded text-lg mt-6  w-full"
        >
          <div>Sign in with Google</div> <Google />
        </button>
        <div className="mt-4 inline-flex justify-center w-full">
          Already have an account?
          <Link to="/auth/sign_in">
            <span className="underline text-tetiary font-bold cursor-pointer ml-2">
              Sign In
            </span>
          </Link>
        </div>
      </div>
      {/* end signup form */}

      {/* start illustration */}
      <div className=" h-[36rem] bg-primaryColor hidden sm:inline-flex">
        <img
          src="../climate.gif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* end illustration */}
    </section>
  );
};

export default SignUp;
