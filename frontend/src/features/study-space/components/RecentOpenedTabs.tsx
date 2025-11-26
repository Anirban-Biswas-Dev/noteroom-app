import icons from "@utils/iconsLoader"
import { useEffect, useState } from "react"

type TRecentOpenedTab = {
	id: number,
	title: string
}
type TRemoveTab = (id: TRecentOpenedTab["id"]) => void

function RecentOpenedTab({ tab, removeTab, className }: { removeTab: TRemoveTab, tab: TRecentOpenedTab } & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={`recent-opened-tab
			min-w-[50px] max-w-[150px]
			flex flex-1 items-center shrink gap-1
			p-2 shadow-[0_0_2px_rgba(0,0,0,0.3)] rounded-[10px]
			text-[rgba(0,0,0,0.7)] bg-white
			cursor-pointer
			overflow-hidden
			${className}
		`}>
			<span className="title
				w-full
				text-[12px] font-medium
				whitespace-nowrap overflow-hidden text-ellipsis
			">
				• {tab?.title }
			</span>

			<span className="close shrink-0" onClick={() => removeTab(tab.id)}>
				<icons.cross width="20" height="20" className='rounded-[50%] hover:bg-gray-200 cursor-pointer' viewBox="0 0 24 24" />
			</span>
		</div>
	)
}


export default function RecentOpenedTabs() {
	const [tabs, setTabs] = useState<TRecentOpenedTab[]>(Array.from({ length: 5 }).map((_, i) => ({id: i, title: `Tab-${i}`})))

	function removeTab(id: number) {
		setTabs(tabs => tabs.filter(tab => tab.id !== id))
	}

	function addTab(tab: Omit<TRecentOpenedTab, "id">) {
		setTabs(tabs => {
			if (tabs.length < 15) {
				return [...tabs, { id: Math.floor(Math.random() * 10000000), title: tab.title }]
			} else {
				return tabs
			}
		})
	}

	return (
		<div className="recent-opened-tabs flex gap-3 p-2 overflow-x-hidden w-full">
			{tabs.length > 0 ? tabs.map((tab, i) => (
				<RecentOpenedTab tab={tab} key={tab.id} removeTab={removeTab} />
			)) : <div className="heightholder flex p-2"><i className="h-5 w-5"></i></div> }
		</div>
	)
}
