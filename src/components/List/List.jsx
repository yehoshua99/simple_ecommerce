import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
	{
		/* Rest API FIltering
	disini sekaligus filter di url nya, yaitu 

	/products?populate=*&[filters][categories][id]=${catId} = utk memfilter gambar produk apa saja yang akan masuk ketika user masuk ke category tertentu,
	 misal kategori perempuan, maka yang tampil produk perempuan.

	 ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}` = utk memfilter berdasarkan sub kategori pada kategori tertentu, misal di kategory 
	 women terdapat sub kategori, hat, tshirt

	 &[filter][price][lte]=${maxPrice} = untuk memfilter range harga produk
	
	 &sort=price:${sort} = untuk filter harga tertinggi dan terendah
	 menambahkan || 'desc' untuk menetapkan nilai default 'desc' jika sort adalah null
 */
	}
	//rest API Filtering
	const { data, loading, error } = useFetch(
		`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
			(item) => `&[filters][sub_categories][id][$eq]=${item}`
		)}&[filter][price][lte]=${maxPrice}&sort=price:${sort || "desc"}`
	);

	return (
		<div className="list">
			{/*data disimpan dengan variable baru yaitu item
            kmudian item yang sudah mengandung data disimpan lagi pada variable item pada card */}
			{loading
				? "loading"
				: data?.map((item) => <Card item={item} key={item.id} />)}
		</div>
	);
};

export default List;
