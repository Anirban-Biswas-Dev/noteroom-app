import SearchBar from "./SearchBar"

export default function GlobalSearchBar() {
	return (
		<div className="hidden xl:block w-[75%] desktop:w-[90%] h-auto">
			<SearchBar placeholder="Search NoteRoom" className="h-12 w-full desktop:h-13" />
		</div>
	)
}
