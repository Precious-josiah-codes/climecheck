import { useRef, useState } from "react";
import AddDeviceModal from "../components/AddDeviceModal";
import DeviceList from "../components/DeviceList";
import DeviceReadings from "../components/DeviceReadings";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const modalOverlay = useRef(null);
  const modal = useRef(null);
  const readingsModalOverlay = useRef(null);
  const readingsModal = useRef(null);

  const openAddDeviceModal = (isOpen) => {
    console.log("hello barbie");
    // modal class
    const modalCl = modal.current.classList;
    const overlayCl = modalOverlay.current.classList;

    if (isOpen) {
      overlayCl.remove("hidden");
      setTimeout(() => {
        modalCl.remove("opacity-0");
        modalCl.remove("-translate-y-full");
        modalCl.remove("scale-150");
      }, 100);
    } else {
      modalCl.add("-translate-y-full");
      setTimeout(() => {
        modalCl.add("opacity-0");
        modalCl.add("scale-150");
      }, 100);
      setTimeout(() => overlayCl.add("hidden"), 300);
    }
  };

  const openDeviceReadingsModal = (isOpen) => {
    // modal class
    const modalCl = readingsModal.current.classList;
    const overlayCl = readingsModalOverlay.current.classList;

    if (isOpen) {
      overlayCl.remove("hidden");
      setTimeout(() => {
        modalCl.remove("opacity-0");
        modalCl.remove("-translate-y-full");
        modalCl.remove("scale-150");
      }, 100);
    } else {
      modalCl.add("-translate-y-full");
      setTimeout(() => {
        modalCl.add("opacity-0");
        modalCl.add("scale-150");
      }, 100);
      setTimeout(() => overlayCl.add("hidden"), 300);
    }
  };
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
              <button
                type="button"
                class="flex text-sm bg-tetiary rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span class="sr-only">Open user menu</span>
                <div className="font-bold text-white">NK</div>
              </button>
            </div>
          </div>
        </nav>

        {/* main section       */}
        <div class="py-4 flex-1">
          {/* welcome text */}
          <div className="text-[1.1rem] w-[20rem] sm:w-[25rem] text-white mb-6 font-light">
            Hello Precious welcome to ClimeCheck
          </div>

          {/* device and pollutants details */}
          <div class="grid grid-cols-2 gap-4 mb-4 text-gray-100 w-full">
            {/* number of devices */}
            <div class="flex items-center px-2 sm:px-6 rounded h-28 bg-primaryColor border border-gray-500">
              <div className="flex">
                <div className="bg-secondaryColor flex items-center h-10 sm:h-auto py-0 px-2 sm:py-2 sm:px-3 rounded-md ">
                  {" "}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                    ></path>
                  </svg>
                </div>
                <div className="ml-2 sm:ml-6">
                  <div className="text-[14px] sm:text-[16px]">
                    CONNECTED DEVICE
                  </div>
                  <div className="text-[16px]">1</div>
                </div>
              </div>
            </div>
            {/* number of pollutants */}
            <div class="flex items-center px-2 sm:px-6 rounded h-28 bg-primaryColor border border-gray-500">
              <div className="flex">
                <div className="bg-secondaryColor flex items-center h-10 sm:h-auto py-0 px-2 sm:py-2 sm:px-3 rounded-md ">
                  {" "}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                    ></path>
                  </svg>
                </div>
                <div className="ml-2 sm:ml-6">
                  <div className="text-[14px] sm:text-[16px]">
                    TOTAL POLLUNTANT
                  </div>
                  <div className="text-[16px]">1</div>
                </div>
              </div>
            </div>
          </div>

          {/* device listing */}
          <DeviceList openDeviceReadingsModal={openDeviceReadingsModal} />
        </div>

        {/* add device btn */}
        <div
          className="text-white fixed bottom-[3rem] right-6 h-[4rem] w-[4rem] bg-tetiary flex justify-center items-center rounded-full animate-pulse text-[1rem] font-bold cursor-pointer"
          onClick={() => openAddDeviceModal(true)}
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            ></path>
          </svg>
        </div>
      </div>
      {/* end main section */}

      {/* Add device modal */}
      <AddDeviceModal
        modalOverlay={modalOverlay}
        modal={modal}
        openAddDeviceModal={openAddDeviceModal}
      />

      {/* Device readings modal */}
      <DeviceReadings
        readingsModalOverlay={readingsModalOverlay}
        readingsModal={readingsModal}
        openDeviceReadingsModal={openDeviceReadingsModal}
      />
    </>
  );
};

export default Dashboard;
