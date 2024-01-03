import React from 'react';

const Cart = ({ updateOrder, removeFromCart, lineItems, cart, products })=> {
  function sumCart () {
    let sum = 0;
    {
      lineItems.filter((lineItem) => {return lineItem.order_id === cart.id}).map(lineItem => {
          const product = products.find(product => product.id === lineItem.product_id) || {};
          return (
            sum += product.price * lineItem.quantity
          )
      })
    }
    return sum / 100;
  }
  
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {
          lineItems.filter((lineItem) => {return lineItem.order_id === cart.id}).map( lineItem => {
            const product = products.find(product => product.id === lineItem.product_id) || {};
            return (
              <li key={ lineItem.id }>
                { product.name }
                ({ lineItem.quantity })
                <button onClick={ ()=> removeFromCart(lineItem)}>Remove From Cart</button>
              </li>
            );
          })
        }
      </ul>
      {
        lineItems.filter((lineItem) => {return lineItem.order_id === cart.id }).length ? 
          <div>
            <span>Total Cost: ${sumCart().toFixed(2)} </span>
            <div>
              <button onClick={()=> {
              updateOrder({...cart, is_cart: false });
              }}>Create Order</button>
            </div>
        </div>
        : 
        <div> Add some items to your cart.</div>
      }
    </div>
  );
};

export default Cart;
