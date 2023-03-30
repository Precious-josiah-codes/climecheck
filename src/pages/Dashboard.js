import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddDeviceModal from "../components/AddDeviceModal";
import DeviceList from "../components/DeviceList";
import DeviceReadings from "../components/DeviceReadings";
import Loader from "../components/Loader";
import { pollutantsContext } from "../state/context/pollutants";

const Dashboard = () => {
  const { profile } = useContext(pollutantsContext);

  // usenavigate instance
  const navigate = useNavigate();

  // go to pollutants readings
  function goToPollutants() {
    console.log("this is the pollutants");
    navigate("/pollutant_readings");
  }

  return (
    <>
      {/* main section */}
      <div class="py-4">
        {/* welcome text */}
        <div className="text-[1.1rem] w-[20rem] sm:w-[25rem] text-white mb-6 font-light">
          Hello {profile.username} welcome to ClimeCheck
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
                <div className="text-[16px]">{profile?.devices?.length}</div>
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
                  TOTAL POLLUTANT
                </div>
                <div className="text-[16px]">3</div>
              </div>
            </div>
          </div>
        </div>

        {/* device listing */}
        {profile?.devices?.length ? (
          <DeviceList
            goToPollutants={goToPollutants}
            devices={profile.devices}
          />
        ) : (
          <div className="text-center pt-9 text-white">You have no devices</div>
        )}
      </div>

      {/* end main section */}
    </>
  );
};

export default Dashboard;
