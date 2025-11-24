import Divider from "@components/Divider"
import FeedMediaPost from "./FeedMediaPost"
import { useState } from "react"


export default function FeedSection() {
	const [openedPostTools, setOpenedPostTools] = useState<number | null>(null)

	return (
		<div className="feed-section
			flex flex-col w-full items-center
			font-['Space_Grotesk']
		">
			{[1, 2, 3].map(i => {
				return (
					<>
						<FeedMediaPost
							withMedia={i % 2 == 0}
							isLast={i === 3}
							id={i}
							openedPostTools={[openedPostTools, setOpenedPostTools]}
						/>
						{i !== 3 && <Divider extendedClass='my-5' />}
					</>
				)
			})}
		</div>
	)
}
