import BackButton from "@components/BackButton"
import HamburgerMenuButton from "@components/HamburgerMenuButton"
import { useGlobalLayoutContext } from "@contexts/GlobalLayoutContext"
import { useLeftPanelContext } from "@contexts/LeftPanelContext"
import { useNavigationPanelContext } from "@contexts/NavigationPanelContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import DecksSearchBar from "./left-panel/DecksSearchBar"
import { DecksContainer } from "./left-panel/DecksSection"
import { useRightPanelContext } from "@contexts/RightPanelContext"

export default function StudySpace() {
	const { navElements: [, setNavElements] } = useNavigationPanelContext()!
	const { leftPanelElements: [, setLeftPanelElements] } = useLeftPanelContext()!
	const { rightPanelElements: [, setRightPanelElements] } = useRightPanelContext()!
	const { sideBar: [, setOpenSidebar] } = useGlobalLayoutContext()!
	const navigate = useNavigate()

	useEffect(() => {
        setNavElements({
            mobileLeft: (
                <div className='flex gap-2 xl:hidden'>
                    <BackButton onClick={() => navigate(-1)} />
                    <HamburgerMenuButton onClick={() => setOpenSidebar(prev => !prev)} />
                    <div className="action-title h-12 overflow-hidden flex flex-row justify-start items-center">
                        <span className="text-lg font-['Space_Grotesk']">Study Space</span>
                    </div>
                </div>
            ),
            right: <></>
        })

        return () => setNavElements({})
    }, [])

	useEffect(() => {
		setLeftPanelElements({
			container: (
				<div className="container flex-col w-[92%] h-[98%] flex mt-auto mx-auto gap-5">
					<div className="title hidden xl:flex items-center gap-4">
						<BackButton />
						<span className="font-medium font-['Space_Grotesk'] text-[20px]">Study Space</span>
					</div>

					<DecksSearchBar />
					<DecksContainer />
				</div>
			)
		})

		return () => setLeftPanelElements({})
	}, [])

	useEffect(() => {
		setRightPanelElements({
			container: <></>
		})

		return () => setRightPanelElements({})
	}, [])


	return null
}
