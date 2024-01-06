import React from "react";
import "./Footer.scss";
const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="item">
					<h1>Categories</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Shoes</span>
					<span>Accessoeries</span>
					<span>New Arrivals</span>
				</div>
				<div className="item">
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Store</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item">
					<h1>About</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
						blanditiis possimus a nemo perspiciatis minima impedit eum. Quos
						modi, laborum repudiandae, deleniti a tenetur distinctio eum placeat
						repellendus soluta quaerat.
					</span>
				</div>
				<div className="item">
					<h1>Contac</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
						blanditiis possimus a nemo perspiciatis minima impedit eum. Quos
						modi, laborum repudiandae, deleniti a tenetur distinctio eum placeat
						repellendus soluta quaerat.
					</span>
				</div>
			</div>
			<div className="botoom">
				<div className="left">
					<div className="logo">YStore</div>
					<div className="copyright"> © Copyright 2023. All Right Reserved</div>
				</div>
				<div className="right">
					<img src="/img/payment.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
