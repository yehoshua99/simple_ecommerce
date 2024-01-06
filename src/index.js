import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; //agar tidak ter rest value2 yang ada dipage saat page nya di refresh

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={"loading"} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
{
	/*
Provider adalah komponen dari React Redux yang digunakan untuk menyediakan 
store Redux ke seluruh aplikasi React. Ini diterapkan sebagai komponen 
wrapper di sekitar komponen induk (biasanya App) dalam aplikasi. 
Provider mengambil prop store yang merujuk ke objek Redux store. 
Dengan menggunakan Provider, semua komponen di dalamnya dapat mengakses 
store tanpa perlu meneruskan store secara langsung sebagai prop. 
Ini membuat store tersedia untuk seluruh pohon komponen.

Redux store adalah objek JavaScript yang menyimpan seluruh state aplikasi. 
Ini memberikan cara terpusat untuk mengelola state dan menyediakan metode 
untuk memperbarui, mengakses, dan berlangganan perubahan state. 
Store Redux biasanya dibuat dengan fungsi createStore dari Redux. 
State dalam Redux disimpan sebagai objek tunggal dan hanya dapat diubah 
dengan menjalankan "actions" yang menggambarkan perubahan apa yang harus 
dilakukan pada state. Store memiliki metode untuk mengekspor state saat 
ini dan untuk mendaftarkan fungsi-fungsi yang akan dipanggil setiap kali
state berubah.


*/
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
