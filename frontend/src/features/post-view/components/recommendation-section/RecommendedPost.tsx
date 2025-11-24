export default function RecommendedPost() {
	const description = "Scientists have discovered a fundamental conflict in how the brain learns and forms memories, challenging long-held assumptions about classical and operant conditioning. These two learning systems cannot operate simultaneously, as they compete for dominance in the brain"

	return (
		<div className="recommended-post
			flex w-full h-auto gap-2
			font-sans
			cursor-pointer
		">
			<div className="left-side w-auto h-full">
				<div className={`author-profile-pic justify-self-start w-10 h-10 overflow-hidden rounded-[50%]`}>
                    <img
                        src="https://placehold.co/600x400/yellow/black?text=V"
                        className='w-full h-full object-cover'
                        alt="user"
                    />
                </div>
			</div>

			<div className="middle-section flex flex-col w-full gap-2 xl:mr-5">
				<div className="post-header flex justify-between text-[14px]">
					<span className="author-name font-medium hover:underline">VSauce</span>
					<span className="post-created-at">27/12/43</span>
				</div>
				<div className="post-data">
					<div className="post-title font-bold text-[15px]">
						<span>Classical and Operant Conditioning of Memory Forming</span>
					</div>
					<div className="post-description text-justify hyphens-auto">
						<span className="text-sm">{ description.length > 100 ? `${description.slice(0, 100)}...` : description }</span>
					</div>
				</div>
				<div className="post-interactions flex text-[13px]">
					<span className="likes">45 Likes •&nbsp;</span>
					<span className="comments">198 Comments •&nbsp;</span>
					<span className="renotes">45 Renotes</span>
				</div>
			</div>

			<div className="right-side hidden justify-center items-center xl:flex">
				<div className="post-thumbnail overflow-hidden w-30 h-30 rounded-[10px]">
					<img src="https://placehold.co/600x400/orange/black?text=Post Image" alt="Post Image" className='w-full h-full object-cover' />
				</div>
			</div>
		</div>
	)
}
