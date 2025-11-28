import icons from "@utils/iconsLoader"
import type { TProfileUserRole } from "../../types"
import Button from "@components/Button"

export default function ProfileInteractions({ userRole, className }: { userRole: TProfileUserRole } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`gap-3 desktop:gap-5 ${className}`}>
            { userRole === "owner" 
                ? (
                    <Button className="border-[rgba(0,0,0,0.21)] text-black">
                        <icons.edit />
                        <span className="text-sm font-sans whitespace-nowrap lg:text-[11px] hidden xl:block">Edit</span>
                    </Button>
                )  
                : (
                    <>
                        <Button className='bg-[#32ADE6] text-white'>
                            <icons.addfriend />
                            <span className="text-sm font-sans whitespace-nowrap lg:text-[11px] hidden xl:block">Add Friend</span>
                        </Button>
                        <Button className='border-[#32ADE6] text-[#32ADE6]'>
                            <icons.chatcircle />
                            <span className="text-sm font-sans whitespace-nowrap lg:text-[11px] hidden xl:block">Message</span>
                        </Button>
                    </>
                )
            }
            
            <button className="flex justify-center items-center cursor-pointer">
                <icons.threedots viewBox="0 0 24 24" height="24" width="24" />
            </button>
        </div>
    )
}
