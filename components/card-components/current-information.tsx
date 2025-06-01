import { CurrentyPlayingCardStates } from "@/types/types";
import { CustomTooltip } from "../tootlip";
import { CurrentyPlayingCard } from "./currently-playing-card";

interface CurrentInformationProps {
    status: CurrentyPlayingCardStates,
    title?: string,
    message?: string
}

const statusMap: { [key in CurrentyPlayingCardStates]?: { "title": string, message: string } } = {
    [CurrentyPlayingCardStates.IDLE]: {
        title: "Idle",
        message: "Ev's amp is currently Idle"
    },
    [CurrentyPlayingCardStates.APPLETV]: {
        title: "TV",
        message: "Ev is currently watching TV"
    },
    [CurrentyPlayingCardStates.PHONO]: {
        title: "Vinyl",
        message: "Ev is currently listening to a record"
    },
    [CurrentyPlayingCardStates.UNKNOWN]: {
        title: "Unknown",
        message: "Unable to get status of Ev's amp"
    }
}

export function CurrentInformation({ status, title, message }: CurrentInformationProps) {
    let titleString;
    let messageString;
    if (status === CurrentyPlayingCardStates.NEOS) {
        titleString = title || "Unknown Song"
        messageString = message || "Unknown Artist"
    } else {
        titleString = statusMap[status]?.title || "Unknown"
        messageString = statusMap[status]?.message || "Unknown"
    }

    return (
        <div className="pt-4 pb-4 flex flex-col gap-1 justify-center w-full">
            {/* <CustomTooltip content={titleString}> */}
            <div className="flex flex-row w-full">
                <h2 className="font-semibold truncate w-0 flex-grow pointer-events-none" >
                    {titleString}
                </h2>
            </div>
            {/* </CustomTooltip> */}
            <div className="flex flex-row w-full">
                <h3 className="truncate w-0 flex-grow">
                    {messageString}
                </h3>
            </div>
        </div>
    )
}