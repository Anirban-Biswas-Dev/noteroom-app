import { useState } from "react"

export function Deck({ directory, title, toggleFolder }: { directory: boolean, title: string, toggleFolder?: () => void }) {
	return (
		<div className={`deck flex gap-2 p-[8px_8px_8px_0] text-sm rounded-[10px] items-center hover:bg-[#e9e9e9] cursor-pointer`}>
			<div className="icon">
				{
					directory
					? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 14H15M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#91918E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				 	: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2L20 8M14 2V8H20M9 15H15" stroke="#91918E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				}

			</div>

			<div className="title grow text-[rgba(0,0,0,0.7)]">{ title.length > 20 ? `${title.slice(0, 20)}...`: title }</div>

			{directory && <div className="toggle-folder" onClick={toggleFolder}>
				<svg
					height="24"
					width="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M4.29279 7.79259C4.48031 7.60512 4.73462 7.49981 4.99979 7.49981C5.26495 7.49981 5.51926 7.60512 5.70679 7.79259L11.9998 14.0856L18.2928 7.79259C18.385 7.69708 18.4954 7.6209 18.6174 7.56849C18.7394 7.51608 18.8706 7.4885 19.0034 7.48734C19.1362 7.48619 19.2678 7.51149 19.3907 7.56177C19.5136 7.61205 19.6253 7.68631 19.7192 7.7802C19.8131 7.87409 19.8873 7.98574 19.9376 8.10864C19.9879 8.23154 20.0132 8.36321 20.012 8.49599C20.0109 8.62877 19.9833 8.75999 19.9309 8.882C19.8785 9.004 19.8023 9.11435 19.7068 9.20659L13.4138 15.4996C13.0387 15.8745 12.5301 16.0852 11.9998 16.0852C11.4695 16.0852 10.9608 15.8745 10.5858 15.4996L4.29279 9.20659C4.10532 9.01907 4 8.76476 4 8.49959C4 8.23443 4.10532 7.98012 4.29279 7.79259Z"
						fill="black"
						fill-opacity="0.4"
					/>
				</svg>
			</div> }
		</div>
	)
}

export function DeckFolder({ folder: Folder, files }: { folder: React.ComponentType<{ toggleFolder?: () => void }>, files: React.ReactNode }) {
	const [openFiles, setOpenFiles] = useState<boolean>(false)

	return (
		<div className="deck-folder flex flex-col h-auto">
			<div className="folder w-full">
				<Folder toggleFolder={() => setOpenFiles(prev => !prev)} />
			</div>
			{ openFiles && <div className="files flex">
				<div className="gap w-[15%]"></div>
				<div className="files">
					{ files }
				</div>
			</div> }
		</div>
	)
}

export function DecksContainer() {
	return (
		<div className="decks-container flex flex-col overflow-y-auto left-panel">
			<span className="font-sans text-sm text-[#A3A3A0] font-medium">Decks</span>
			<div className="decks flex flex-col">
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
				<Deck title="Geometric Photology" directory={false} />
				<Deck title="Geometric Photology" directory={false} />
				<Deck title="Geometric Photology" directory={false} />
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
				<Deck title="Geometric Photology" directory={false} />
				<Deck title="Geometric Photology" directory={false} />
				<Deck title="Geometric Photology" directory={false} />
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
				<Deck title="Geometric Photology" directory={false} />
				<Deck title="Geometric Photology" directory={false} />
				<Deck title="Geometric Photology" directory={false} />
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
				<DeckFolder
					folder={({ toggleFolder }) => {
						return <Deck title="Geometric Photology" directory toggleFolder={toggleFolder} />
					}}
					files={
						<>
							<Deck title="Geometric Photology" directory={false} />
							<Deck title="Geometric Photology" directory={false} />
						</>
					}
				/>
			</div>
		</div>
	)
}
