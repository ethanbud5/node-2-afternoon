import React from "react";
import axios from "axios";

class EditCard extends React.Component{
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
        this.updateProduct = this.updateProduct.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:3000/api/products/"+this.props.match.params.id).then(res=>{
            console.log(res.data[0])
            this.setState({product:res.data[0]})
        })
    }
    updateProduct(){
        axios.put("http://localhost:3000/api/products/",this.state.product).then(res=>{
             this.props.history.goBack();
        }).catch(err=>alert(err))
    }
    changeHandler(e){
        let {name,value} = e.target;
        this.setState({product:{
            ...this.state.product,[name]:value
        }});
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Edit</h1>
                <div>
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
                </div>
                <button onClick={this.updateProduct}>Update</button>
                <button onClick={()=>this.props.history.goBack()}>Cancel</button>
            </div>
        )
    }
}

export default EditCard;