import BackButton from '@components/BackButton'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Post from '@components/features/Post'

export default function PostSection() {
	const navigate = useNavigate()
	const [openedPostTools, setOpenedPostTools] = useState<number | null>(null)

	return (
		<div className='mt-5 relative'>
			<BackButton className='hidden xl:block fixed md:left-[7%] lg:left-[13%] xl:left-[23%]' onClick={() => navigate(-1)} />
			<Post openedPostTools={[openedPostTools, setOpenedPostTools]} id={1} withMedia={true} />
		</div>
	)
}
