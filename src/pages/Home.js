import React from "react";
import Cart from "../components/Cart";
import ProductCard from "../components/ProductCard";
import GetProducts from '../hooks/GetProducts';

function Home() {
  const { products } = GetProducts()
  console.log(products);

  return (
    <div className="w3-row">
      <div className="w3-col l9 m9 s12">
        {
          products.length > 1 ?
            products.map(product => <ProductCard product={product} key={product.product_id} />)
            : <div>No Products</div>
        }
      </div>
      <div className="w3-col l3 m3 s12">
        <Cart />
      </div>
    </div>
  );
}

export default Home;