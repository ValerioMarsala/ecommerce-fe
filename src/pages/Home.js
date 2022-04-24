import React from "react";
import styled from "styled-components";
import CardProductList from "./CardProductList";

function Home() {
  return (
    <Wrapper>
      <CardProductList />
      <Cart>Cart</Cart>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
`;

const Cart = styled.div`
  border: 1px solid red;
  width: 25%;
  padding: 5px;
  font-weight: 600;
`;
