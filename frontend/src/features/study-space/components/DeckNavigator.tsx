import icons from "@utils/iconsLoader"

export default function DeckNavigator() {
	return (
		<div className="deck-navigator flex w-full xl:items-end xl:ml-10 xl:h-[50px] font-medium">
			<div className="container flex gap-4 w-full">

				<div className="navigator flex gap-1 shrink-0">
					<icons.leftarrow className="w-7 h-7" />
					<icons.leftarrow className="w-7 h-7 rotate-180" />
				</div>

				<div className="deck-tree flex gap-2 items-center flex-1 min-w-0 max-w-[700px] desktop:max-w-[900px]">
					<span className="truncate shrink-0 max-w-1/2 cursor-pointer hover:underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas placeat, eius vel similique rerum at maiores consectetur omnis labore, obcaecati doloremque facere expedita! Temporibus dolorem iusto perspiciatis nisi suscipit voluptatem!</span>
					<icons.rightarrow className="w-2 h-[13px]" viewBox="0 0 8 13" stroke="currentColor" />

					<span className="truncate min-w-0 flex-1 whitespace-nowrap max-w-1/2 cursor-pointer hover:underline">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nam eaque assumenda, molestias amet soluta odio voluptatem modi ut aliquid distinctio vitae possimus beatae eum repellat sit dolor, doloribus non.
					</span>
				</div>

			</div>
		</div>

	)
}
