import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Error404 } from "./components/Error404";

import { CartProvider } from "./contexts/CartContext"
import "./App.css";



function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Productos"} />} />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting={"Por categoría"} />}
        />
        <Route
          path="/items/:id"
          element={<div>Items</div>}
        />
        <Route
        path="/item/:id"
        element={<ItemDetailContainer />}
        />
        <Route
        path="*"
        element={<Error404/>}
        />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
