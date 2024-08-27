import { DataArrayType } from '@/app/data'
import Image from 'next/image'

const SliderCard = ({
	item,
	index,
}: {
	item: DataArrayType
	index: number
}) => {
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
				</div>
			</div>
		</>
	)
}

export default SliderCard
