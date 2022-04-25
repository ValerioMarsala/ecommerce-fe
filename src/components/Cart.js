import React from "react";
import styled from "styled-components";
function Cart() {
  return (
    <Wrapper>
      <Header>
        <Title>Cart</Title>
        <DeselectAll>Deselect all</DeselectAll>
      </Header>
      <Body>
        <ProductName>Product Name</ProductName>
        <Quantity>Q.ty: 1</Quantity>
        <RemoveBtn>Remove</RemoveBtn>
        <Price>100.00€</Price>
      </Body>
      <Body>
        <ProductName>Product Name</ProductName>
        <Quantity>Q.ty: 1</Quantity>
        <RemoveBtn>Remove</RemoveBtn>
        <Price>100.00€</Price>
      </Body>
      <Footer>
        <Total>Total: 100.00€</Total>
      </Footer>
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`
  border: 1px solid red;
  width: 25%;
  padding: 5px;
  font-weight: 600;
  max-height: calc(100vh-70px);
`;

const Header = styled.div`
  font-size: 30px;
  border-bottom: 1px solid black;
  padding: 10px;
`;

const Title = styled.div``;

const DeselectAll = styled.button``;

const Body = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
`;

const ProductName = styled.div`
  margin-bottom: 4px;
`;

const Quantity = styled.button`
  margin: 4px;
`;

const RemoveBtn = styled.button``;

const Price = styled.div``;

const Footer = styled.div`
  padding: 10px;
`;

const Total = styled.div``;
