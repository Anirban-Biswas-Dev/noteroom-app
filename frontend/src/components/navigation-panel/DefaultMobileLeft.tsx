import HamburgerMenuButton from "@components/HamburgerMenuButton"
import { useGlobalLayoutContext } from "@contexts/GlobalLayoutContext"
import NoteRoomLogo from "@images/noteroom_logo.png"

export default function DefaultMobileLeft() {
	const { sideBar: [, setOpenSidebar] } = useGlobalLayoutContext()!

	return (
		<div className="mobile-left
			w-[75%] h-[70%]
			flex flex-row items-center gap-2
			xl:hidden
		">
			<HamburgerMenuButton onClick={() => setOpenSidebar(prev => !prev) } />
			<div className="app-logo w-12 h-12 overflow-hidden flex flex-row justify-start items-center">
				<img src={NoteRoomLogo} className="h-full w-full object-cover" />
			</div>
		</div>
	)
}
