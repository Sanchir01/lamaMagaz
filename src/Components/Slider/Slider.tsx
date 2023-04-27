import React from 'react'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import styles from './Slider.module.scss'

const Slider = () => {
	const [currentSlide, setCurrentSlide] = React.useState(0)

	const sliderData: string[] = [
		'https://img2.akspic.ru/crops/6/5/6/9/6/169656/169656-devushka_s_korotkimi_volosami-model-ryzhie_volosy-volosy-krasota-1920x1080.jpg',
		'https://img2.akspic.ru/crops/0/4/0/5/6/165040/165040-dzhidzhi_hadid-model-znamenitost-volosy-lico-1920x1080.jpg',
		'https://img2.akspic.ru/previews/3/3/9/1/3/131933/131933-model-krasota-ledi-zheltyj-lico-x750.jpg'
	]
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
	  };
	  const nextSlide = () => {
		setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
	  };
	return (
		<div className={styles.slider}>
			<div className={styles.container} style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
				{sliderData.map(slider => (
					<img
						className='w-screen h-full object-cover'
						src={slider}
						alt={slider}
					/>
				))}
			</div>
			<div className='absolute left-0 right-0 w-[120px] m-auto flex bottom-24 gap-3'>
				<div onClick={prevSlide} className='text-white border-[1px] w-[50px] h-[50px] flex justify-center items-center  cursor-pointer'>
					<WestOutlinedIcon className='' />
				</div>
				<div onClick={nextSlide} className='text-white border-[1px] w-[50px] h-[50px] flex justify-center items-center cursor-pointer'>
					<EastOutlinedIcon className='' />
				</div>
			</div>
		</div>
	)
}

export default Slider
