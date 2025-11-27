import BackButton from "@components/BackButton"
import HamburgerMenuButton from "@components/HamburgerMenuButton"
import { useGlobalLayoutContext } from "@contexts/GlobalLayoutContext"
import { useLeftPanelContext } from "@contexts/LeftPanelContext"
import { useNavigationPanelContext } from "@contexts/NavigationPanelContext"
import { useEffect, useState } from "react"
import DecksSearchBar from "./left-panel/DecksSearchBar"
import { DecksContainer } from "./left-panel/DecksSection"
import { useRightPanelContext } from "@contexts/RightPanelContext"
import { useTopbarContext } from "@contexts/TopbarContext"
import RecentOpenedTabs from "./RecentOpenedTabs"
import icons from "@utils/iconsLoader"
import { usePrimaryTopbarContext } from "@contexts/PrimaryTopbarContext"
import DeckNavigator from "./DeckNavigator"
import Post from "@components/features/Post"

export default function StudySpace() {
	const { navElements: [, setNavElements] } = useNavigationPanelContext()!
	const { leftPanelElements: [, setLeftPanelElements] } = useLeftPanelContext()!
	const { rightPanelElements: [, setRightPanelElements] } = useRightPanelContext()!
	const { topbarElements: [, setTopbarElements] } = useTopbarContext()!
	const { sideBar: [, setOpenSidebar] } = useGlobalLayoutContext()!
	const { primaryTopbar: [, setPrimaryTopbar]} = usePrimaryTopbarContext()!

	useEffect(() => {
		return () => setOpenSidebar(false)
	}, [])

	useEffect(() => {
        setNavElements({
			desktop: {
				show: false
			},
			mobile: {
				left: (
					<div className='flex gap-2 xl:hidden'>
						<BackButton />
						<HamburgerMenuButton onClick={() => setOpenSidebar(prev => !prev)} />
						<div className="action-title h-12 overflow-hidden flex flex-row justify-start items-center">
							<span className="text-lg font-['Space_Grotesk']">Study Space</span>
						</div>
					</div>
				),
				right: (
					<div className='flex gap-2'>
						<div className="upload-button rounded-[50%] p-3 bg-[#42ACDE]">
							 <icons.share className="w-5 h-5" stroke="white" />
						 </div>
					</div>
				)
			}
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
				<div className="hidden xl:flex w-full h-full">
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
				</div>
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

	useEffect(() => {
		setPrimaryTopbar({
			elements: (
				<div className="desktop-deck-navigator hidden w-full items-center xl:flex mb-10">
					<DeckNavigator />
				</div>
			)
		})

		return () => setPrimaryTopbar({})
	}, [])

	const [openedPostTools, setOpenedPostTools] = useState<number | null>(null)

	return (
		<div className="flex w-full flex-col gap-10 overflow-y-auto">
			<div className="mobile-deck-navigator flex xl:hidden mt-5">
				<DeckNavigator />
			</div>

			<div className="mb-10">
				<Post
					authorProfilePic={<></>}
					postCreationDate={false}
					postInteraction={<></>}
					tools={
						<div className="view-origin-post">
							<button className={`
								bg-[#484848]
								w-auto p-2
								font-medium text-[12px] text-white
								rounded-full border-none
								outline-transparent cursor-pointer
							`}>View Original Post</button>
						</div>
					}
					floatingDropDownItems={[
						{label:"Move to Another Folder", icon:<icons.studyspace />},
						"divider",
						{label:"Remove from Space", icon:<icons.delete className='w-[25px] h-[25px] cursor-pointer' viewBox="0 0 24 24" />},
					]}
					withMedia={true} 
					id={1} 
					openedPostTools={[openedPostTools, setOpenedPostTools]} 
				/>
			</div>
		</div>
	)
}
