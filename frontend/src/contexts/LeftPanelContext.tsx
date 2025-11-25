import type { StateController } from "@stypes/global";
import { createContext, useContext, useState } from "react";

type TLeftPanelElements = {
	container?: React.ReactNode
}
type TNavigationPanelContext = {
    leftPanelElements: StateController<TLeftPanelElements>
}

const LeftPanelContext = createContext<TNavigationPanelContext | null>(null)

export default function LeftPanelProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    const [leftPanelElements, setLeftPanelElements] = useState<TLeftPanelElements>({})

    return (
        <LeftPanelContext value={{ leftPanelElements: [leftPanelElements, setLeftPanelElements] }}>
            { children }
        </LeftPanelContext>
    )
}

export function useLeftPanelContext() {
    return useContext(LeftPanelContext)
}
