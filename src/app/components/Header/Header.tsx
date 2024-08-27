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
				} w-full fixed top-0 z-50 transition-all duration-500`}
				style={{
					backgroundColor: isScrolled ? '#fff' : 'transparent',
					boxShadow: isScrolled ? '#48AFDE -10px 25px 50px 10px' : '',
				}}>
				<div className='relative'>
					<div
						className='z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-3xl'
						onClick={openDrawer}>
						<div className='relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center'>
							<Image
								height={100}
								width={100}
								src='/drawer.png'
								alt='drawer item'
								className='w-[150px] h-10'></Image>
						</div>
					</div>
				</div>

				<nav className='invisible xl:visible xl:max-w-4xl 2xl:max-w-xl mx-auto '>
					<ul className='flex flex-row align-items-center h-24'>
						<li className='group text-2xl relative font-bold mr-20'>
							{selectedIndexOne === 0 ? (
								<span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							) : (
								<span className='menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							)}
							<a
								href='/#home'
								onClick={() => setSelectedIndexOne(0)}
								className={`menu-item ${
									selectedIndexOne === 0 ? 'text-black' : ''
								} text-[#666d47] group-hover:text-black`}>
								Home
							</a>
						</li>

						<li className='group text-2xl relative font-bold mr-20'>
							{selectedIndexOne === 1 ? (
								<span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							) : (
								<span className='menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							)}
							<a
								href='/#home'
								onClick={() => setSelectedIndexOne(1)}
								className={`menu-item ${
									selectedIndexOne === 1 ? 'text-black' : ''
								} text-[#666d47] group-hover:text-black`}>
								Portfolio
							</a>
						</li>

						<li className='group text-2xl relative font-bold mr-20'>
							{selectedIndexOne === 2 ? (
								<span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							) : (
								<span className='menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							)}
							<a
								href='/#home'
								onClick={() => setSelectedIndexOne(2)}
								className={`menu-item ${
									selectedIndexOne === 2 ? 'text-black' : ''
								} text-[#666d47] group-hover:text-black`}>
								Hire Me
							</a>
						</li>

						<li className='group text-2xl relative font-bold mr-20'>
							{selectedIndexOne === 3 ? (
								<span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							) : (
								<span className='menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
							)}
							<a
								href='/#home'
								onClick={() => setSelectedIndexOne(3)}
								className={`menu-item ${
									selectedIndexOne === 3 ? 'text-black' : ''
								} text-[#666d47] group-hover:text-black`}>
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
