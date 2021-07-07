import React, { useState, useContext } from 'react';
export const OrderContext = React.createContext();
export const OrderUpdateContext = React.createContext();
export const OrderChangeContext = React.createContext();
export const OrderDeleteContext = React.createContext();

// Costume hook
export function useOrder() {
  return useContext(OrderContext);
}
export function useOrderUpdate() {
  return useContext(OrderUpdateContext);
}

export function useOrderChange() {
  return useContext(OrderChangeContext);
}

export function useOrderDelete() {
  return useContext(OrderDeleteContext);
}
export function CartContext({ children }) {
  const [order, setOrder] = useState([]);
  const insertOrder = (productId, title, counter, precio, thumb, category) => {
    const tmp = {
      id: productId,
      title: title,
      quantity: counter,
      price: precio,
      thumb: thumb,
      category: category,
    };
    const ord = [...order];
    ord.push(tmp);
    return setOrder(ord);
  };
  const changeQuantity = (quantity, index) => {
    if (quantity >= 0) {
      let ord = [...order];
      ord[index].quantity = quantity;
      return setOrder(ord);
    }
  };

  const deleteOrderItem = (i) => {
    let tmp = [...order];
    tmp.splice(i, 1);
    console.log(tmp);
    setOrder(tmp);
  };

  const deleteOrder = () => {
    setOrder([]);
  };

  return (
    <OrderContext.Provider value={order}>
      <OrderUpdateContext.Provider value={insertOrder}>
        <OrderChangeContext.Provider value={changeQuantity}>
          <OrderDeleteContext.Provider value={{ deleteOrderItem, deleteOrder }}>
            {children}
          </OrderDeleteContext.Provider>
        </OrderChangeContext.Provider>
      </OrderUpdateContext.Provider>
    </OrderContext.Provider>
  );
}
