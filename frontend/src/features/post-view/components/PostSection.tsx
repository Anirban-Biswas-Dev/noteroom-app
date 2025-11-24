import BackButton from '@components/BackButton'
import FeedMediaPost from '../../feed/components/feed-section/FeedMediaPost'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function PostSection() {
	const navigate = useNavigate()
	const [openedPostTools, setOpenedPostTools] = useState<number | null>(null)

	return (
		<div className='mt-5 relative'>
			<BackButton className='hidden xl:block fixed md:left-[7%] lg:left-[13%] xl:left-[23%]' onClick={() => navigate(-1)} />
			<FeedMediaPost isLast={false} withMedia={true} id={1} openedPostTools={[openedPostTools, setOpenedPostTools]} />
		</div>
	)
}
