import { Card, CardContent } from "@/components/ui/card"
import { CurrentyPlayingCardStates, PlayIndicatorStatus } from "@/types/types"
import { CurrentInformation } from "./current-information"
import { PhotoIndicator } from "./photo-indicator"
import { PlayIndicator } from "./play-indicator"
import { VolumeIndicator } from "./volume-indicator"

interface CurrentyPlayingCardProps {
    currentState: CurrentyPlayingCardStates,
    playStatus: PlayIndicatorStatus,
    volume: number,
    muted: boolean,
    songTitle?: string,
    songArtist?: string,
}

export function CurrentyPlayingCard({
    currentState = CurrentyPlayingCardStates.UNKNOWN,
    playStatus = PlayIndicatorStatus.UNKNOWN,
    volume,
    muted,
    songTitle,
    songArtist,
}: CurrentyPlayingCardProps) {
    if (currentState === CurrentyPlayingCardStates.IDLE) {
        playStatus = PlayIndicatorStatus.IDLE
    }

    if (currentState === CurrentyPlayingCardStates.UNKNOWN) {
        playStatus = PlayIndicatorStatus.UNKNOWN
    }

    return (
        <Card className="w-[550px] h-[175px] overflow-hidden">
            <CardContent>
                <div className="flex -ml-6 -mb-6 -mt-6 gap-4">
                    <PhotoIndicator status={currentState} />
                    <div className="relative flex w-full">
                        <div className="absolute top-0 right-0 flex gap-1 mt-4">
                            <PlayIndicator status={playStatus} />
                        </div>
                        <div className="absolute top-0 left-0 flex gap-1 mt-4">
                            <VolumeIndicator volume={volume} muted={muted} unknown={currentState === CurrentyPlayingCardStates.UNKNOWN} />
                        </div>
                        <CurrentInformation status={currentState} title={songTitle} message={songArtist} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}