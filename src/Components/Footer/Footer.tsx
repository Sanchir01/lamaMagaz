
import FooterCol from './FooterCol'

const Footer = () => {
	return (
		<footer className=' bg-neutral-200'>
			<div className='  flex w-[90%] m-auto justify-between gap-4 p-2'>
				<FooterCol title='Category' links={['Woman', 'Men', 'Shoes', 'Accessories','New Arrivals']} />
				<FooterCol title='Link' links={['FAQ', 'Pages', 'Stores', 'Compare','Cookies']} />
				<FooterCol title='About' links={['About', 'Contacts', ]} />
			</div>
		</footer>
	)
}

export default Footer
