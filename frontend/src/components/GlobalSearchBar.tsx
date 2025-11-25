import icons from "@utils/iconsLoader"

export default function GlobalSearchBar() {
	return (
		<div className="hidden xl:block w-[75%] desktop:w-[90%] h-auto">
			<div className="search-bar
				h-12 w-full
				flex flex-row items-center 
				border border-gray-300 rounded-full
				desktop:h-13
			">
				<div className="search-icon w-[10%] h-full flex justify-center items-center">
					<icons.search viewBox="0 0 25 25" className="w-5 h-5" />
				</div>
				<div className="search-input w-[90%] h-full">
					<input type="text" placeholder='Search NoteRoom' className='w-full h-full bg-transparent border-none outline-none text-base desktop:text-[18px]' />
				</div>
			</div>
		</div>
	)
}
