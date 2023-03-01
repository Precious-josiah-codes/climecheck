import { useContext, useState } from "react";
import { pollutantsContext } from "../state/context/pollutants";

const AddDevice = () => {
  const { addDevice } = useContext(pollutantsContext);
  const [deviceName, setdeviceName] = useState("");
  const [sensorNumber, setsensorNumber] = useState("");
  const [addDeviceLoader, setaddDeviceLoader] = useState(false);

  async function addDeviceFn() {
    setaddDeviceLoader(true);
    await addDevice(deviceName, parseInt(sensorNumber)).then(() => {
      setdeviceName(" ");
      setsensorNumber(" ");
      setaddDeviceLoader(false);
    });
  }

  return (
    <section className="flex justify-center ">
      <div className="relative  w-full sm:w-[45rem] h-[30rem] shadow-lg transition-opacity transition-transform duration-300 sm:px-6 flex flex-col justify-center space-y-6 rounded-lg">
        <div className="text-white">Add a Device</div>
        {/* Device name */}
        <input
          type="email"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Device name"
          onChange={(e) => setdeviceName(e.target.value)}
          value={deviceName}
        />

        {/* Sensor number */}
        <input
          type="email"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter sensor number"
          value={sensorNumber}
          onChange={(e) => setsensorNumber(e.target.value)}
        />

        {/* error status */}
        {!deviceName.length ||
          (sensorNumber.length <= 7 && (
            <div className="text-red-500">
              Invalid device name or sensor number. also sensor number should be
              up to 8 characters
            </div>
          ))}

        {/* add device btn */}
        <button
          type="button"
          className={`"text-white bg-tetiary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-base px-6 py-3 text-center w-full ${
            !deviceName.length || sensorNumber.length <= 7
              ? "pointer-events-none"
              : "pointer-events-auto"
          }`}
          onClick={addDeviceFn}
        >
          {!addDeviceLoader ? "Add Device" : "Adding....."}
        </button>
      </div>
    </section>
  );
};

export default AddDevice;
