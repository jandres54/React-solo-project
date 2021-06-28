import React from 'react'
import CartIcon from "./svg/cart-plus-solid.svg"
import {useSelector} from 'react-redux'
import Menu from './svg/bars-solid.svg';
import Close from './svg/window-close-regular.svg';
import {BrowserRouter as Route,Switch,Link} from "react-router-dom" 
import About from"./About"
import Home from "./Home"
import Cart from "./Cart"
import Products from './Products';
import "./css/Navbar.css"
import ErrorPage from './ErrorPage';


export default function Navbar() {
    const addedToCart = useSelector((state) => state.cartReducer);
    return (
        <div>
            <header>
                <div className="menu">
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">Drip Xpress</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        {/* <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li> */}
                        <li className="close">
                        <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{addedToCart.length}</span>
                        <Link to="cart">
                        <img src={CartIcon} alt="" width="20"/>
                        </Link>
                        
                    </div>
                </nav>
                </header>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route  path="/cart">
                        <Cart/>
                    </Route>
                    <Route  path="/about">
                        <About/>
                    </Route>
                    <Route  path="/product">
                        <Products/>
                    </Route>
                    <Route  path="*">
                        <ErrorPage/>
                    </Route>
              </Switch>
        </div>
    )
}
