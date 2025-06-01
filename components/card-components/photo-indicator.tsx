import { Disc3, Music, Moon, Unplug } from "lucide-react";
import { CurrentyPlayingCard } from "./currently-playing-card";
import { CurrentyPlayingCardStates } from "@/types/types";

interface PhotoIndicatorProps {
    status: CurrentyPlayingCardStates,
}

function Photo({status}: {status: CurrentyPlayingCardStates}) {
    if (status === CurrentyPlayingCardStates.PHONO) {
        return (
            <Disc3 className="w-full animate-spin [animation-duration:1.8s] h-full p-8 stroke-neutral-300" />
        )
    }

    if (status === CurrentyPlayingCardStates.APPLETV) {
        return (
            <img className="w-[175px] h-[175px] bg-sky-200 object-cover" src="AppleTVLogo.svg.png" />
        )
    }

    if (status === CurrentyPlayingCardStates.NEOS) {
        return (
            // Get Album art or
            // {/* <img className="w-[175px] h-[175px] bg-sky-200 object-cover" src="Sgt._Pepper's_Lonely_Hearts_Club_Band.jpg" /> */}
            <Music className="w-full h-full p-8 stroke-neutral-300" />
        )
    }

    if (status === CurrentyPlayingCardStates.IDLE) {
        return (
            <Moon className="w-full h-full p-8 stroke-neutral-300" />
        )
    }
    return (
        <Unplug className="w-full h-full p-8 stroke-neutral-300" />
    )
}

export function PhotoIndicator({ status }: PhotoIndicatorProps) {
    return (
        <div className="min-w-[175px] h-[175px] max-w-[50%] bg-neutral-700">
            <Photo status={status}/>
        </div>
    )
}