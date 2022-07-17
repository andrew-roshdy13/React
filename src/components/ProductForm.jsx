import React, { Component } from 'react';
import axios from 'axios';

class ProductForm extends Component {
    state = {id:"",name: "",price: ""};

    async componentDidMount(){
        const id =this.props.match.params.id;
        if (id !== "new"){
            const { data } =await axios.get("https://iti-react-cource.herokuapp.com/products/" + id);
            //clone
            const state ={...this.state};
            //edit
            state.name=data.name;
            state.price=data.price;
            state.id=data.id;
            //set state
            this.setState(state);
        }
        console.log(id);
    }

    handleSubmit= async e => {
        e.preventDefault();
        //Add
        if(this.props.match.params.id ==="new"){
        //call backend
        const obj ={ ...this.state, count: 0, isInCart: false };
        await axios.post("https://iti-react-cource.herokuapp.com/products/", obj);
        }else {
            //edit
            const obj = {...this.state,count :0,isInCart:false};
            //delete id
            delete obj.id;
            await axios.put(
                "https://iti-react-cource.herokuapp.com/products/" + this.state.id,
                obj);        }
        
       this.props.history.replace("/admin");
        console.log("submit");
    };
    handleChange = e =>{
        //clone
        let state ={...this.state};
        
        //edit
        state[e.currentTarget.name]=e.currentTarget.value;
        //setstate
        this.setState(state);
    }
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.match.params.id ==="new" ? "Add Product" : "Edit Product"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label for="exampleInputName">Name</label>
                        <input onChange={this.handleChange} value={this.state.name}  name='name' type="text" className="form-control" id="exampleInputName"  placeholder="Enter Name" />
                        <small id="emailHelp" className="form-text text-muted">Add Item in Menu.</small>
                        
                    </div>
                    <div className='form-group'>
                        <label for="exampleInputPrice">Price</label>
                        <input onChange={this.handleChange} value={this.state.price} name='price'  type="number" className='form-control' id='exampleInputPrice' placeholder='Enter Price'/>
                        <small  className="form-text text-muted">Add Price to Item.</small>
                    </div>
                    <div className='button-group'>
                        <button type='submit' className='btn btn-primary'>

                        {this.props.match.params.id ==="new" ? "Add" : "Edit"}
                        </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default ProductForm;