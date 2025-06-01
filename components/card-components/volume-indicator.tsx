import { Volume1Icon, Volume2Icon, VolumeIcon, VolumeOff, VolumeXIcon } from "lucide-react"
import { CustomTooltip } from "../tootlip"

interface VolumeIndicatorProps {
    volume: number,
    muted?: boolean,
    unknown?: boolean
}

export function VolumeIndicator({ volume, muted, unknown }: VolumeIndicatorProps) {
    if (unknown) {
        return (
            <CustomTooltip content={"Status Unknown"}>
                <VolumeOff />
            </CustomTooltip>
        )
    }
    if (muted) {
        return (
            <CustomTooltip content={"Muted"}>
                <VolumeXIcon />
            </CustomTooltip>
        )
    }
    if (volume === 0) {
        return (
            <CustomTooltip content={volume.toString()}>
                <VolumeIcon />
            </CustomTooltip>

        )
    }
    if (volume <= 60) {
        return (
            <CustomTooltip content={volume.toString()}>
                <Volume1Icon />
            </CustomTooltip>

        )
    }
    if (volume <= 100) {
        return (
            <CustomTooltip content={volume.toString()}>
                <Volume2Icon />
            </CustomTooltip>

        )
    }
    return (
        <CustomTooltip content={"Status Unknown"}>
            <VolumeOff />
        </CustomTooltip>
    )
}