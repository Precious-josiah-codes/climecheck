import { useContext } from "react";
import { Link } from "react-router-dom";
import { pollutantsContext } from "../../state/context/pollutants";
import Google from "../../SvgIcons/Icons";

const SignUp = () => {
  const { authenticateUser } = useContext(pollutantsContext);
  return (
    <section className="text-gray-400 bg-primaryColor body-font h-screen flex items-center px-6">
      {/* start signup form */}
      <div className="pr-6">
        <div className="mb-4 font-bold text-tetiary">ClimeCheck</div>
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Before they sold out
          <br class="hidden lg:inline-block" />
          readymade gluten
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptates corporis quo magnam. Iure illum quas, natus, delectus
          impedit dolore deleniti nulla itaque iste tempora earum nisi sapiente
          incidunt est.
        </p>
        <button
          onClick={authenticateUser}
          class="inline-flex justify-center items-center space-x-3 text-white bg-tetiary border-0 py-2 px-6 focus:outline-none hover:bg-secondaryColor rounded text-lg mt-6 sm:w-[70%] w-full"
        >
          <div>Sign in with Google</div> <Google />
        </button>
        {/* <div className="mt-4">
          Already have an account?
          <Link to="/auth/sign_in">
            <span className="underline text-tetiary font-bold cursor-pointer ml-2">
              Sign In
            </span>
          </Link>
        </div> */}
      </div>
      {/* end signup form */}

      {/* start illustration */}
      <div className="w-[100rem] h-[36rem] bg-primaryColor hidden sm:inline-flex">
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
