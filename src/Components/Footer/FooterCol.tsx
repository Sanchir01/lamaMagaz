import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { FooterColum } from '../../../interface/FooterInterface'

const FooterCol: FC<FooterColum> = ({ title, links }) => {
	return (
		<div className='flex-1'>
			<h2 className='text-xl font-semibold border-b-2 border-b-slate-500 pb-2'>
				{title}
			</h2>

			{links && links.map(link => (
				<Link
					className='flex flex-col  '
					key={link}
					to='/'
				>
					{link}
				</Link>
			))}
		</div>
	)
}

export default FooterCol
