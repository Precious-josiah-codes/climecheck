const DeviceList = ({ goToPollutants, devices }) => {
  console.log(devices, "devices");
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-left text-gray-500 border border-gray-500 overflow-hidden">
        <thead class=" uppercase bg-primaryColor border-b border-gray-500  text-[14px] sm:text-[16px]">
          <tr className="text-gray-300">
            <th class="px-6 py-5"></th>
            <th class="px-6 py-5  font-normal">Device Name</th>
            <th class="px-6 py-5 font-normal">Device Number</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device, index) => (
            <tr
              class="bg-primaryColor text-[1rem] text-gray-300 cursor-pointer hover:bg-tetiary hover:text-white"
              key={index}
              onClick={goToPollutants}
            >
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                #{index + 1}
              </th>
              <td class="px-6 py-4">{device.deviceName}</td>
              <td class="px-6 py-4">{device.sensorNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceList;
