'use client'
import { useEffect, useState } from 'react'

const Header = () => {
	const [selectedIndexOne, setSelectedIndexOne] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop
			setIsScrolled(scrollTop > 0)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	console.log(isScrolled)

	return <div></div>
}

export default Header
