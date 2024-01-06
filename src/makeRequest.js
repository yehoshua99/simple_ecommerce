import axios from "axios";

//ini dibuat agar saat kita melakukan request, tidak perulu menulis ulang dan berulang
export const makeRequest = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
	},
});
