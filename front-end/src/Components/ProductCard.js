import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class ProductCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product:""
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }
    componentDidMount(){
        axios.get("http://localhost:3000/api/products/"+this.props.match.params.id).then(res=>{
            console.log(res.data[0])
            this.setState({product:res.data[0]})
        })
    }
    deleteProduct(){
        axios.delete("http://localhost:3000/api/products/"+this.state.product.product_id).then(res=>{
            this.props.history.goBack();
       }).catch(err=>alert(err))
    }
    render(){
        //console.log(this.state.product)
        return(
            <div>
                <button onClick={()=>this.props.history.goBack()}>Go Back</button>
                <h2>{this.state.product.name}</h2>
                <img src={this.state.product.image_url} height="400px" alt={this.state.product.name}/>
                <h3>Price: ${this.state.product.price}</h3>
                <Link to={"/edit/"+this.state.product.product_id}><button>Edit</button></Link>
                <button onClick={this.deleteProduct}>Delete</button>
            </div>
        )
    }
}

export default ProductCard;