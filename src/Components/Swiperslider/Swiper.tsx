import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



const SwiperSanchir = () => {
	const sliderData: string[] = [
		'https://img2.akspic.ru/crops/6/5/6/9/6/169656/169656-devushka_s_korotkimi_volosami-model-ryzhie_volosy-volosy-krasota-1920x1080.jpg',
		'https://img2.akspic.ru/crops/0/4/0/5/6/165040/165040-dzhidzhi_hadid-model-znamenitost-volosy-lico-1920x1080.jpg',
		'https://img2.akspic.ru/previews/3/3/9/1/3/131933/131933-model-krasota-ledi-zheltyj-lico-x750.jpg'
	]
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false
	}
	return (
		<div className='w-full'>
			<div className='h-full'>
				<Slider {...settings}>
					{sliderData.map(slider => (
						<img
							key={slider}
							className='w-[100vh] h-[100vh] object-cover object-center '
							src={slider}
							alt={slider}
						/>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default SwiperSanchir
