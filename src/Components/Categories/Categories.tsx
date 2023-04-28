
import styles from './Categories.module.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
	return (
		<div className='flex h-[80vh] gap-[10px] m-[10px]'>
			<div className={styles.col}>
				<div className={styles.row}>
					<img
						src='https://img1.akspic.ru/crops/7/3/9/4/6/164937/164937-tatyana_kozelkina-zloj_put-model-tak_derzhat-volosy-1920x1080.jpg'
						alt='https://img1.akspic.ru/crops/7/3/9/4/6/164937/164937-tatyana_kozelkina-zloj_put-model-tak_derzhat-volosy-1920x1080.jpg'
					/>
					<button className='bg-white'>
						<Link to='/products/1'>Sale</Link>
					</button>
				</div>
				<div className={styles.row}>
					<img
						src='https://img1.akspic.ru/previews/7/9/3/9/3/139397/139397-muzyka-futbolka-volosy-plecho-podborodok-x750.jpg'
						alt='https://img1.akspic.ru/previews/7/9/3/9/3/139397/139397-muzyka-futbolka-volosy-plecho-podborodok-x750.jpg'
					/>
					<button className='bg-white'>
						<Link to='/products/1' className='link'>
							Women
						</Link>
					</button>
				</div>
			</div>
			<div className={styles.col}>
				<div className={styles.row}>
					<img
						src='https://img2.akspic.ru/previews/1/1/6/4/2/124611/124611-tatuirovka-tatu-kinoprodyuser-dzhek_vorobej-ruka-x750.jpg'
						alt='https://img2.akspic.ru/previews/1/1/6/4/2/124611/124611-tatuirovka-tatu-kinoprodyuser-dzhek_vorobej-ruka-x750.jpg'
					/>
					<button className='bg-white'>
						<Link to='/products/1' className='link'>
							New Season
						</Link>
					</button>
				</div>
			</div>
			<div className={`${styles.col} ${styles.col_l}`}>
				<div className={styles.row}>
					<div className={styles.col}>
						<div className={styles.row}>
							<img
								src='https://img1.akspic.ru/crops/0/5/7/8/4/148750/148750-model-los_anzheles-bezumnyj_maks-manekenshhica-bogi_egipta-1920x1080.jpg'
								alt='https://img1.akspic.ru/crops/0/5/7/8/4/148750/148750-model-los_anzheles-bezumnyj_maks-manekenshhica-bogi_egipta-1920x1080.jpg'
								
							/>
							<button className='bg-white'>
								<Link to='/products/1' className='link'>
									Men
								</Link>
							</button>
						</div>
					</div>
					<div className={styles.col}>
						<div className={styles.row}>
							<img
								src='https://img1.akspic.ru/crops/4/7/5/5/5/155574/155574-dzhidzhi_hadid-model-volosy-lico-guba-1920x1080.jpg'
								alt='https://img1.akspic.ru/crops/0/5/7/8/4/148750/148750-model-los_anzheles-bezumnyj_maks-manekenshhica-bogi_egipta-1920x1080.jpg'
							/>
							<button className='bg-white'>
								<Link to='/products/1' className='link'>
									Accessories
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className={styles.row}>
					<img
						src='https://img3.akspic.ru/crops/7/6/6/7/5/157667/157667-esha_gupta_krasivaya-kommandos_2-akter-bollivud-model-1920x1080.jpg'
						alt='https://img3.akspic.ru/crops/7/6/6/7/5/157667/157667-esha_gupta_krasivaya-kommandos_2-akter-bollivud-model-1920x1080.jpg'
					/>
					<button className='bg-white'>
						<Link to='/products/1' className='link'>
							Shoes
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Categories
