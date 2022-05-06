import React from 'react'

function ProductCard(props) {
  const p = props.product;
  
  return (
    <div className="w3-col l3 m4 s6">
      <div className="w3-card w3-center w3-margin" style={{ height: 300 }}>
        <div style={{ height: "20%", display:"flex"  }}>
          <h3 style={{ margin:"auto" }}>{p.title}</h3>
        </div>

        <div style={{ height: "50%", display:"flex", padding: 8}}>
          <img
            src={p.image}
            className="w3-round"
            style={{ maxWidth: "100%", maxHeight: "100%", height: "auto", width: "auto", margin:"auto"}}
            alt={p.title}
          />
        </div>
        <div style={{ height: "10%", display:"flex"  }}>
          <p style={{margin:"auto"}}>Prezzo: {p.price} <i className="fa fa-euro" ></i></p>
        </div>
        <div style={{ height: "20%", display:"flex"  }}>
          <a href={"/?p=" + p.id} className="w3-button w3-orange" style={{margin:"auto"}}>Visualizza</a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

/*
active: 1
create_date: "2022-04-13T10:50:17.000+00:00"
default_imag: null
description: null
discount_id: null
image: "https://www.ikea.com/it/it/images/products/frakta-borsa-portatutto-grande-blu__0711231_pe728076_s5.jpg"
price: 10
product_id: 2
stock: 1
store_id: 1
title: "Borsa"
vat_id: 1
*/