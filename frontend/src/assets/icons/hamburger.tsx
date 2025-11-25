export default function HamburgerIcon(props: React.SVGAttributes<SVGElement>): React.ReactElement<SVGElement> {
    return (
    	<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
     		<path d="M1 7H19M1 1H19M1 13H19" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    	</svg>
    )
}
