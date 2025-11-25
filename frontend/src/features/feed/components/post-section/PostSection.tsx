import Divider from "@components/Divider"
import PostSectionTools from "./PostSectionTools"
import icons from "@utils/iconsLoader"

function PostSectionIntro() {
	return (
		<div className="intro
			w-full h-full
			flex flex-row justify-end gap-3
			xl:h-[70%] xl:gap-1
		">
			<div className="profile-pic h-full xl:w-[10%]">
				<div className='flex w-full h-full items-center justify-center'>
					<div className="profile-pic h-10 w-10 overflow-hidden rounded-[50%]">
						<img
							src="https://placehold.co/600x400/yellow/black?text=A"
							className='w-full h-full object-cover'
							alt="user"
						/>
					</div>
				</div>
			</div>

			<div className="intro-text flex items-center justify-start h-full w-full xl:w-[90%]">
				<span className="font-['Space_Grotesk'] text-[16px] xl:text-[15px] desktop:text-[20px] text-[rgba(0,0,0,0.7)]">What are you working on?</span>
			</div>

			<div className="tools-section flex justify-center items-center xl:hidden ">
				<div className="plus-icon rounded-full border border-[#1E1E1E] flex justify-center items-center">
					<icons.plus width="30" height="30" stroke="#1E1E1E" />
				</div>
			</div>
		</div>
	)
}

export default function PostSection({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) {
	return (
		<div className='flex flex-col w-full items-center'>
			<div className="post-section
				mt-5 rounded-[13px] border border-gray-300
				w-full gap-2 p-2
				flex flex-col
				xl:p-0
				desktop:gap-3
			" onClick={onClick}>

				<PostSectionIntro />

				<PostSectionTools extendedClass="
					p-2
					w-full h-[30%]
					hidden
					xl:flex justify-between
				"/>
			</div>
			<Divider extendedClass='my-7' />
		</div>
	)
}
