import React from 'react'
import CartIcon from "./svg/cart-plus-solid.svg"
import Menu from './svg/bars-solid.svg';
import Close from './svg/window-close-regular.svg';
import {BrowserRouter as Route,Switch,Link,Redirect} from "react-router-dom" 
import About from"./About"
import Login from "./Login"
import Home from "./Home"
import Cart from "./Cart"
import Products from './Products';
import "./css/Navbar.css"


export default function Navbar() {
    return (
        <div>
            <header>
                <div className="menu">
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">Nike</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li className="close">
                        <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>0</span>
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
                    <Route  path="/login">
                        <Login/>
                    </Route>
                    <Route  path="*">
                        <Redirect to = "/"/>
                    </Route>
              </Switch>
        </div>
    )
}
