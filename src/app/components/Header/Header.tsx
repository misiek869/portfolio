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

	return (
		<>
			<header
				className={`${
					isScrolled && 'headerShow'
				} fixed top-0 z-50 transition-all duration-500`}
				style={{
					backgroundColor: isScrolled ? '#fff' : 'transparent',
					boxShadow: isScrolled ? '#48AFDE -10px 25px 50px 10px' : '',
				}}>
				<h1>testing</h1>
			</header>
		</>
	)
}

export default Header
