import React from "react";
import styled from "styled-components";
import CardProduct from "../components/CardProduct";

function CardProductList() {
  return (
    <ProductList>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </ProductList>
  );
}

export default CardProductList;

const ProductList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
