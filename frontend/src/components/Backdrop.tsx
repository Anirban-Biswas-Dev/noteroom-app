import React from 'react'

export default function Backdrop({ zIndex, onClick, extendedClass }: { zIndex: number, onClick?: (e?: React.MouseEvent) => void, extendedClass?: string }) {
	return <div className={`fixed inset-0 bg-black/20 z-${zIndex} ${extendedClass}`} onClick={onClick} />
}
