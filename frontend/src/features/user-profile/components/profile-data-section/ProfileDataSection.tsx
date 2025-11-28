import ProfileInteractions from './ProfileInteractions'
import type { TProfileUserRole } from '../../types'

export default function ProfileDataSection({ userRole }: { userRole: TProfileUserRole }) {
    return (
        <div className="profile-data-section w-full">
            <div className="user-image-section 
                w-full h-[200px]
                xl:h-[300px] 
                desktop:h-[350px]
            ">
                <div className="cover-pic overflow-hidden w-full h-full rounded-[10px]">
                    <img src="https://placehold.co/600x400?text=Cover Image" className="w-full h-full object-cover" alt="" />
                </div>
            </div>

            <div className="bottom-section
                w-full
                flex flex-col gap-5  
                xl:flex-row xl:justify-between
            ">
                <div className="top-bar
                    w-full
                    relative 
                    flex justify-between
                    xl:w-[25%] xl:justify-end
                    desktop:w-[20%]
                ">
                    <div className="profile-pic-holder
                        w-[40%] flex justify-center
                        xl:w-full xl:justify-end
                    ">
                        <div className="profile-pic
                            w-30 h-30
                            absolute -translate-y-1/2 
                            rounded-[50%] border-3 border-(--primary-secondary-rightpanel-clr) 
                            overflow-hidden 
                        ">
                            <img src="https://placehold.co/600x400/yellow/black?text=S" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <ProfileInteractions className="flex xl:hidden mt-3" userRole={userRole} />
                </div>

                <div className="profile-metadata
                    w-[95%] self-center
                    flex flex-col gap-5 
                    mt-3
                    xl:w-[75%] xl:self-start
                    desktop:w-[80%] 
                ">
                    <div className="profile-text-metadata gap-2 flex flex-col w-full font-sans">
                        <span className="display-name font-bold text-lg">Shailey Sebastian</span>
                        <span className="about text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam in laudantium architecto ipsam omnis repellendus veniam. Minima similique, velit ipsum quod corrupti placeat consequuntur cupiditate, deleniti fugit vel ut.</span>
                    </div>

                    <div className="profile-interactions 
                        w-full 
                        flex items-center justify-between 
                        text-[12px]
                        desktop:text-base
                    ">
                        <div className="flex gap-3 desktop:gap-5">
                            <span className="following flex gap-0.5"><span className="font-bold">46</span>Following</span>
                            <span className="followers flex gap-0.5"><span className="font-bold">46k</span>Followers</span>
                        </div>

                        <ProfileInteractions className="hidden xl:flex" userRole={userRole} />
                    </div>
                </div>
            </div>
        </div>
    )
}
