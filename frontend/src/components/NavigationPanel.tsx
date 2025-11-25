import GlobalSearchBar from "./GlobalSearchBar";
import { useNavigationPanelContext } from "../contexts/NavigationPanelContext";
import HamburgerMenuButton from "./HamburgerMenuButton";
import NoteRoomLogo from "@images/noteroom_logo.png"
import { useGlobalLayoutContext } from "@contexts/GlobalLayoutContext";
import React from "react";
import icons from "@utils/iconsLoader";

function DefaultMobileLeft() {
	const { sideBar: [, setOpenSidebar] } = useGlobalLayoutContext()!

	return (
		<>
			<HamburgerMenuButton onClick={() => setOpenSidebar(prev => !prev) } />
			<div className="app-logo w-12 h-12 overflow-hidden flex flex-row justify-start items-center">
				<img src={NoteRoomLogo} className="h-full w-full object-cover" />
			</div>
		</>
	)
}

function InteractionTool({ name, children, extendedClass }: { name: string, children: React.ReactElement<any>, extendedClass?: string }) {
	const clonedIcon = React.cloneElement(children, {
		className: `xl:h-[20px] xl:w-[20px] h-[25px] w-[25px]`
	})

	return (
		<div className={`${name} xl:border-gray-300 flex justify-center items-center xl:border h-10 w-10 rounded-full hover:bg-gray-100 ${extendedClass}`}>
			{clonedIcon}
		</div>
	)
}

function DefaultInteractionTools() {
    return (
        <div className="interactions-tools
			flex flex-row items-center justify-around gap-1
			xl:p-0 xl:gap-3 xl:w-[25%] xl:justify-between
			desktop:w-[10%]
		">
            <InteractionTool name='notification'>
                <icons.notification />
            </InteractionTool>

            <InteractionTool name='chats'>
                <icons.chat />
            </InteractionTool>

            <InteractionTool name='search' extendedClass='block xl:hidden'>
                <icons.search viewBox="0 0 24 24" />
            </InteractionTool>

            <div className="justify-self-start h-10 w-10 overflow-hidden rounded-[50%]">
                <img 
                    src="https://placehold.co/600x400/yellow/black?text=A" 
                    className='w-full h-full object-cover'
                    alt="user"
                />
            </div>
        </div>
    )
}


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
