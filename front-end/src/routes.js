import React from "react";
import {Route,Switch} from "react-router-dom";
import MainList from "./Components/MainList";
import ProductCard from "./Components/ProductCard";
import AddProduct from "./Components/AddProduct";
import EditCard from "./Components/EditProduct"

export default (
    <Switch>
        <Route exact path="/" component={MainList}/>
        <Route path="/product/:id" component={ProductCard}/>
        <Route path="/add" component={AddProduct}/>
        <Route path="/edit/:id" component={EditCard}/>
    </Switch>
)