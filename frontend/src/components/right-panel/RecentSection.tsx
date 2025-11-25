import type { StateController } from "@stypes/global"

type TRecentSection = 'posts' | 'groups' | 'people'

function RecentSectionItem({ name, label, isActive, ...props }: React.HTMLAttributes<HTMLButtonElement> & { name: string, label: string, isActive:boolean }) {
	return (
		<button className={`${name}
			w-25
			flex justify-center
			border border-gray-300 shadow-sm rounded-[15px]
			p-2 cursor-pointer ${isActive && 'bg-gray-200'} hover:bg-gray-100`}
			{...props}
		>
			<span className="text-[14px]">{ label }</span>
		</button>
	)
}


export default function RecentSection({ activeRecentSection: [activeRecentSection, setActiveRecentSection] }: { activeRecentSection: StateController<TRecentSection | null> }) {
	return (
		<div className="recent-sections flex justify-between gap-2 p-[10px_0] w-full">
			<RecentSectionItem
				name={"recent-posts"}
				label="Posts"
				isActive={activeRecentSection === 'posts'}
				onClick={() => setActiveRecentSection('posts')}
			/>
			<RecentSectionItem
				name={"recent-groups"}
				label="Groups"
				onClick={() => setActiveRecentSection('groups')}
				isActive={activeRecentSection === 'groups'}
			/>
			<RecentSectionItem
				name={"recent-people"}
				label="People"
				onClick={() => setActiveRecentSection('people')}
				isActive={activeRecentSection === 'people'}
			/>
		</div>
	)
}
