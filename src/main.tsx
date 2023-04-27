import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.tsx'
import Products from './Pages/Products/Products.tsx'
import Product from './Pages/Product/Product.tsx'
import Navbar from './Components/Navbar/Navbar.tsx'
import Footer from './Components/Footer/Footer.tsx'

const Layout = () => {
	return (
		<>
			<div className=''>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products/:id',
        element:<Products/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      }
    ]
	}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<App />
	</React.StrictMode>
)
