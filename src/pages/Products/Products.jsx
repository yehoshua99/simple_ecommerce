import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
	{
		/*1. useParams().id akan mengambil id yang ada pada url, misal cats/12 maka yang akan diambil adalah 12 
		Karena hasil log id dari URL adalah string, maka harus dikonversi dahulu ke int dengan parseInt
		
		2./* setMaxPrice akan mempengaruhi/merubah nilai dari maxPrice */
	}
	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null); //utk nilai awal sort adalah null
	const [selectedSubCats, setSelectedSubCats] = useState([]);

	const { data, loading, error } = useFetch(
		`/sub-categories?[filters][categories][id][$eq]=${catId}`
	);
	const handleChange = (e) => {
		const value = e.target.value;
		const isChecked = e.target.checked;

		setSelectedSubCats(
			isChecked
				? [...selectedSubCats, value]
				: selectedSubCats.filter((item) => item !== value)
		);
	};

	// console.log(selectedSubCats);

	return (
		<div className="products">
			<div className="left">
				<div className="filterItem">
					<h2>Product Categories</h2>
					{data?.map((item) => (
						<div className="inputItem" key={item.id}>
							<input
								type="checkbox"
								value={item.id}
								id={item.id}
								onChange={handleChange}
							/>
							<label htmlFor={item.id}>{item.attributes.title}</label>
						</div>
					))}
				</div>
				<div className="filterItem">
					<h2>Filter by Price</h2>
					<div className="inputItem">
						<span>0</span>
						<input
							type="range"
							min={0}
							max={1000}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						{/*1. onChange: Ini adalah properti pada elemen input range yang mendefinisikan fungsi yang akan dijalankan setiap kali nilai input berubah.
						   2. (e) => setMaxPrice(e.target.value): Ini adalah fungsi panjang yang ditetapkan ke onChange. Ketika pengguna mengubah nilai pada input range, 
						   fungsi ini dijalankan. Parameter e adalah objek event yang mewakili peristiwa perubahan nilai pada elemen input. e.target.value mengambil nilai yang baru dari elemen input range dan kemudian mengguncang (update) state maxPrice menggunakan fungsi setMaxPrice.
						   */}

						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="filterItem">
					<h2>Sort By</h2>
					<div className="inputItem">
						<input
							type="radio"
							id="asc"
							value="asc"
							name="price"
							onChange={(e) => setSort("asc")}
						/>
						<label htmlFor="asc">Price (Lowest first)</label>
					</div>
					<div className="inputItem">
						<input
							type="radio"
							id="desc"
							value="desc"
							name="price"
							onChange={(e) => setSort("desc")}
						/>
						<label htmlFor="desc">Price (Highest first)</label>
					</div>
				</div>
			</div>
			<div className="right">
				<img
					className="catImg"
					src="https://img.freepik.com/free-photo/trendy-fashionable-couple-isolated-white-studio-background_155003-41890.jpg?w=996&t=st=1703953462~exp=1703954062~hmac=0e33e86e15af8de9061fa86c020fa2bc9f9926a2e24c9992e6e698c571d77d8a"
					alt=""
				/>
				<List
					catId={catId}
					maxPrice={maxPrice}
					sort={sort}
					subCats={selectedSubCats}
				/>
				{/*akan mengirim props ke List.jsx */}
			</div>
		</div>
	);
};

export default Products;
