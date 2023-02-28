const PollutantsBoxes = ({ name, reading, isSafe }) => {
  return (
    <div
      href="#"
      className={`block w-[100%] p-2 sm:p-6 ${
        reading > isSafe ? "bg-red-600 animate-pulse" : "bg-tetiary"
      } border border-gray-200 rounded-lg shadow space-y-1 sm:space-y-2 `}
    >
      <h5 className="font-normal tracking-tight">{name}</h5>
      <p className="font-normal text-xl ">{reading}</p>
      <p className="font-normal">{reading > isSafe ? "UNSAFE" : "SAFE"}</p>
    </div>
  );
};

export default PollutantsBoxes;
