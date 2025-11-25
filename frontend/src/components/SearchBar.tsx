import icons from "@utils/iconsLoader";

interface ISearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
	iconClass?: string,
	inputClass?: string
}


export default function SearchBar({ placeholder, className, iconClass="w-[10%] h-full", inputClass="w-[90%] h-full" }: ISearchBarProps) {
	return (
		<div className={`search-bar
			flex flex-row items-center
			border border-gray-300 rounded-full
			${className}
		`}>
			<div className={`search-icon flex justify-center items-center ${iconClass}`}>
				<icons.search viewBox="0 0 25 25" className="w-5 h-5" />
			</div>
			<div className={`search-input ${inputClass}`}>
				<input type="text" placeholder={placeholder} className='w-full h-full bg-transparent border-none outline-none text-base desktop:text-[18px]' />
			</div>
		</div>
	);
}
