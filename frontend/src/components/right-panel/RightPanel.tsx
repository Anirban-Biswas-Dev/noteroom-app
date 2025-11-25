import { useState } from "react"
import RecentSection from "./RecentSection"
import RecentPosts from "./RecentPosts"

type TRecentSection = 'posts' | 'groups' | 'people'

export default function RightPanel() {
	const [activeRecentSection, setActiveRecentSection] = useState<TRecentSection | null>('posts')

    return (
        <div className="right-panel bg-(--primary-secondary-rightpanel-clr) hidden xl:flex">
			<div className="container w-[90%] h-full">
				<div className="header h-[10vh] flex items-center w-full">
					<span className="font-medium font-sans text-[18px]">Recently seen</span>
				</div>

				<div className="right-panel-container flex flex-col items-center h-[90vh] w-[90%] desktop:w-[80%]">
					<RecentSection activeRecentSection={[activeRecentSection, setActiveRecentSection]} />

					<div className="overflow-y-auto left-panel">
						{ activeRecentSection === "posts" && <RecentPosts /> }
					</div>
				</div>
			</div>
        </div>
    )
}
