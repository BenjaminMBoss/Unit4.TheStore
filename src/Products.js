import React from 'react';

const Products = ({ products, cartItems, createLineItem, updateLineItem })=> {
  products.sort(function(a,b) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  })
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {
          products.map( product => {
            const cartItem = cartItems.find(lineItem => lineItem.product_id === product.id);
            return (
              <li key={ product.id }>
                { product.name }
                <span> { `$${(product.price / 100.).toFixed(2)}`}</span>
                <span> {
                  cartItem ? <button onClick={ ()=> updateLineItem(cartItem)}>Add Another</button>: <button onClick={ ()=> createLineItem(product)}>Add</button>
                } </span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Products;
