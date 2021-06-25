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
  const [order, setOrder] = useState();
  const insertOrder = () => {
    let data = [{ id: 4, title: 'Canario', quantity: 3, price: 345 }];
    console.log(data);
    return setOrder(data);
  };
  return (
    <OrderContext.Provider value={order}>
      <OrderUpdateContext.Provider value={insertOrder}>
        {children}
      </OrderUpdateContext.Provider>
    </OrderContext.Provider>
  );
}
