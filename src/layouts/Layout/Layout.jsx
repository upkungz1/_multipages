import { Outlet } from "react-router"

import Header from "../header/Header"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/footer"

import "./Layout.css"

function Layout({tab, setTab, products, carts, setToken}) {
    return (
        <div>
            <Header />
            <Navbar tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout