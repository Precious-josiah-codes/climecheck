import { useContext } from "react";
import PollutantsBoxes from "../components/PollutantsBoxes";
import { pollutantsContext } from "../state/context/pollutants";

const Pollutants = () => {
  const { pollutants, isSafe, profile } = useContext(pollutantsContext);

  return (
    <section>
      {/* welcome text */}
      <div className="text-[1.1rem] w-[20rem] sm:w-[25rem] text-white mb-6 font-light">
        Hello {profile.username} welcome to ClimeCheck
      </div>

      {/* pollutants boxes */}
      <div className="relative w-[20rem] sm:w-[60rem] h-[30rem] transition-opacity transition-transform duration-300 px-0 sm:px-6 flex flex-col justify-center space-y-8 rounded-lg mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-white ">
          {/* PM1 */}
          {/* <PollutantsBoxes
            name="PM1"
            reading={pollutants?.PM1}
            isSafe={isSafe.PM1}
          /> */}

          {/* PM25 */}
          {/* <PollutantsBoxes
            name="PM25"
            reading={pollutants?.PM25}
            isSafe={isSafe.PM25}
          /> */}

          {/* PM10 */}
          {/* <PollutantsBoxes
            name="PM10"
            reading={pollutants?.PM10}
            isSafe={isSafe.PM10}
          /> */}

          {/* CO */}
          <PollutantsBoxes
            name="CO"
            reading={pollutants?.CO}
            isSafe={isSafe.CO}
          />

          {/* CO2 */}
          <PollutantsBoxes
            name="CO2"
            reading={pollutants?.CO2}
            isSafe={isSafe.CO2}
          />

          {/* TVOC */}
          {/* <PollutantsBoxes
            name="TVOC"
            reading={pollutants?.TVOC}
            isSafe={isSafe.TVOC}
          /> */}

          {/* FLAME */}
          <PollutantsBoxes
            name="FLAME"
            reading={pollutants?.Flame}
            isSafe={isSafe.Flame}
          />
        </div>
      </div>
    </section>
  );
};

export default Pollutants;
