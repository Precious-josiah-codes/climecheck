import { useContext } from "react";
import { Link } from "react-router-dom";
import { pollutantsContext } from "../state/context/pollutants";

const Sidebar = () => {
  const { toggleSidebar, profile } = useContext(pollutantsContext);
  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-0 h-screen  `}
      aria-label="Sidebar"
    >
      <div
        className={`h-full bg-primaryColor w-64 px-3 py-4 overflow-y-auto border-r border-gray-500 flex flex-col justify-between relative transition-transform -translate-x-full ${
          toggleSidebar ? "translate-x-0" : "sm:translate-x-0"
        }`}
      >
        {/* logo */}
        <div className="">
          {" "}
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900"
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="ml-3 text-white">Climecheck</span>
            </a>
          </li>
        </div>

        {/* links */}
        <ul class="space-y-2 text-[15.9px]">
          {/* Dashboard */}
          <Link to="/">
            <li>
              <a
                href="#"
                class="flex items-center p-2 font-normal text-gray-200 rounded-lg dark:text-white hover:bg-tetiary hover:text-white hover:font-bold"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
              </a>
            </li>
          </Link>
          {/* add devices */}
          <Link to="/add_device">
            <li>
              <a
                href="#"
                class="flex items-center p-2 font-normal text-gray-300 rounded-lg hover:text-white hover:font-bold hover:bg-tetiary"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Add Device</span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {profile?.devices?.length}
                </span>
              </a>
            </li>
          </Link>
        </ul>

        {/* keep earth clean illustration */}
        <div className="h-[19rem] w-[14.4rem] flex flex-col justify-center items-center bg-secondaryColor rounded-md">
          <div className="text-[1rem] text-center text-white font-medium">
            Keep the earth <br /> clean
          </div>
          <img src="./save-earth.png" alt="" className="w-[13rem]" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
