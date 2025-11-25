import { Link } from "react-router-dom"
import RecentSection from "./RecentSection"
import { useState } from "react"

type TRecentSection = 'posts' | 'groups' | 'people'

function RecentPost() {
	const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit"

	return (
		<Link to={"/post"} className="recent-post
			flex gap-2
			border border-gray-300 shadow-sm rounded-[10px]
			p-2 cursor-pointer
		">
			<div className="left-side">
				<div className="user-profile-pic justify-self-start w-10 h-10 overflow-hidden rounded-[50%]">
                    <img
                        src="https://placehold.co/600x400/cyan/black?text=R"
                        className='w-full h-full object-cover'
                        alt="user"
                    />
                </div>
			</div>
			<div className="right-side flex flex-col gap-2">
				<div className="post-header w-full flex gap-2 items-center">
					<span className="hover:underline">Rafi Rahman</span> • <span>8d</span>
				</div>
				<div className="post-content w-full">
					<span className="text-justify hyphens-auto hover:underline font-medium">{ text.length > 50 ? `${text.slice(0, 50)}...` : text}</span>
				</div>
				<div className="post-footer w-full flex justify-between">
					<span>190 Likes</span>
					<span>500 Comments</span>
				</div>
			</div>
		</Link>
	)
}

function RecentPosts() {
	return (
		<div className="recent-posts flex flex-col gap-3 text-[12px] mb-10">
			<RecentPost />
			<RecentPost />
			<RecentPost />
			<RecentPost />
			<RecentPost />
			<RecentPost />
			<RecentPost />
		</div>
	)
}

export function RecentPostsSection() {
	const [activeRecentSection, setActiveRecentSection] = useState<TRecentSection | null>('posts')

	return (
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
	)
}
