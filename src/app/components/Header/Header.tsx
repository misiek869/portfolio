'use client'
import { useEffect, useState } from 'react'
import DiagonalDrawer from './DiagonalDrawer'
import Image from 'next/image'
import '../Header/DiagonalDrawer.css'

const Header = () => {
	const [selectedIndexOne, setSelectedIndexOne] = useState<number>(0)
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

	const openDrawer = () => {
		setIsOpen(true)
	}

	const liStyles =
		'group text-xl relative font-medium mr-20 tracking-wide uppercase'

	return (
		<>
			<div className={`diagonal-drawer ${isOpen ? 'open' : ''}`}>
				<DiagonalDrawer
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					selectedIndexOne={selectedIndexOne}
					setSelectedIndexOne={setSelectedIndexOne}
				/>
			</div>
			<header
				className={`${
					isScrolled ? 'headerShow' : ''
				} w-full fixed top-0 z-50 transition-all duration-500`}>
				<div className='relative'>
					<div
						className='z-30 absolute cursor-pointer w-14 h-14 lg:w-16 lg:h-16 bg-orange flex justify-center items-center rounded-br-xl'
						onClick={openDrawer}>
						<div className='relative flex justify-center items-center'>
							<Image
								height={100}
								width={100}
								src='/hamburger-menu-svgrepo-com.svg'
								alt='drawer item'
								className='w-14 h-14 color-white '></Image>
						</div>
					</div>
				</div>

				<nav className='invisible xl:visible xl:max-w-4xl 2xl:max-w-xl mx-auto '>
					<ul className='flex flex-row align-items-center h-16 items-center'>
						<li className={liStyles}>
							{selectedIndexOne === 0 ? (
								<span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							) : (
								<span className='menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							)}
							<a
								href='/#home'
								onClick={() => setSelectedIndexOne(0)}
								className={`menu-item ${
									selectedIndexOne === 0 ? 'text-orange' : ''
								} text-white group-hover:text-black`}>
								Home
							</a>
						</li>

						<li className={liStyles}>
							{selectedIndexOne === 1 ? (
								<span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							) : (
								<span className='menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							)}
							<a
								href='/#home'
								onClick={() => setSelectedIndexOne(1)}
								className={`menu-item ${
									selectedIndexOne === 1 ? 'text-orange' : ''
								} text-white group-hover:text-black`}>
								Portfolio
							</a>
						</li>

						<li className={liStyles}>
							{selectedIndexOne === 2 ? (
								<span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							) : (
								<span className='menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							)}
							<a
								href='/page/contactme'
								onClick={() => setSelectedIndexOne(2)}
								className={`menu-item ${
									selectedIndexOne === 2 ? 'text-orange' : ''
								} text-white group-hover:text-black`}>
								Contact Me
							</a>
						</li>

						<li className={liStyles}>
							{selectedIndexOne === 3 ? (
								<span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							) : (
								<span className='menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							)}
							<a
								href='/#about'
								onClick={() => setSelectedIndexOne(3)}
								className={`menu-item ${
									selectedIndexOne === 3 ? 'text-orange' : ''
								} text-white group-hover:text-black`}>
								About
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header
