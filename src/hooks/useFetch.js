import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

//agar bisa digunakan disetiap halaman tanpa menulis ulang, maka dibuat folder tersendiri
const useFetch = (url) => {
	const [data, setData] = useState(null); //data nya awalnya kosong
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await makeRequest.get(
					url //url ini akan dikirik ke variable useFetch
				);
				setData(res.data.data); //hasil dari res data nya akan disimpan ke setData kemudian disimpan ke data (useState)
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};
		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
