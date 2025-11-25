import SearchBar from "@components/SearchBar";

export default function DecksSearchBar() {
  	return (
	  	<div className="search-bar mt-5 xl:mt-0 w-full flex items-center">
			<SearchBar
				placeholder="Search Decks"
				className="bg-(--primary-secondary-rightpanel-clr) w-full h-10 desktop:h-12 gap-2 xl:gap-1"
				iconClass="w-[10%] ml-2"
				inputClass="w-[90%]"
			/>
		</div>
  	);
}
