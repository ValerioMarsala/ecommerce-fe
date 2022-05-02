import React from "react";
import styled from "styled-components";
import Cart from "../components/Cart";
import CardProductList from "./CardProductList";
import useProducts from '../hooks/useProducts';

function Home() {
  return (
    <Wrapper>
      <CardProductList />
      <Cart />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
