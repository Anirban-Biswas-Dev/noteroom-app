import React from "react"
import icons from "@utils/iconsLoader"
import { Link } from "react-router-dom"

function InteractionTool({ name, children, extendedClass }: { name: string, children: React.ReactElement<any>, extendedClass?: string }) {
	const clonedIcon = React.cloneElement(children, {
		className: `xl:h-[20px] xl:w-[20px] h-[25px] w-[25px]`
	})

	return (
		<div className={`${name} xl:border-gray-300 flex justify-center items-center xl:border h-10 w-10 rounded-full hover:bg-gray-100 ${extendedClass}`}>
			{clonedIcon}
		</div>
	)
}

export default function DefaultInteractionTools() {
    return (
        <div className="interactions-tools
			flex flex-row items-center justify-around gap-1
			xl:p-0 xl:gap-3 xl:w-[25%] xl:justify-between
			desktop:w-[10%]
		">
            <InteractionTool name='notification'>
                <icons.notification />
            </InteractionTool>

            <InteractionTool name='chats'>
                <icons.chat />
            </InteractionTool>

            <InteractionTool name='search' extendedClass='block xl:hidden'>
                <icons.search viewBox="0 0 24 24" />
            </InteractionTool>

            <Link className="justify-self-start h-10 w-10 overflow-hidden rounded-[50%]" to={"/user"}>
                <img 
                    src="https://placehold.co/600x400/yellow/black?text=A" 
                    className='w-full h-full object-cover'
                    alt="user"
                />
            </Link>
        </div>
    )
}
