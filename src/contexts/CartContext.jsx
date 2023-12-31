import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const handleIncrease = (itemId) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId && item.stock > item.quantity) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleDecrease = (itemId) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
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
          const newQuantity = i.quantity + quantity;

          if (newQuantity <= item.stock) {
            SweetAlert(
              "success",
              "Se agregó: " + quantity + " " + item.title + " al carrito"
            );

            return { ...i, quantity: newQuantity };
          }

          SweetAlert(
            "error",
            "Sin Stock, no se puede agregar la cantidad especificada de " +
              item.title +
              " al carrito. Cantidad en carrito: " +i.quantity+ " Stock: " +item.stock
          );
        }
        return i;
      });
      setItems(updateItems);
    } else {
      if (quantity <= item.stock) {
        SweetAlert(
          "success",
          "Se agregó: " + quantity + " " + item.title + " al carrito"
        );

        setItems((prev) => {
          return [...prev, { ...item, quantity }];
        });
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        clear,
        onAdd,
        removeItem,
        handleIncrease,
        handleDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const SweetAlert = (icono, mensaje) => {
  Swal.fire({
    position: "top-end",
    icon: icono,
    text: mensaje,
    color: "#ffffff",
    background: "#191919",
    confirmButtonColor: "#000000",
  });
};
