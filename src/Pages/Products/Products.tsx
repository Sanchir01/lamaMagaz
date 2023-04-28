import React from 'react'
import List from '../../Components/List/List'


const Products = () => {
	
	const [maxPrice, setMaxPrice] = React.useState<String | undefined | number>(
		1000
	)
	const [, setSort] = React.useState<String>('')
	return (
		<div className='flex px-10 justify-between'>
			<div className='basis-1/4 sticky top-12 h-full flex flex-col gap-5'>
				<div className=''>
					<h2 className='mb-2 font-semibold text-xl'>Product Categories</h2>
					<div className=''>
						<input type='checkbox' id='1' value={1} />
						<label htmlFor='1'>Shoes</label>
					</div>
					<div className=''>
						<input type='checkbox' id='2' value={2} />
						<label htmlFor='2'>Skirts</label>
					</div>
					<div className=''>
						<input type='checkbox' id='3' value={3} />
						<label htmlFor='3'>Coats</label>
					</div>
				</div>
				<div className=''>
					<h2 className='mb-2 font-semibold text-xl'>Filter by price</h2>
					<div className=''>
						<span>0</span>
						<input
							type='range'
							min={0}
							max={1000}
							onChange={e => setMaxPrice(e.target.value)}
						/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className=''>
					<h2 className='mb-2 font-semibold text-xl'>Sort by</h2>
					<div className=''>
						<input
							type='radio'
							id='asc'
							value='asc'
							name='price'
							onChange={() => setSort('asc')}
						/>
						<label htmlFor='asc'>Price(asc)</label>
					</div>
					<div className=''>
						<input
							type='radio'
							id='desc'
							value='desc'
							name='price'
							onChange={() => setSort('desc')}
						/>
						<label htmlFor='desc'>Price (desc)</label>
					</div>
				</div>
			</div>

			<div className='flex flex-col basis-3/4'>
				<img
					className='w-full h-[400px] mb-2 object-cover object-center'
					src='https://img2.akspic.ru/crops/2/7/0/2/7/172072/172072-anime-miyo_sasaki-netfliks-krasochnaya_studiya-nauchnaya_fantastika-1920x1080.jpg'
					alt='https://img2.akspic.ru/crops/2/7/0/2/7/172072/172072-anime-miyo_sasaki-netfliks-krasochnaya_studiya-nauchnaya_fantastika-1920x1080.jpg'
				/>
			 <List/>
			</div>
		</div>
	)
}

export default Products
