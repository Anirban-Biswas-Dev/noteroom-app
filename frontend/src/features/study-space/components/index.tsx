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
import { useTopbarContext } from "@contexts/TopBarContext"
import RecentOpenedTabs from "./RecentOpenedTabs"
import icons from "@utils/iconsLoader"

export default function StudySpace() {
	const { navElements: [, setNavElements] } = useNavigationPanelContext()!
	const { leftPanelElements: [, setLeftPanelElements] } = useLeftPanelContext()!
	const { rightPanelElements: [, setRightPanelElements] } = useRightPanelContext()!
	const { topbarElements: [, setTopbarElements] } = useTopbarContext()!
	const { sideBar: [, setOpenSidebar] } = useGlobalLayoutContext()!

	useEffect(() => {
		return () => setOpenSidebar(false)
	}, [])

	useEffect(() => {
        setNavElements({
            mobileLeft: (
                <div className='flex gap-2 xl:hidden'>
                    <BackButton />
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
		setTopbarElements({
			elements: (
				<>
					<div className="left-side w-[85%] h-full p-2 left-panel">
						<RecentOpenedTabs />
				    </div>

					<div className="right-side flex items-center justify-center w-[15%] h-full">
						<div className="tools p-2 flex">
							<button className='button
								bg-[#42acde] text-white
								outline-transparent border-none rounded-[20px] p-2
								w-[150px]
								flex justify-center items-center gap-[5px]
								cursor-pointer
							'>
								<icons.share className="w-5 h-5" stroke="white" />
								<span className="text-[13px] font-['Space_Grotesk'] text-white font-normal">Upload</span>
							</button>
						</div>
					</div>
				</>
			)
		})

		return () => setTopbarElements({})
	}, [])

	useEffect(() => {
		setRightPanelElements({
			container: <></>
		})

		return () => setRightPanelElements({})
	}, [])


	return null
}
