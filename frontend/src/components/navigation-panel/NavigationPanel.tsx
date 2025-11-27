import GlobalSearchBar from "../GlobalSearchBar";
import { useNavigationPanelContext } from "../../contexts/NavigationPanelContext";
import DefaultMobileLeft from "./DefaultMobileLeft";
import DefaultInteractionTools from "./DefaultInteractionTools";


export default function NavigationPanel() {
    const { navElements: [navElements] } = useNavigationPanelContext()!

	return (
		<div className={`navigation-panel
			bg-(--primary-secondary-rightpanel-clr)
			relative z-40
			border-gray-300 border-b-2 p-2
			w-full h-[10vh]
			flex flex-row justify-between gap-3 justify-self-end items-center
			xl:mt-2 xl:p-0 ${navElements.desktop?.show ? '' : 'xl:hidden'}
		`}>
			<div className="desktop hidden xl:flex items-center gap-2 w-full h-full">
				{ navElements.desktop?.left || <GlobalSearchBar /> }
				{ navElements.desktop?.right || <DefaultInteractionTools /> }
			</div>

			<div className="mobile flex w-full h-full xl:hidden justify-between items-center">
				{ navElements.mobile?.left || <DefaultMobileLeft /> }
				{ navElements.mobile?.right || <DefaultInteractionTools />}				
			</div>
		</div>
	)
}



















































{/* <div className="
				">
					{ navElements.mobileLeft || <DefaultMobileLeft /> }
				</div> */}