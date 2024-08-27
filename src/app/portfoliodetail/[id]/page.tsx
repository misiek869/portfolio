'use client'

import PortfolioDesign from '../../page/portfolio-design'
import { DataArray } from '@/app/data'

type PortfolioDetailPageProps = {
	params: {
		id: string
	}
}

const PortfolioDetailPage = ({ params }: PortfolioDetailPageProps) => {
	return (
		<>
			<PortfolioDesign
				data={DataArray[Number(params.id)]}
				id={params.id}
				dataArray={DataArray}
			/>
		</>
	)
}

export default PortfolioDetailPage
