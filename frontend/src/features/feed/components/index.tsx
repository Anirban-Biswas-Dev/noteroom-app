import { useEffect } from "react";
import PostSection from "./post-section/PostSection";
import FeedSection from "./feed-section/FeedSection";
import { useFloatingElementContext } from "../../../contexts/FloatingElementsContext";
import { useNavigate } from "react-router-dom";
import useWindowSize from "@hooks/useWindowSize";
import { useNavigationPanelContext } from "@contexts/NavigationPanelContext";

export default function Feed() {
    const navigate = useNavigate()
    const { width: windowWidth } = useWindowSize()
    const { navElements: [, setNavElements] } = useNavigationPanelContext()!

    const { 
		floatingOverlay: [, setOpenFloatingElement], 
		overlayElements: { 
			postContainer: [openPostContainer, setOpenPostContainer] 
		} 
	} = useFloatingElementContext()!

    function handleOpenPostContainer() {
        if (windowWidth > 1024) {
            setOpenPostContainer(true)
        } else {
            navigate("/post/create")
        }
    }

    useEffect(() => {
    	setOpenFloatingElement(openPostContainer)
    }, [openPostContainer, setOpenFloatingElement])

    useEffect(() => {
        setNavElements({
            desktop: {
                show: true
            }
        })

        return () => setNavElements({})
    }, [])

    return (
        <>
            <PostSection onClick={handleOpenPostContainer} />
            <FeedSection />
        </>
    )
}
