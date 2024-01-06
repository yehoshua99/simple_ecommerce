import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<div className="categories">
			<div className="col">
				<div className="row">
					<img
						src="https://img.freepik.com/free-photo/close-up-girl-wearing-cute-hat_23-2148610281.jpg?w=1060&t=st=1703927245~exp=1703927845~hmac=7266b0f6cedd091fec84150b0976c65686e408bbbac6aec215427857034722fb"
						alt=""
					/>
					<button>
						<Link className="link" to="/products/1">
							Sale
						</Link>
					</button>
				</div>
				<div className="row">
					<img
						src="https://img.freepik.com/free-photo/beautiful-model-girl-with-perfect-fresh-clean-skin-youth-skin-care-concept-isolated-pastel-brown-background_658552-32.jpg?w=996&t=st=1703928479~exp=1703929079~hmac=760c1de7e361fdda9f04839963716a8f749135b7f6b854f1ef9ef899a63ab43c"
						alt=""
					/>
					<button>
						<Link className="link" to="/products/1">
							women
						</Link>
					</button>
				</div>
			</div>
			<div className="col">
				<div className="row">
					<img
						src="https://img.freepik.com/free-photo/happy-young-man-with-bicycle-standing-sidewalk_23-2147892853.jpg?w=360&t=st=1703928553~exp=1703929153~hmac=eebd85cd11f4914a399af1ee42570a267c46fb10d6b55318ebf9349ead035257"
						alt=""
					/>
					<button>
						<Link className="link" to="/products/1">
							New Season
						</Link>
					</button>
				</div>
			</div>
			<div className="col col-l">
				<div className="row">
					<div className="col">
						<div className="row">
							<img
								src="https://img.freepik.com/free-photo/portrait-serious-successful-man-dressed-jacket_171337-16756.jpg?w=996&t=st=1703928685~exp=1703929285~hmac=58266b733bc165b8a267ef38d1498c767ef1863c62f422fcb51b0bdd514f4f2f"
								alt=""
							/>
							<button>
								<Link className="link" to="/products/1">
									Men
								</Link>
							</button>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img
								src="https://img.freepik.com/free-photo/travel-still-life-pack-flat-lay_23-2148837360.jpg?w=826&t=st=1703928729~exp=1703929329~hmac=4c57f7f024b756b841dde8300c4e8e17466e1dfeb0c4b53814035398ce51d07e"
								alt=""
							/>
							<button>
								<Link className="link" to="/products/1">
									Accessories
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<img
						src="https://img.freepik.com/free-photo/indian-casual-bearded-male-using-smartphone-loft-room-with-christmas-decoration_613910-13854.jpg?w=900&t=st=1703928796~exp=1703929396~hmac=f202f9458316e9abf2495fb42517c3ae0cab37ebdb60ae4c5cfc730671622687"
						alt=""
					/>
					<button>
						<Link className="link" to="/products/1">
							Shoes
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Categories;
