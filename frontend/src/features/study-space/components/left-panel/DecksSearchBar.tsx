import icons from "@utils/iconsLoader";

export default function DecksSearchBar() {
  	return (
	  	<div className="search-bar
			bg-(--primary-secondary-rightpanel-clr)
			mt-5
			w-full gap-2
			flex items-center
			border border-gray-300 rounded-full p-[10px_2px_10px_12px]
			xl:mt-0
		">
			<div className="search-input w-[80%] h-full">
				<input type="text" placeholder='Search Decks' className='w-full h-full bg-transparent border-none outline-none' />
			</div>
			<div className="search-icon w-[20%] h-full flex justify-center items-center">
				<icons.search className='h-[25px] w-[25px]' viewBox="0 0 28 28" />
			</div>
		</div>
  	);
}
