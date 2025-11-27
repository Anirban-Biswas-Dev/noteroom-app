import type { StateController } from "@stypes/global";
import Post from "@components/features/Post";

export default function FeedMediaPost({ withMedia = true, isLast, id, openedPostTools }: { withMedia: boolean, isLast: boolean, id: number, openedPostTools: StateController<number | null>}) {
	return (
		<>
			<Post openedPostTools={openedPostTools} id={id} withMedia={withMedia} />
			{ isLast && <div className="mb-10"></div> }
		</>
	)
}
