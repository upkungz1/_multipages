import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";
import Home from "./pages/Home/Home";
import Todo from "./pages/ToDo/ToDo";
import Calculator from "./pages/Calculator/Calculator";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";
import Login from "./pages/Login/Login";
import Components from "./pages/Component/Component";
import Animation from "./pages/Animation/Animation";

import { fetchProducts } from "./data/products";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

const intTab = "todo";
function App() {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(intTab);
  }, []);

  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  if (token === '') {
  return (<Login setToken={setToken} setRole={setRole} />)
}else{
  
  return (
    <div className="app-container">
      <HashRouter>
        <Routes>
          <Route
            element={
              <Layout
                tab={tab}
                setTab={setTab}
                products={products}
                carts={carts}
                setToken={setToken}
              />
            }
          >
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/todo"} element={<Todo />} />
            <Route path={"/animation"} element={<Animation />} />
            <Route path={"/Calculator"} element={<Calculator />} />
            <Route path={"/components"} element={<Components />} />
            <Route
              path={"/products"}
              element={<Products products={products} carts={carts} setCarts={setCarts} />}
            />
            <Route path={"/carts"} element={<Carts carts={carts} setCarts={setCarts} />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
  }
}

export default App;
