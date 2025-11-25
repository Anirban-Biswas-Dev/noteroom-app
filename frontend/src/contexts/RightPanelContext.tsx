import type { StateController } from "@stypes/global";
import { createContext, useContext, useState } from "react";

type TRightPanalElements = {
	container?: React.ReactNode
}
type TRightPanelContext = {
    rightPanelElements: StateController<TRightPanalElements>
}

const RightPanelContext = createContext<TRightPanelContext | null>(null)

export default function RightPanelProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    const [rightPanelElements, setRightPanelElements] = useState<TRightPanalElements>({})

    return (
        <RightPanelContext value={{ rightPanelElements: [rightPanelElements, setRightPanelElements] }}>
            { children }
        </RightPanelContext>
    )
}

export function useRightPanelContext() {
    return useContext(RightPanelContext)
}
