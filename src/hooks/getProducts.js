import axios from "axios";
import { useEffect, useState } from "react";
import { url } from '../config/url.js';

function GetProducts(props) {
	const [products, setProducts] = useState([]);
	
	useEffect(
		(props) => {
			const loadProducts = async (props) => {
				var response = null;
				if (props && props.p) {
					response = await axios.get(url.products + "/?product_id=" + props.p);
					console.log(response);
				}
				else response = await axios.get(url.products);

				if (response && response.status === 200) {
					setProducts(response.data);
				}
			}
			loadProducts(props);
		}, [props]
	)
	return { products }
}

export default GetProducts