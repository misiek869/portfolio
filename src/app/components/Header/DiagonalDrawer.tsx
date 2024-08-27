'use client'
import { useRouter, usePathname } from 'next/navigation'

type diagonalDrawerProps = {
	isOpen: boolean
	setIsOpen: any
	selectedIndexOne: number
	setSelectedIndexOne: any
}

const DiagonalDrawer = ({
	isOpen,
	setIsOpen,
	selectedIndexOne,
	setSelectedIndexOne,
}: diagonalDrawerProps) => {
	const route = useRouter()
	const pathName = usePathname()

	return (
		<>
			<div className='relative'>
				<div
					className={`z-50 ${
						pathName === '/' ? 'top-[0px]' : 'top-[0px]'
					} cursor-pointer fixed w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] top-0 flex justify-center items-center rounded-br-3xl `}>
					<div className='relative flex justify-center items-center w-7 h-7 lg:w-10 lg:h-10 '>
						{isOpen ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								class='w-12 h-12 text-white cursor-pointer  '>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-12 h-12 text-white'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
								/>
							</svg>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default DiagonalDrawer
