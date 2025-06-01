import { CurrentyPlayingCard } from "@/components/card-components/currently-playing-card";
import { ModeToggle } from "@/components/mode-toggle";
import { CurrentyPlayingCardStates, PlayIndicatorStatus } from "@/types/types";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import "./../app/globals.css";


export default function App() {
  return (
    <>
      {/* <div className="w-screen h-screen flex flex-col p-4">
          */}
      <div className="relative w-screen h-screen p-4 flex flex-col grow justify-center items-center">
        <div className="absolute top-0 left-0 p-4">
          <ModeToggle />
        </div>
        <CurrentyPlayingCard
          currentState={CurrentyPlayingCardStates.APPLETV}
          playStatus={PlayIndicatorStatus.UNKNOWN}
          volume={71}
          muted={false}
        />
      </div>
      {/* </div> */}
    </>
  );
}
