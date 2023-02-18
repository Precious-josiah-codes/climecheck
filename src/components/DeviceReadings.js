const DeviceReadings = ({
  readingsModalOverlay,
  readingsModal,
  openDeviceReadingsModal,
}) => {
  return (
    <section
      ref={readingsModalOverlay}
      className="fixed hidden flex z-[99999] top-0 bg-black bg-opacity-90 h-[100vh] w-full justify-center items-center pt-10 md:pt-0 "
    >
      {/* modal  */}
      <div
        ref={readingsModal}
        className="transform -translate-y-full scale-150  relative bg-primaryColor w-[20rem] sm:w-[50rem] h-[30rem] shadow-lg transition-opacity transition-transform duration-300 px-3 sm:px-6 flex flex-col justify-center space-y-6 rounded-lg"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-white ">
          {[1, 2, 3, 4, 5, 6, 7].map((readings) => (
            <div
              href="#"
              class="block w-[100%] p-2 sm:p-6 bg-tetiary border border-gray-200 rounded-lg shadow  space-y-1 sm:space-y-2"
            >
              <h5 class="font-normal tracking-tight">CO</h5>
              <p class="font-normal text-xl ">5.03</p>
              <p class="font-normal">SAFE</p>
            </div>
          ))}
        </div>

        {/* button close */}
        <button
          onClick={() => openDeviceReadingsModal(false)}
          className="absolute sm:-top-9 -top-12 -right-3 bg-tetiary  text-2xl w-10 h-10 rounded-full focus:outline-none text-white flex justify-center items-center"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default DeviceReadings;
