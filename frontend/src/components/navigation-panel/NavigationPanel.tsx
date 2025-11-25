import GlobalSearchBar from "../GlobalSearchBar";
import { useNavigationPanelContext } from "../../contexts/NavigationPanelContext";
import DefaultMobileLeft from "./DefaultMobileLeft";
import DefaultInteractionTools from "./DefaultInteractionTools";


export default function NavigationPanel() {
    const { navElements: [navElements] } = useNavigationPanelContext()!

	return (
		<div className="navigation-panel
			bg-(--primary-secondary-rightpanel-clr)
			relative z-40
			border-gray-300 border-b-2 p-2
			w-full h-[10vh]
			flex flex-row justify-between gap-3 justify-self-end items-center
			xl:mt-2 xl:p-0
		">
			<GlobalSearchBar />

			<div className="mobile-left
				w-[75%] h-[70%]
				flex flex-row items-center gap-2
				xl:hidden
			">
				{ navElements.mobileLeft || <DefaultMobileLeft /> }
			</div>

			{ navElements.right || <DefaultInteractionTools /> }
		</div>
	)
}
