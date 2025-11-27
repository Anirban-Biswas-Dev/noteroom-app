import { useEffect } from 'react'
import PostContainer from './PostContainer'
import PostButton from './PostButton'
import BackButton from '@components/BackButton'
import { useNavigationPanelContext } from '@contexts/NavigationPanelContext'

export default function MobilePostSection() {
    const { navElements: [, setNavElements] } = useNavigationPanelContext()!

    useEffect(() => {
        setNavElements({
            mobile: {
                left: (
                    <div className='flex gap-2 xl:hidden'>
                        <BackButton />
                        <div className="action-title h-12 overflow-hidden flex flex-row justify-start items-center">
                            <span className="text-lg font-['Space_Grotesk']">Create Post</span>
                        </div>
                    </div>
                ),
                right: (
                    <div className="tool flex items-center justify-center xl:hidden">
                        <PostButton onClick={() => console.log(`upload-post`)} />
                    </div>
                )
            }
        })

        return () => setNavElements({})
    }, [])

    return (
        <PostContainer />
    )
}
