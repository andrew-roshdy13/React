// import React from "react";

// import { useParams } from "react-router-dom";


// const  ProductDetails = props => {
    
//     // return  <h1>Details</h1> 
//     return <h1>Details {props.match.params.id}</h1>
     
// };
 
// export default  ProductDetails;

// const ProductDetails = props => {
//     const { id }= useParams ();
//     //const product = props.products.filter(c => c.id === parseInt(props.match.params.id))[0];
//     return ( 
//         <div className="blog-details">
//             <h1>Details No. {id}</h1>
           
//             {/* <h1>{product.name}</h1>
//             <h1>Count in ShoppingCart : {product.count}</h1> */}
//         </div>
//      );
// }
 
// export default ProductDetails;


// import React, { Component } from 'react';
// //import ProductDetails from './productDetails';
//  class ProductDetails extends Component{
//      state={
//          id:null
//      }
//      componentDidMount(){
//          let id = this.props.match.params.id;
//          this.setState({
//              id: id
//          })
//      }
//      render(){
//          return(
//              <div className='container'>
//                  <h3>fret{this.state.id}</h3>
//              </div>
//          )
//      }
//  }
//  export default ProductDetails;

// const ProductDetails = props => {
//     const product = props.products.filter(
//         c => c.id === parseInt(props.match.params.id)
//     )[0];
//     return (
//         <React.Fragment>
//             <h1>Details No.{props.match.params.id}</h1>
//             <h2>{product.name}</h2>
//             <h2>Count in Shopping Cart : {product.count}</h2>
//         </React.Fragment>
//     );
// };
// export default ProductDetails;
import React, { Component } from 'react';

import qs from "query-string";

class ProductDetails extends Component{

    handleSave =() => {
        console.log("Save");
        ////Backend ==> save
        // this.props.history.push('/cart')
        this.props.history.replace('/cart')
    };
    render(){
        
            const res=qs.parse(this.props.location.search);
            console.log(res);
           // console.log(props.match.params.id);
           //console.log(props.location.search)
           const product = this.props.products.filter(
               c => c.id === parseInt(this.props.match.params.id)
           )[0];
        return (
            <React.Fragment>
                <h1>Details No. {this.props.match.params.id}</h1>
                <h2>Name: {product.name}</h2>
                <h2>Count in Cart : {product.count}</h2>
                <button onClick={this.handleSave} className="btn btn-primary btn-sm" type="submit">Save</button>
            </React.Fragment>
            );
        };
    }


export default ProductDetails;