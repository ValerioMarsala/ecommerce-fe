import React from "react";
import styled from "styled-components";

function CardProduct() {
  return (
    <CProductContainer>
      <CardImage src="/images/shirt.jpg" />
      <CardBody>
        <CardTitle>Maglietta splendida</CardTitle>
        <CardText>
          Cotone ipoallergenico e super resistente allo sporco
        </CardText>
        <CardPrice>100.30€</CardPrice>
        <CardButton>Add to cart</CardButton>
      </CardBody>
    </CProductContainer>
  );
}

export default CardProduct;

const CProductContainer = styled.div`
  max-width: 250px;
  cursor: pointer;
  overflow: hidden;
  margin: 15px;
  border: 2px solid black;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardBody = styled.div`
  padding: 5px;
`;

const CardTitle = styled.div`
  padding: 5px;
`;

const CardText = styled.div`
  padding: 5px;
`;

const CardPrice = styled.div`
  padding: 5px;
`;

const CardButton = styled.button`
  margin: 5px;
`;
