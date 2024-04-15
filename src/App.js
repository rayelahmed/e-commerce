import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Inventory from "./Pages/Inventory/Inventory";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import NotFound from "./Shared/NotFoundPage/NotFound";
import ManageInventory from "./Pages/ManageInventories/ManageInventory";
import MyInventory from "./Pages/MyItems/MyInventory";
import AddInventory from "./Pages/AddInventories/AddInventory";
import Footer from "./Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem("cart"));
  //   if (storedCart) {
  //     setCart(storedCart);
  //   }
  // }, []);

  const addToCart = (product) => {
    console.log(product);
    if (cart.length >= 10) {
      return;
    }
    if (!cart.some((item) => item.id === product.id)) {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    navigate("/cart");
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact={true}
          path="/"
          element={<Home addToCart={addToCart}></Home>}
        ></Route>
        <Route exact={true} path="*" element={<NotFound></NotFound>}></Route>

        <Route
          path="product/:productId"
          element={
            <RequireAuth>
              <ProductDetails products={products}></ProductDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart cart={cart} setCart={setCart}></Cart>
            </RequireAuth>
          }
        ></Route>
        <Route
          exact={true}
          path="/inventory"
          element={<Inventory></Inventory>}
        ></Route>

        <Route
          path="/addinventory"
          element={
            <RequireAuth>
              <AddInventory></AddInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myinventory"
          element={
            <RequireAuth>
              <MyInventory></MyInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>

        <Route exact={true} path="/blog" element={<Blog></Blog>}></Route>

        <Route exact={true} path="/login" element={<Login></Login>}></Route>
        <Route exact={true} path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
