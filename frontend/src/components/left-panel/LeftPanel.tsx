import { useLeftPanelContext } from "@contexts/LeftPanelContext";
import LeftPanelNavigation from "./LeftPanelNavigation"

export default function LeftPanel({ open = false }: { open: boolean }) {
	const { leftPanelElements: [leftPanelElements] } = useLeftPanelContext()!

	return (
		<div className={`left-panel
			bg-(--leftpanel-maincontainer-clr)
			row-span-2
			overflow-visible border-gray-300 border-r-2
			absolute w-[65%] z-50 h-[90vh] bottom-0
			transition-transform duration-300
			transform ${open ? 'translate-x-0' : '-translate-x-full'}
			sm:w-[35%]
			md:w-[35%]
			lg:w-[30%]
			xl:static xl:flex xl:flex-col xl:items-start xl:w-full xl:translate-x-0 xl:border-r-0 xl:h-screen xl:z-0
		`}>

			{ leftPanelElements.container || <LeftPanelNavigation /> }
		</div>
	);
}
