'use client'
import { DataArrayType } from '@/app/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SliderCard = ({
	item,
	index,
}: {
	item: DataArrayType
	index: number
}) => {
	const router = useRouter()

	return (
		<>
			<div className='h-[280px] lg:h-[450px] md:h-[400px] sm:h-[200px] lg:w-[650px] md:w-[450px]  sma:w-[300px] w-[300px] relative m-auto'>
				<div className='h-full w-full group cursor-all-scroll z-50  relative py-4 md:py-4'>
					<Image
						src={item.images[0]}
						alt={item.name}
						className='w-full h-[200px] lg:h-[350px] md:h-[300px] max-w-[100%] rounded-md'
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '100%', height: '80%' }}
					/>
					<div
						onClick={() => {
							router.push(`/portfoliodetail/${index}`)
						}}
						className='absolute bottom-[100px] lg:bottom-28 md:bottom-32 sm:bottom-[270px]  left-6 rounded-md transition  duration-300 opacity-0 group-hover:opacity-100 bg-orange cursor-pointer flex items-center justify-center shadow-accent-color  hover:shadow-xl  hover:bg-orange w-8  h-8 md:w-10  md:h-10 lg:w-16 lg:h-16'
						//
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='2'
							stroke='currentColor'
							aria-hidden='true'
							className='w-6 h-6 lg:w-10 lg:h-10 text-white'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'></path>
						</svg>
					</div>
				</div>
				<div
					className='absolute top-14 sm:left-12 rounded-lg bg-white h-[200px] lg:h-[350px] md:h-[300px] w-full'
					style={{ boxShadow: 'hsl(var(--dark)) 6px 5px 22px -4px' }}>
					<div className='relative  h-[200px] lg:h-[350px] md:h-[300px] w-[100%'>
						<p className='absolute bottom-3 left-4 text-lg font-[300] capitalize'>
							{item.name}
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default SliderCard
