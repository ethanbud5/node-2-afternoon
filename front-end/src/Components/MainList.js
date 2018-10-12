import React from "react";
import axios from "axios";
// import ProductCard from "./ProductCard";
import {Link} from "react-router-dom"

class MainList extends React.Component{
    
    constructor(){
        super()
        this.state = {
          products:[]
        }
      }
    
      componentDidMount(){
        axios.get("http://localhost:3000/api/products").then(res=>{
          this.setState({products:res.data});
        })
      }

    render(){
        let listProducts = this.state.products.map(product=>(
            <div key={product.product_id}>
                <Link to={"/product/"+product.product_id}>
                <div className="product_card">
                    <img src={product.image_url} height="200px" alt={product.name}/>
                    <h3>{product.name}</h3>
                </div>
                </Link>
            </div>
        ))
        return(
            <div>
                <h1>Items:</h1>
                <div className="card_container">
                    {listProducts}
                </div>
            </div>
        )
    }
}

export default MainList;