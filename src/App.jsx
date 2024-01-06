import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
const Layout = () => {
	return (
		<div className="app">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};
/**
 * Home dan Footer dari components disimpan degnan variable Layout, kemudian dipanggil di router
<Outlet/> pada dasar nya ini mewakili halaman kita yang berbeda
sehingga kita dapat menulisdisini apapun yang inginkan
 */

const router = createBrowserRouter([
	{
		//pada path '/' dengan elemen layout akan menampilkan Home dan footer terus
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/products/:id",
				element: <Products />,
			},
			{
				path: "/product/:id",
				element: <Product />,
			},
		],
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
