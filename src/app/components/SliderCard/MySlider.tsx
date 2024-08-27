import { DataArray } from '@/app/data'
import SliderCard from './SliderCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MySlider = () => {
	return (
		<div>
			{DataArray.map((item, index) => {
				return (
					<div className='my-slider' key={index}>
						<SliderCard item={item} index={index} />
					</div>
				)
			})}
		</div>
	)
}

export default MySlider
