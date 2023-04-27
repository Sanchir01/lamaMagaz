import React, { FC } from 'react'
import { FuetureProduct } from '../../../interface/FooterInterface'
import Card from '../Card/Card'
interface title{
    type:string
}
const FuetuteProduct:FC<title> = ({type}) => {
	const data:FuetureProduct[] = [
		{
			id: 1,
			img: 'https://img3.akspic.ru/crops/7/9/1/9/4/149197/149197-feshn-model-odezhda-rukav-sheya-1920x1080.jpg',
			img2: 'https://img3.akspic.ru/crops/7/3/7/1/5/151737/151737-dlinnyevolosy-model-pevec-podborodok-pricheska-1920x1080.jpg',
			title: 'name',
			isNew: true,
			oldPrice: 546346,
			price: 435
		},
		{
			id: 2,
			img: 'https://img2.akspic.ru/crops/4/8/0/8/3/138084/138084-model-ledi-lico-dlinnye_volosy-zhenshhina-1920x1080.jpg',
			img2: 'https://img3.akspic.ru/crops/7/3/7/1/5/151737/151737-dlinnyevolosy-model-pevec-podborodok-pricheska-1920x1080.jpg',
			title: 'name',
			isNew: true,
			oldPrice: 74567547,
			price: 34562
		},
		{
			id: 3,
			img: 'https://img1.akspic.ru/crops/8/3/4/9/3/139438/139438-kozha-feshn-ledi-volosy-model-1920x1080.jpg',
			img2: 'https://img3.akspic.ru/crops/7/3/7/1/5/151737/151737-dlinnyevolosy-model-pevec-podborodok-pricheska-1920x1080.jpg',
			title: 'name',
			isNew: false,
			oldPrice: 1765745000,
			price: 12
		},
		{
			id: 4,
			img: 'https://img2.akspic.ru/crops/5/2/5/8/5/158525/158525-tejlor_svift-miss_amerikana-lyubovnik-koshka-guba-1920x1080.jpg',
			img2: 'https://img3.akspic.ru/crops/7/3/7/1/5/151737/151737-dlinnyevolosy-model-pevec-podborodok-pricheska-1920x1080.jpg',
			title: 'name',
			isNew: false,
			oldPrice: 6543346,
			price: 123212113
		}
	]
	return (
		<div className=' my-[100px]'>
			<div className='flex justify-between items-center flex-row  mx-[200px]'>
				<h1 className='font-semibold text-3xl basis-2/5'>{type} product</h1>
				<p className='basis-3/5 w-[600px] text-neutral-500 font-medium'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
					sunt quae magnam, quo numquam, nemo harum placeat sapiente facilis
					praesentium eaque officia laboriosam quasi necessitatibus sequi
					aliquam maiores unde dolore!
				</p>
			</div>
			<div className='flex justify-center gap-12'>
				{data && data.map(item => <Card {...item} key={item.id} />)}
			</div>
		</div>
	)
}

export default FuetuteProduct
