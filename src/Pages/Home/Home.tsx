// @ts-ignore
import Categories from '../../Components/Categories/Categories.tsx'
import FuetuteProduct from '../../Components/FuetureProducts/FuetuteProduct.tsx'
import Slider from '../../Components/Slider/Slider'
import SwiperSanchir from '../../Components/Swiperslider/Swiper.tsx'

const Home = () => {
	return (
		<div>
			<SwiperSanchir />
			<FuetuteProduct type='Featuring'/>
			<Categories/>
			<FuetuteProduct type='Trending'/>
		</div>
	)
}

export default Home
