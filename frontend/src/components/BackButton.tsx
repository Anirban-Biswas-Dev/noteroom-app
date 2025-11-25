import icons from "@utils/iconsLoader"

export default function BackButton({ onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="back-button flex flex-row justify-center items-center" onClick={onClick} {...props}>
            <icons.leftarrow className="h-10 w-10" />
        </button>
    )
}
