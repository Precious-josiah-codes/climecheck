import { useContext, useRef } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { pollutantsContext } from "../state/context/pollutants";
import AddDeviceModal from "./AddDeviceModal";

const MainLayout = () => {
  const { modalOverlay, modal, openAddDeviceModal, addDevice, profile } =
    useContext(pollutantsContext);

  return (
    <>
      {/* start sidebar */}
      <Sidebar openAddDeviceModal={openAddDeviceModal} />
      {/* end sidebar */}

      {/* start main section */}
      <div class="p-4 sm:ml-64 relative h-[100%] flex flex-col">
        {/* nav */}
        <nav class="bg-secondaryColor border-gray-200  py-2.5 rounded dark:bg-gray-900 sticky top-0">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            {/* logo and brand name */}
            <a href="https://flowbite.com/" class="flex items-center">
              <span class="self-center text-xl font-medium whitespace-nowrap text-white">
                Dashboard
              </span>
            </a>

            {/* profile pic and notification */}
            <div class="flex justify-between items-center md:order-2 w-[6rem]">
              {/* notification */}
              <div className="relative inline-block w-6 h-6">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  ></path>
                </svg>
                <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
              </div>

              {/* profile photo */}
              <div class="flex text-sm bg-tetiary rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2 w-8 h-8 inline-flex items-center justify-center">
                <div className="font-bold text-white">{profile.initial}</div>
              </div>
            </div>
          </div>
        </nav>

        {/* main section */}
        <Outlet />
        {/* add device btn */}
      </div>
      {/* Add device modal */}
      <AddDeviceModal
        modalOverlay={modalOverlay}
        modal={modal}
        openAddDeviceModal={openAddDeviceModal}
        addDevice={addDevice}
      />
      {/* end main section */}
    </>
  );
};

export default MainLayout;
