import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='h-20  z-1000 bg-white  '>
			<div className='flex justify-between py-3 px-8 '>
				<div className='flex gap-3 items-center'>
					<div className='flex'>
						<img
							src='https://raw.githubusercontent.com/safak/youtube2022/ecommerce/client/public/img/en.png'
							alt=''
						/>
						<KeyboardArrowDownIcon />
					</div>
					<div className='flex uppercase'>
						<span>USD</span>
						<KeyboardArrowDownIcon />
					</div>
					<div className=''>
						<Link to='/products/1'>Woman</Link>
					</div>
					<div className=''>
						<Link to='/products/2'>Man</Link>
					</div>
					<div className=''>
						<Link to='/products/3'>Children</Link>
					</div>
				</div>
				<div className='text-4xl'>
					<Link className='uppercase' to='/'>sanchir-shop</Link>
				</div>
				<div className='flex gap-6 items-center'>
					<div className=''>
						<Link to='/'>Home</Link>
					</div>
					<div className=''>
						<Link to='/'>About</Link>
					</div>
					<div className=''>
						<Link to='/'>Contacts</Link>
					</div>
					<div className=''>
						<Link to='/'>Stores</Link>
					</div>
					<div className='flex gap-6 cursor-pointer'>
						<SearchIcon />

						<PermIdentityIcon />

						<FavoriteBorderIcon />
					</div>
					<div className='cursor-pointer relative'>
						<ShoppingCartIcon />
						<span className='h-5 w-5 rounded-full bg-black text-white p-1 absolute right-[-10px] top-[-10px] items-center justify-center flex'>0</span>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
