import BackButton from "@components/BackButton"
import Divider from "@components/Divider"
import Post from "@components/features/Post"
import { useNavigationPanelContext } from "@contexts/NavigationPanelContext"
import { useEffect, useState } from "react"
import TabSection from "./TabSection"
import ProfileDataSection from "./profile-data-section/ProfileDataSection"
import type { TProfileUserRole } from "../types"

export default function UserProfile() {
    const { navElements: [, setNavElements] } = useNavigationPanelContext()!

    const tabs = ["Posts", "About", "Courses", "Media", "Communities", "Questions"]
    const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Posts")
    const [openedPostTools, setOpenedPostTools] = useState<number | null>(null)
    const [userRole, _setUserRole] = useState<TProfileUserRole>("viewer")

    useEffect(() => {
        setNavElements({
            desktop: {
                show: true
            },
            mobile: {
                left: (
                    <div className='flex gap-2 xl:hidden'>
                        <BackButton />
                        <div className="action-title h-12 overflow-hidden flex flex-row justify-start items-center">
                            <span className="text-lg font-['Space_Grotesk']">Profile</span>
                        </div>
                    </div>
                )
            }
        })

        return () => setNavElements({})
    }, [])

    return (
        <div className="user-profile left-panel 
            w-full 
            flex flex-col gap-10 
            mt-5 
        ">
            <ProfileDataSection userRole={userRole} />
            <TabSection tabItems={tabs} activeTab={[activeTab, setActiveTab]} />

            <div className="tab-contents flex w-full mb-10">
                { activeTab === "Posts" && (
                    <div className="posts flex flex-col">
                        {[1, 2, 3].map((_, i) => {
                            return <>
                                <Post openedPostTools={[openedPostTools, setOpenedPostTools]} id={i} withMedia={true} tools={<></>} />
                                { i !== 2 && <Divider extendedClass='my-5' /> }
                            </>
                        })}                        
                    </div>
                )}
            </div>
        </div>
    )
}