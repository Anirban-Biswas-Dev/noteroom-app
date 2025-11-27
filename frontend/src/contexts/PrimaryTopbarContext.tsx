import type { StateController } from "@stypes/global";
import { createContext, useContext, useState } from "react";

type TPrimaryTopbarElements = {
	elements?: React.ReactNode
}
type TPrimaryTopbarContext = {
	primaryTopbar: StateController<TPrimaryTopbarElements>
}
const LeftPanelContext = createContext<TPrimaryTopbarContext | null>(null)

export default function PrimaryTopbarProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    const [primaryTopbar, setPrimaryTopbar] = useState<TPrimaryTopbarElements>({})

    return (
        <LeftPanelContext value={{ primaryTopbar: [primaryTopbar, setPrimaryTopbar] }}>
            { children }
        </LeftPanelContext>
    )
}

export function usePrimaryTopbarContext() {
    return useContext(LeftPanelContext)
}
