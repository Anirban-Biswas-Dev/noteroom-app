import React, { useState } from 'react'
import type { TComment, TReply } from '../../types'
import PostInteraction from '@components/PostInteraction'
import icons from '@utils/iconsLoader'

export default function Comment({ comment, type, isLastReply=false, showReply }: { comment: TComment | TReply, isLastReply?: boolean, type: "comment" | "reply", showReply?: () => void }) {
    const [showFullText, setShowFullText] = useState<boolean>(false)

    return (
        <div className={`comment w-full flex gap-2 text-sm`}>
            <div className={`left-side w-auto bg-white relative ${isLastReply && 'z-20'}`}>
                <div className={`commenter-profile-pic relative justify-self-start w-[30px] h-[30px] overflow-hidden bg-green-700 rounded-[50%] z-20`}>
                    <img 
                        src="https://placehold.co/600x400?text=A" 
                        className='w-full h-full object-cover'
                        alt="user"
                    />
                </div>
            </div>

            <div className="right-side flex flex-col gap-2">
                <div className="comment-header">
                    <span className="commenter-name">{comment.author.name} • {comment.created_at}</span>
                </div>

                <div className="comment-content">
                    <span className='text-justify hyphens-auto'>
                        { comment.content.length > 500
                            ? showFullText 
                                ? <span>{comment.content} (<span className='text-blue-500 font-bold cursor-pointer hover:underline' onClick={() => setShowFullText(false)}>Hide</span>)</span> 
                                : <span>{comment.content.slice(0, 500)}...<span className='text-blue-500 font-bold cursor-pointer hover:underline' onClick={() => setShowFullText(true)}>Show More</span></span>
                            : comment.content
                        }
                    </span>
                </div>

                <div className="comment-interactions flex gap-4">
                    <PostInteraction name='reacts' value='6.8k'>
                    	<icons.lovereact viewBox="0 0 24 24" />
                    </PostInteraction>
                    <PostInteraction name={type} value='600' onClick={showReply}>
  						<icons.comment viewBox="0 0 24 24" />
                    </PostInteraction>
                    <PostInteraction name='shares' value='98'>
  						<icons.share viewBox="0 0 24 24" />
                    </PostInteraction>
                </div>
            </div>
        </div>
    )
}
