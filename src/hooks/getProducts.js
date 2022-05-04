import axios from "axios";
import { useEffect, useState } from "react";
import { url } from '../config/url.js';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [filter] = useState(""); 
	
	useEffect(
		() => {
			const loadProducts = async () => {
				const response = await axios.get(url.products);	
				if(response.status === 200){
				  setProducts(response.data);
				}  
			}		
			loadProducts();
		}, []
	)
	return {products}
}

export default useProducts