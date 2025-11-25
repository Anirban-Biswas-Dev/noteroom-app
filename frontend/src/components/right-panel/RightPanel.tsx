import { useRightPanelContext } from "@contexts/RightPanelContext"
import { RecentPostsSection } from "./RecentPosts"


export default function RightPanel() {
	const { rightPanelElements: [rightPanelElements] } = useRightPanelContext()!

    return (
        <div className="right-panel bg-(--primary-secondary-rightpanel-clr) hidden xl:flex">
			{ rightPanelElements.container || <RecentPostsSection /> }
        </div>
    )
}
