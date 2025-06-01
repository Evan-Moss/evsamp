import { Frown, Ghost, HeartCrack, PauseCircle } from "lucide-react";
import { CustomTooltip } from "../tootlip";
import { AudioLinesIcon } from "../ui/audio-lines";
import { PlayIndicatorStatus } from "@/types/types";

interface PlayIndicatorProps {
    status?: PlayIndicatorStatus,
}

export function PlayIndicator({ status }: PlayIndicatorProps) {
    if (status === PlayIndicatorStatus.PLAYING) {
        return (
            <CustomTooltip content={"Playing"}>
                <AudioLinesIcon size={24} />
            </CustomTooltip>
        )
    }
    if (status === PlayIndicatorStatus.PAUSED) {
        return (
            <CustomTooltip content={"Paused"}>
                <PauseCircle />
            </CustomTooltip>
        )
    }
    if (status === PlayIndicatorStatus.IDLE) {
        return (
            <CustomTooltip content={"Idle"}>
                <Ghost />
            </CustomTooltip>
        )
    }
    return (
        <CustomTooltip content={"Status Unknown"}>
            <Frown/>
        </CustomTooltip>
    )
}