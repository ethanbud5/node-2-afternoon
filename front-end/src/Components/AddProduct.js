import React from "react";
import axios from "axios";

class AddProduct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product:{
                name:"",
                description:"",
                price:"",
                image_url:""
            }
        }
        this.addProduct = this.addProduct.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    addProduct(){
        axios.post("http://localhost:3000/api/products/",this.state.product).then(res=>{
            this.props.history.push("/");
       }).catch(err=>alert(err))
    }
    changeHandler(e){
        let {name,value} = e.target;
        this.setState({product:{
            ...this.state.product,[name]:value
        }});
    }
    render(){
        return(
            <div>
                <h1>Create Product</h1>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={this.state.product.name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Description: </label>
                        <input type="text" name="description" value={this.state.product.description} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <span>Price: </span>
                        <input type="number" name="price" value={this.state.product.price} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <span>Image URL: </span>
                        <input type="text" name="image_url" value={this.state.product.image_url} onChange={this.changeHandler}/>
                    </div>
                <button onClick={this.addProduct}>Create</button>
            </div>
        )
    }
}

export default AddProduct;