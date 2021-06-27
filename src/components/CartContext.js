import React, { useState, useContext } from 'react';
export const OrderContext = React.createContext();
export const OrderUpdateContext = React.createContext();

// Costume hook
export function useOrder() {
  return useContext(OrderContext);
}
export function useOrderUpdate() {
  return useContext(OrderUpdateContext);
}

export function CartContext({ children }) {
  const [order, setOrder] = useState([]);
  const insertOrder = (productId, title, counter, precio, thumb) => {
    const tmp = {
      id: productId,
      title: title,
      quantity: counter,
      price: precio,
      thumbnail: thumb,
    };
    const ord = order;
    ord.push(tmp);
    return setOrder(ord);
  };
  return (
    <OrderContext.Provider value={order}>
      <OrderUpdateContext.Provider value={insertOrder}>
        {children}
      </OrderUpdateContext.Provider>
    </OrderContext.Provider>
  );
}
