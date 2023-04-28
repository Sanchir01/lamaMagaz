import React, { FC } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

const Product: FC = () => {
	const [selected, setSelected] = React.useState<number>(0)
	const [quantity, setQuantity] = React.useState<number>(1)
	const images: string[] = [
		'https://img1.akspic.ru/crops/9/7/0/5/6/165079/165079-benedikt_kamberbetch-doktor_strendzh-blu_ray_disk-volosy-svet-1920x1080.jpg',
		'https://img1.akspic.ru/crops/8/4/1/4/6/164148/164148-svet-voda-zhidkiy-purpur-lazurnyj-1920x1080.jpg'
	]
	return (
		<div className='flex py-5 px-12 gap-12 basis-1'>
			<div className='basis-1/2 flex gap-2'>
				<div className='basis-1/6'>
					{images.map((img, i) => (
						<img
							className='w-full h-[150px] object-cover cursor-pointer mb-3'
							key={img}
							src={img}
							alt={img}
							onClick={() => setSelected(i)}
						/>
					))}
				</div>
				<div className='basis-5/6'>
					<img
						className='w-full max-h-[1000px] object-cover'
						src={images[selected]}
						alt='4'
					/>
				</div>
			</div>
			<div className='basis-1/2 flex flex-col gap-2'>
				<h1>title</h1>
				<span>199 P</span>
				<p className='text-justify'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil
					consequuntur itaque quis, commodi sapiente voluptas? Veritatis
					pariatur odio ratione doloremque asperiores. Similique ullam aliquid
					repellat minus ducimus, assumenda error?
				</p>
				<div className='flex items-center gap-2'>
					<button
						className='text-xl bg-neutral-400 p-3'
						onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
					>
						-
					</button>
					<p>{quantity}</p>
					<button
						className='text-xl bg-neutral-400 p-3'
						onClick={() => setQuantity(quantity + 1)}
					>
						+
					</button>
				</div>
				<button className='bg-neutral-300 rounded-lg p-2'>
					<AddShoppingCartIcon /> Add to cart
				</button>
				<div className='flex gap-6'>
					<div className='flex gap-2'>
						<FavoriteBorderIcon /> Add to wish list
					</div>
					<div className='flex gap-2 '>
						<BalanceIcon /> Add to compare
					</div>
				</div>
				<div className=''>
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
				<hr />
				<div className=''>
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	)
}

export default Product
