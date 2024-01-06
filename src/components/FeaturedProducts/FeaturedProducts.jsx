import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch.js";

{
	/* Props type*/
}
const FeaturedProducts = ({ type }) => {
	// const [data, setData] = useState([]); // diberi array kosong, karena blm menerima product apapun

	const { data, loading, error } = useFetch(
		`/products?populate=*&[filters][type][$eq]=${type}`
	);

	return (
		<div className="FeaturedProducts">
			<div className="top">
				<h1>{type} Products</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis
					officiis, dolorum tempore aliquid praesentium reprehenderit est
					corrupti nesciunt perspiciatis laudantium deserunt. Totam obcaecati
					explicabo quas eveniet nulla ullam harum?
				</p>
			</div>
			<div className="bottom">
				{/* 
                1. data diambil data diatas yang ada pada useStae, kemudian di map untk mengiterasi  lalu disimpan di va
                variable baru, yaitu item 
                2. item = {item}, item mendapatkan data dari variable item yang telah menyimpan "Data"
                3. Card sekaligus mengirim props {item} ke Card.jsx dan akan diterima di Card.jsx
                */}
				{error
					? "Something went wrong!"
					: loading
					? "loading"
					: data?.map((item) => <Card item={item} key={item.id} />)}
			</div>
		</div>
	);
};

export default FeaturedProducts;
