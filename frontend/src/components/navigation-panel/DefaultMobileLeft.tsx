import HamburgerMenuButton from "@components/HamburgerMenuButton"
import { useGlobalLayoutContext } from "@contexts/GlobalLayoutContext"
import NoteRoomLogo from "@images/noteroom_logo.png"

export default function DefaultMobileLeft() {
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
