import { usePostSectionContext } from "../contexts/PostSectionContext"
import icons from "@utils/iconsLoader"

type PollPost = {
	id: number,
	value: string
}

function PollPostOption({ poll, loopIndex, isLast, isDeleteable }: { poll: PollPost, loopIndex: number, isLast: boolean, isDeleteable: boolean }) {
	const {setValue, addOption, removeOption} = usePostSectionContext()!.pollActions

	return (
		<div className="option flex flex-row w-full h-[60px] items-center justify-center" key={poll.id}>
			<div className="option-input w-[90%] h-[60px]">
				<input type="text" value={poll.value} onChange={(e) => setValue(poll.id, e.target.value)} className='w-full h-[80%] outline-none pl-5 border border-gray-300 rounded-[10px] bg-(--primary-secondary-rightpanel-clr)' placeholder={`Option ${loopIndex + 1}`} />
			</div>
			<div className="option-tools w-[10%] h-[60px]">
				<div className="add-option-tool h-[80%] w-full flex justify-center items-center">
					{ isLast
						? <icons.plus className='w-[25px] h-[25px] cursor-pointer' viewBox="0 0 28 28" stroke="#828282" onClick={addOption} />
						: isDeleteable && <icons.delete className='w-[25px] h-[25px] cursor-pointer' viewBox="0 0 24 24" onClick={() => removeOption(poll.id)} />
					}
				</div>
			</div>
		</div>
	)
} 

export default function PollPost({ extendedClass }: { extendedClass: string }) {
	const [polls] = usePostSectionContext()!.poll

	return (
		<div className={`poll-container scrollbar
			${extendedClass}
			flex flex-col p-3 border border-gray-300 rounded-[20px] gap-1 w-full
		`}>
			<div className="options-container flex flex-col min-h-[120px] max-h-[270px] desktop:max-h-[300px] gap-1 overflow-y-auto">
				{ polls.map((poll, i) => {
					return <PollPostOption poll={poll} loopIndex={i} isLast={i === polls.length - 1} isDeleteable={polls.length > 2} />
				}) }
			</div>
			
			<div className="end-date-container w-full h-[30px] flex gap-2 items-center text-[15px]">
				<div className="label"><span>Set an end date:</span></div>
				<div className="end-date"><input type="date" className='border border-gray-300 rounded-[5px] p-0.5' /></div>
			</div>
		</div>
	)
}
