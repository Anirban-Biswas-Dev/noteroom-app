export default function Button({ children, className, ...props}: { children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={`button
            ${className}
            outline-transparent border rounded-[5px] p-2
            flex justify-center items-center gap-[5px]
            cursor-pointer
        `}>
            {children}
        </button>
    )
}