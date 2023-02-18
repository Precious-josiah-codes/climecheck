const AddDeviceModal = ({ modalOverlay, modal, openAddDeviceModal }) => {
  return (
    <section
      ref={modalOverlay}
      className="fixed hidden flex z-[99999] top-0 bg-black bg-opacity-90 h-full sm:h-[100vh] w-full justify-center items-center pt-10 md:pt-0 "
    >
      {/* modal  */}
      <div
        ref={modal}
        className="transform -translate-y-full scale-150  relative bg-primaryColor w-[20rem] sm:w-[30rem] h-[20rem] shadow-lg transition-opacity transition-transform duration-300 px-6 flex flex-col justify-center space-y-6 rounded-lg"
      >
        <div className="text-white">Add a Device</div>
        {/* Device name */}
        <input
          type="email"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Device name"
        />

        {/* Sensor number */}
        <input
          type="email"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter sensor number"
        />

        {/* add device btn */}
        <button
          type="button"
          class="text-white bg-tetiary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-base px-6 py-3 text-center w-full"
        >
          Add Device
        </button>

        {/* button close */}
        <button
          onClick={() => openAddDeviceModal(false)}
          className="absolute -top-9 -right-3 bg-tetiary  text-2xl w-10 h-10 rounded-full focus:outline-none text-white flex justify-center items-center"
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

export default AddDeviceModal;
