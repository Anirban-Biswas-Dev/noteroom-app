import Divider from "@components/Divider"
import RecommendedPost from "./RecommendedPost"

export default function RecommendedPostsSection() {
	return (
		<div className="recommended-posts-section flex flex-col">
            <div className="header w-full">
                <span className='text-xl'>You might be interested in</span>
            </div>

            <Divider extendedClass='w-full' />

            <div className="recommended-posts 
            	flex flex-col gap-10 w-full 
             	mb-10 mt-5
            ">
            	<RecommendedPost />
            	<RecommendedPost />
            	<RecommendedPost />
            </div>
		</div>
	)
}
