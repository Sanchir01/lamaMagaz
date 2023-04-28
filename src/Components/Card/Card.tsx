import  { FC } from 'react'
import { FuetureProduct } from '../../../interface/FooterInterface'
import { Link } from 'react-router-dom'

import styles from './Card.module.scss'

const Card: FC<FuetureProduct> = ({
	id,
	img,
	img2,
	title,
	oldPrice,
	price,
	isNew
}) => {
	return (
		<Link className='mt-20' to={`/product/${id}`}>
			<div className='w-[300px] flex flex-col gap-2'>
				<div className={styles.block}>
					{isNew && <span className='flex-wrap absolute top-2 left-1 z-40 py-2 px-1 bg-white text-pink-600'>New Season</span>}
					<img
						src={img}
						alt={img}
						className='w-full h-full object-cover absolute  z-10'
					/>
					<img src={img2} alt={img2} className={styles.img4} />
				</div>
				<h2 className='font-normal text-lg '>{title}</h2>
				<div className='font-medium text-lg flex gap-5'>
					<h3 className='text-gray-400 line-through'>${oldPrice}</h3>
					<h3>${price}</h3>
				</div>
			</div>
		</Link>
	)
}

export default Card
