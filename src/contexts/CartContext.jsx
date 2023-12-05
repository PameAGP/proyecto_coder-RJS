import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);


  const handleIncrease = (itemId) => {
    setItems((prevItems) => {
        return prevItems.map((item) => {
            if (item.id === itemId) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });
    });
};

const handleDecrease = (itemId) => {
    setItems((prevItems) => {
        return prevItems.map((item) => {
            if (item.id === itemId && item.quantity > 1) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        });
    });
};

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const onAdd = (item, quantity) => {
    const existe = items.some((i) => i.id === item.id);
    if (existe) {
      const updateItems = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + quantity,
          };
        } else {
          return i;
        }
      });
      setItems(updateItems);
    } else {
      setItems((prev) => {
        return [...prev, { ...item, quantity }];
      });
    }
    console.log(items);
  };

  return (
    <CartContext.Provider value={{ items, clear, onAdd, removeItem, handleIncrease, handleDecrease}}>
      {children}
    </CartContext.Provider>
  );
};
