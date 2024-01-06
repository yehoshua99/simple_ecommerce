import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

{
	/* menerima props item */
}
const Card = ({ item }) => {
	return (
		<Link className="link" to={`/product/${item.id}`}>
			<div className="card">
				<div className="image">
					{item?.attributes.isNew && <span>New Season</span>}{" "}
					{/* Jika isNew nya true, maka akan menampilkan new season, jika false tidak tampil */}
					<img
						src={
							process.env.REACT_APP_UPLOAD_URL +
							item.attributes.img.data.attributes.url
						}
						alt=""
						className="mainImg"
					/>
					<img
						src={
							process.env.REACT_APP_UPLOAD_URL +
							item.attributes.img2.data.attributes.url
						}
						alt=""
						className="secondImg"
					/>
				</div>
				<h2>{item?.attributes.title}</h2>
				<div className="prices">
					<h3>${item?.attributes.oldPrice || item?.attributes.price + 20}</h3>{" "}
					{/*jika item harga lama ada/tidak akan/tidak ditampilkan atau jika tidak ada maka akan dimuncilkan harga asli + 20  */}
					<h3>${item?.attributes.price}</h3>
				</div>
			</div>
		</Link>
	);
};

export default Card;
