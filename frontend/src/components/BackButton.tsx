import icons from "@utils/iconsLoader"
import { useNavigate } from "react-router-dom"

export default function BackButton({ onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const navigate = useNavigate()

    return (
        <button className="back-button flex flex-row justify-center items-center" onClick={(e) => onClick ? onClick(e) : navigate(-1) } {...props}>
            <icons.leftarrow className="h-10 w-10" />
        </button>
    )
}
