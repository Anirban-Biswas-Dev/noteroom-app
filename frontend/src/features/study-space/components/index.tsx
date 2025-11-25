import BackButton from "@components/BackButton"
import HamburgerMenuButton from "@components/HamburgerMenuButton"
import { useGlobalLayoutContext } from "@contexts/GlobalLayoutContext"
import { useNavigationPanelContext } from "@contexts/NavigationPanelContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function StudySpace() {
	const { navElements: [, setNavElements] } = useNavigationPanelContext()!
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


	return null
}
