import type { StateController } from "@stypes/global";
import { createContext, useContext, useState } from "react";

type TTopbarElements = {
	elements?: React.ReactNode
}
type TTopbarContext = {
    topbarElements: StateController<TTopbarElements>
}

const TopbarContext = createContext<TTopbarContext | null>(null)

export default function TopbarProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
	const [topbarElements, setTopbarElements] = useState<TTopbarElements>({})

    return (
	    <TopbarContext value={{topbarElements: [topbarElements, setTopbarElements]}}>
		    {children}
	    </TopbarContext>
    )
}

export function useTopbarContext() {
	return useContext(TopbarContext)
}
