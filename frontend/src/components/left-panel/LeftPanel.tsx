import LeftPanelNavigation from "./LeftPanelNavigation"

export default function LeftPanel({ open = false }: { open: boolean }) {
	return (
		<div className={`left-panel
			bg-(--leftpanel-maincontainer-clr)
			row-span-2
			overflow-visible border-gray-300 border-r-2
			absolute w-[65%] z-50 h-[90vh] bottom-0
			transition-transform duration-300
			transform ${open ? 'translate-x-0' : '-translate-x-full'}
			sm:w-[35%]
			md:w-[35%]
			lg:w-[30%]
			xl:static xl:flex xl:flex-col xl:items-start xl:w-full xl:translate-x-0 xl:border-r-0 xl:h-screen xl:z-0
		`}>
			{/*<div className="container flex-col w-[92%] h-[98%] flex mt-auto mx-auto gap-5">
				<div className="title hidden xl:flex items-center gap-4">
					<BackButton />
					<span className="font-medium font-['Space_Grotesk'] text-[20px]">Study Space</span>
				</div>

				<DecksSearchBar />
				<DecksContainer />
			</div>*/}

			<LeftPanelNavigation />

			{/*<div className="toggle-sidebar
				hidden items-center justify-center
				absolute top-[15%] left-full
				-translate-x-1/2 -translate-y-1/2 w-8 h-8
				xl:flex
				desktop:top-[10.5%]
				bg-white shadow-md rounded-md
			">
				<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.33203 17.333L1.33203 9.33301L9.33203 1.33301" stroke="#5F5E5B" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>*/}
		</div>
	);
}
