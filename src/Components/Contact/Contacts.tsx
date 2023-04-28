
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'

const Contacts = () => {
	return (
		<div className='bg-blue-500 text-white p-4 flex justify-center my-24'>
			<div className=' flex w-[50%] justify-between items-center'>
				<span>BE IN TOUCH WITH US</span>
				<div className='flex gap-2'>
					<input
						className='rounded-lg text-black'
						type='text'
						placeholder='Enter your E-mail'
					/>
					<button className='bg-neutral-700 rounded-lg p-2'>Join us</button>
				</div>
				<div className='flex gap-3'>
					<TelegramIcon />
					<InstagramIcon />
				</div>
			</div>
		</div>
	)
}

export default Contacts
