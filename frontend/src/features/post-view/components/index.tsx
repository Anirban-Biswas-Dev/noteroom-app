import CommentSection from './comment-section/CommentSection'
import PostSection from './PostSection'
import AddCommentSection from './AddCommentSection'
import { useEffect, useState } from 'react'
import type { TComment } from '../types'
import { useNavigationPanelContext } from '@contexts/NavigationPanelContext'
import BackButton from '@components/BackButton'
import { useNavigate } from 'react-router-dom'

export default function PostView() {
    const { navElements: [, setNavElements] } = useNavigationPanelContext()!
    const navigate = useNavigate()

    const [comments] = useState<TComment[]>([
        {
            content: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
            `,
            author: {
                name: "Anirban Biswas"
            },
            created_at: "27/11/25",
            replies: [
                {
                    content: `
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
                    `,
                    author: {
                        name: "Anirban Biswas"
                    },
                    created_at: "27/11/25"
                },
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.",
                    author: {
                        name: "Anirban Biswas"
                    },
                    created_at: "27/11/25"
                }
            ]
        },
        {
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.",
            author: {
                name: "Anirban Biswas"
            },
            created_at: "27/11/25",
            replies: []
        },
        {
            content: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
            `,
            author: {
                name: "Anirban Biswas"
            },
            created_at: "27/11/25",
            replies: [
                {
                    content: `
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.
                    `,
                    author: {
                        name: "Anirban Biswas"
                    },
                    created_at: "27/11/25"
                },
                {
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum architecto voluptatibus officia, ut qui et excepturi! Ducimus tempore ipsum voluptas sit atque repudiandae assumenda, culpa ut recusandae, odit corrupti.",
                    author: {
                        name: "Anirban Biswas"
                    },
                    created_at: "27/11/25"
                }
            ]
        }
    ])

    useEffect(() => {
        setNavElements({
            mobileLeft: (
	            <div className='flex gap-2 xl:hidden'>
	                <BackButton onClick={() => navigate(-1)} />
	                <div className="action-title h-12 overflow-hidden flex flex-row justify-start items-center">
	                    <span className="text-lg font-['Space_Grotesk']">Post</span>
	                </div>
	            </div>
            )
        })

        return () => setNavElements({})
    }, [])

    return (
        <div className='post-view flex flex-col gap-10'>
            <PostSection />
            <AddCommentSection />
            <CommentSection comments={comments} />
        </div>
    )
}
