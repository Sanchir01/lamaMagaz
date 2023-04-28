import Categories from '../../Components/Categories/Categories.tsx'
import Contacts from '../../Components/Contact/Contacts.tsx'
import FuetuteProduct from '../../Components/FuetureProducts/FuetuteProduct.tsx'
import SwiperSanchir from '../../Components/Swiperslider/Swiper.tsx'

const Home = () => {
	return (
		<div>
			<SwiperSanchir />
			<FuetuteProduct type='Featuring'/>
			<Categories/>
			<FuetuteProduct type='Trending'/>
			<Contacts/>
		</div>
	)
}

export default Home
