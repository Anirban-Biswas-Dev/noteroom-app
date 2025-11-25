import Backdrop from "@components/Backdrop";
import React from "react";
import icons from "@utils/iconsLoader";

function DropdownItem({ label, icon }: { label: string, icon: React.ReactElement; }) {
	return (
		<span className="item
			flex w-auto items-center gap-3
			p-2 pr-10 rounded-md hover:bg-gray-100 active:bg-gray-100
			cursor-pointer font-sans
		">
			<div className="icon">
				{React.cloneElement(icon, {
					className: "w-[24px] h-[24px]",
				})}
			</div>
			<div className="label font-sans">
				<span>{label}</span>
			</div>
		</span>
	);
}

function DropdownItemDivider() {
	return <div className="-mx-2 w-auto h-px border border-gray-200"></div>;
}

export default function FloatingDropdown({ close }: { close: () => void }) {

	return (
		<>
			<div className={`floating-dropdown
				bg-white
				fixed bottom-0 left-1/2 -translate-x-1/2 z-50
				h-auto w-[95%]
				flex flex-col gap-1
				border-2 border-gray-300 p-2
				rounded-[10px_10px_0_0]

				sm:w-[80%]
				md:w-[80%]
				lg:w-[60%]

				xl:absolute xl:top-[130%] xl:right-3 xl:bottom-auto xl:left-auto xl:translate-x-0
				xl:h-auto xl:w-max
				xl:rounded-md xl:shadow-[0_0_5px_rgba(0,0,0,0.3)] xl:border-none
			`}>
				<div className="xl:hidden flex h-2 w-full justify-center">
					<div className="w-[30%] bg-[#D8D8D8] rounded-full active:bg-gray-700" onClick={close}></div>
				</div>

				<DropdownItem label="Save" icon={<icons.save />} />
				<DropdownItem label="Save to Space" icon={<icons.studyspace />}/>
				<DropdownItemDivider />
				<DropdownItem label="Hide Post" icon={<icons.hide />} />
				<DropdownItemDivider />
				<DropdownItem label="Block" icon={<icons.block />} />
				<DropdownItem label="Report" icon={<icons.report />}/>
			</div>

			<Backdrop zIndex={40} onClick={close} extendedClass="xl:hidden block" />
		</>
	);
}
