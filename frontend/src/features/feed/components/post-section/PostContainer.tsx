import { useRef } from "react"
import MediaPost from "./MediaPost"
import PollPost from "./PollPost"
import PostSectionTools from "./PostSectionTools"
import type { StateController } from "@stypes/global"
import type { TMediaPost } from "../../types"
import PostSectionProvider, { usePostSectionContext } from "../contexts/PostSectionContext"
import icons from "@utils/iconsLoader"

function PostContainer({ setOpen: setOpenPostContainer }: { setOpen?: StateController<boolean>[1] }) {
	const PostContainerData = usePostSectionContext()!

	const [showTools, openCloseTool] = PostContainerData.tools
	const [[, setMedia]] = PostContainerData.media

	function handleFileChange(e: React.ChangeEvent<any>) {
		const selectedImages = Array.from(e.target.files)
		const imageUrls: TMediaPost[] = selectedImages.map(image => {
			return {
				url: URL.createObjectURL(image as Blob),
				id: Math.ceil(Math.random() * 1000000)
			}
		})
		setMedia(images => {
			return [...images, ...imageUrls]
		})
		openCloseTool('media', 'open', undefined)
	}
	

	const mediaRef = useRef<HTMLInputElement | null>(null)
	function addMedia() {
		mediaRef.current?.click()
	}

	return (
		<>
			<input type="file" accept='image/*' multiple ref={mediaRef} className='hidden' onChange={handleFileChange} />

			<div className="post-container
				font-['Space_Grotesk'] 
				w-full 
				mt-5 mb-5
				flex flex-col gap-1
				xl:w-[80vh] xl:mt-0 xl:border xl:border-gray-300 xl:rounded-[20px] xl:bg-(--leftpanel-maincontainer-clr)
				desktop:w-[65vh]!
			">
				<div className="content
					w-full min-h-[300px]
					flex flex-row
				">
					<div className="hidden xl:block left-side w-auto p-[0_10px_0_10px] h-[300px]">
						<div className="author-profile-pic h-[25%] desktop:h-[27%] flex justify-center items-center">
							<div className="justify-self-start w-12 h-12 overflow-hidden rounded-[50%]">
								<img 
									src="https://placehold.co/600x400/yellow/black?text=A" 
									className='w-full h-full object-cover'
									alt="user"
								/>
							</div>
						</div>
					</div>

					<div className="metadata w-full flex flex-col min-h-[310px]">
						<div className="author-section h-[50px] flex items-center gap-2 xl:gap-0">
							<div className="author-profile-pic block xl:hidden justify-self-start w-10 h-10 overflow-hidden rounded-[50%]">
								<img 
									src="https://placehold.co/600x400/yellow/black?text=A" 
									className='w-full h-full object-cover'
									alt="user"
								/>
							</div>

							<div className="author-fullname">
								<span className='text-base desktop:text-[18px]'>Anirban Biswas</span>
							</div>
						</div>

						<div className="post-data min-h-[250px] w-[95%] flex flex-col self-center xl:w-full">
							<div className="post-title-input w-full h-[50px]">
								<input type="text" className='w-full h-full outline-none bg-transparent text-[rgba(0,0,0,0.7)] text-[18px] desktop:text-[20px]' placeholder='Title *' />
							</div>

							<div className="post-desc-input scrollbar
								min-h-[50px] w-full
								flex
								overflow-y-auto
							">
								<textarea
									className="w-full flex flex-col resize-none outline-none bg-transparent desktop:text-[18px]"
									placeholder='What are you working on?'
									onChange={({ target }: { target: HTMLTextAreaElement }) => {
										target.style.height = "auto";
										const maxHeight = 200;
										const newHeight = Math.min(target.scrollHeight, maxHeight);

										target.style.height = newHeight + "px";
									}}
								/>
							</div>
							
							<div className="interactive-content mt-2.5 flex justify-center items-center">
								{ showTools.media && <MediaPost extendedClass='min-h-[300px] desktop:min-h-[360px]' addMedia={() => addMedia()} />}
								{ showTools.poll && <PollPost extendedClass='min-h-[150px]' />}
							</div>
						</div>
					</div>

					<div className="hidden xl:block right-side p-[0_10px_0_10px] max-h-[300px]">
						<div className="close-button h-[20%] desktop:h-[22%] flex justify-center items-center" onClick={() => setOpenPostContainer && setOpenPostContainer(false)}>
							<icons.cross width="25" height="25" className='rounded-[50%] hover:bg-gray-200 cursor-pointer' viewBox="0 0 24 24" />
						</div>
					</div>
				</div>

				<PostSectionTools extendedClass='xl:p-5 w-full flex justify-between h-[60px]' inAction={true} actions={[() => addMedia(), () => openCloseTool("poll", undefined, true)] } />
			</div>
		</>
	)
}


export default function PostContainerUI({ setOpen }: { setOpen?: StateController<boolean>[1] }) {
	return (
		<PostSectionProvider>
			<PostContainer setOpen={setOpen} />
		</PostSectionProvider>
	)
}