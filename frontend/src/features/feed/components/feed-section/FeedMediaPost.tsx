import FloatingDropdown from "@components/features/FloatingDropdown";
import PostInteraction from "@components/PostInteraction";
import type { StateController } from "@stypes/global";
import { useNavigate } from "react-router-dom";
import icons from "@utils/iconsLoader";

export default function FeedMediaPost({ withMedia = true, isLast, id, openedPostTools: [openedPostTools, setOpenedPostTools] }: { withMedia: boolean, isLast: boolean, id: number, openedPostTools: StateController<number | null>}) {
	const navigate = useNavigate()

	return (
		<div className={`media-post
			${isLast && 'mb-10'}
			w-full
			flex gap-2
		`}>
			<div className="left-side hidden xl:block w-auto mr-[5px]">
				<div className={`author-profile-pic justify-self-start w-10 h-10 overflow-hidden rounded-[50%]`}>
                    <img
                        src="https://placehold.co/600x400/yellow/black?text=A"
                        className='w-full h-full object-cover'
                        alt="user"
                    />
                </div>
			</div>

			<div className="right-side flex flex-col">
				<div className={`metadata
					flex flex-col items-center
				`}>
					<div className="post-topbar w-full flex justify-between">
						<div className="author-info flex items-center text-[14px] gap-2">
							<div className={`author-profile-pic block xl:hidden justify-self-start w-10 h-10 overflow-hidden rounded-[50%]`}>
								<img
									src="https://placehold.co/600x400/yellow/black?text=A"
									className='w-full h-full object-cover'
									alt="user"
								/>
							</div>
							<div className="author-details">
								<span>Anirban Biswas</span> • <span>8d</span>
							</div>
						</div>

						<div className="tools flex items-center gap-3 text-[14px]">
							<div className="add-friend">
								<button className='text-blue-700 hover:underline cursor-pointer font-bold'>Add Friend</button>
							</div>
							<div className="three-dots relative">
								<button className="h-auto w-auto flex justify-center items-center cursor-pointer" onClick={() => setOpenedPostTools(id === openedPostTools ? null : id)}>
									<icons.threedots viewBox="0 0 24 24" height="24" width="24" />
								</button>
								{ openedPostTools === id && <FloatingDropdown close={() => setOpenedPostTools(null)} />}
							</div>
						</div>
					</div>

					<div className="post-info mt-2 cursor-pointer" onClick={() => navigate("/post")}>
						<div className="post-title font-bold text-[15px]">
							<span>Classical and Operant Conditioning of Memory Forming</span>
						</div>
						<div className={`post-description text-[13px]`}>
							<span>Scientists have discovered a fundamental conflict in how the brain learns and forms memories, challenging long-held assumptions about classical and operant conditioning. These two learning systems cannot operate simultaneously, as they compete for dominance in the brain...<span className='text-blue-600 hover:underline cursor-pointer'>Read More</span></span>
						</div>
					</div>
				</div>

				{withMedia && <div className="post-media
					mt-2
					overflow-hidden rounded-[15px]
				">
					<img src="https://placehold.co/600x400/orange/white?text=Post Image" alt="Post Image" className='w-full h-full object-cover' />
				</div>}

				<div className="post-interaction
					w-[90%] mt-2
					flex gap-5
					text-[12px]
				">
					<PostInteraction name='reacts' value='6.8k'>
						<icons.lovereact viewBox="0 0 24 24" />
					</PostInteraction>
					<PostInteraction name='comments' value='600'>
						<icons.comment viewBox="0 0 24 24" />
					</PostInteraction>
					<PostInteraction name='shares' value='98'>
						<icons.share viewBox="0 0 24 24" stroke="#575757" />
					</PostInteraction>
				</div>
			</div>
		</div>
	)
}
