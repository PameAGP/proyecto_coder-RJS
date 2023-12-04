import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([]);

    const clear = () => setItems ([]);

    const onAdd = (item) => {
        console.log(item);
    }

    return <CartContext.Provider value={{items, clear, onAdd}}>
        {children}
    </CartContext.Provider>
}