import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
	const products = useSelector((state) => state.cart.products); //data sudah tersimpan disini, karena tersimpan di products [] di cartReducer.js
	const [open, setOpen] = useState(false); //agar keadaan cartnya awal tertutup, maka harus diberi nilai false
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="left">
					<div className="item">
						<img src="img/en.png" alt="" />
						<KeyboardArrowDownIcon />
					</div>
					<div className="item">
						<span>USD</span>
						<KeyboardArrowDownIcon />
					</div>
					<div className="item">
						{/** Navbar Women ini akan berisi banyak p roducts dan akan mendirect user ke sana*/}
					</div>
					<Link className="link" to="Products/1">
						Women
					</Link>
					<div className="item"></div>
					<Link className="link" to="Products/2">
						Men
					</Link>
					<div className="item"></div>
					<Link className="link" to="Products/3">
						Children
					</Link>
				</div>
				<div className="center">
					<Link className="link" to="/">
						YStore
					</Link>
				</div>
				<div className="right">
					<div className="item">
						<Link className="link" to="/">
							Home Page
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							About
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Contact
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Store
						</Link>
					</div>
					<div className="icons">
						<SearchIcon />
						<Person2OutlinedIcon />
						<FavoriteBorderOutlinedIcon />
						<div className="cartIcon" onClick={() => setOpen(!open)}>
							{/*ketika setOpen dipanggil, maka seterusnya akan mengirimkan parameter berupa !open, yang nantinya akan mengubah open menjadi false (Tertutup) */}
							<ShoppingCartOutlinedIcon />
							<span>{products.length}</span>
						</div>
					</div>
				</div>
			</div>
			{open && <Cart />}
			{/*
			Jika nilai dari variabel open adalah true, maka <Cart /> (komponen atau elemen JSX lainnya) akan dirender.
			Jika nilai dari variabel open adalah false, maka <Cart /> tidak akan dirender, dan elemen ini akan diabaikan.

			Dengan menggunakan && (operator logika AND), kita dapat membuat kondisi di mana elemen atau komponen hanya 
			dirender jika kondisi yang diberikan (dalam hal ini, nilai open) adalah true. Ini sering digunakan untuk 
			mengontrol apakah suatu bagian dari antarmuka pengguna seharusnya muncul atau tidak tergantung pada keadaan tertentu.
			*/}
		</div>
	);
};

export default Navbar;
