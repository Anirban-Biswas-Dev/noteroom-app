import { useState } from "react"
import icons from "@utils/iconsLoader"

export function Deck({ directory, title, toggleFolder }: { directory: boolean, title: string, toggleFolder?: () => void }) {
	return (
		<div className={`deck flex gap-2 p-[8px_8px_8px_0] text-sm rounded-[10px] items-center hover:bg-[#e9e9e9] cursor-pointer`}>
			<div className="icon">
				{
					directory
					? <icons.folder width="24" height="24" viewBox="0 0 24 24" />
				 	: <icons.file width="24" height="24" viewBox="0 0 24 24" />
				}

			</div>

			<div className="title grow text-[rgba(0,0,0,0.7)]">{ title.length > 20 ? `${title.slice(0, 20)}...`: title }</div>

			{directory && <div className="toggle-folder" onClick={toggleFolder}>
				<icons.downarrow viewBox="0 0 24 24" height="24" width="24" />
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
