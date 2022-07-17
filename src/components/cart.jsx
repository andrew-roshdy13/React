// import React, { Component } from 'react';


// class Menu extends Component {
//     render() {
//         return (
//         <React.Fragment>
//             <div className='container'>
//         <table className="table table-dark">
//             <thead>
//                 <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Price</th>
//                     <th scope="col">Status</th>
                    
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <th scope="row">Burger</th>
//                     <td>30</td>
//                     <td><i className="fas fa-cart-plus"></i></td>
                    
//                 </tr>
//                 <tr>
//                     <th scope="row">Fries</th>
//                     <td>20</td>
//                     <td><i className="fas fa-cart-plus"></i></td>
                    
//                 </tr>
//                 <tr>
//                     <th scope="row">Cola</th>
//                     <td>10</td>
//                     <td><i className="fas fa-cart-plus"></i></td>
                    
//                 </tr>
//             </tbody>
//         </table>
//         </div>
//         </React.Fragment>
//         )
//     }
// }
// export default Menu;

import React from "react";

const Cart = props => {
    const style = !props.product.isInCart
    ? {color: "#80808080", cursor :"pointer"}
    : {cursor:"pointer"};

return (
    <i 
    style={style}
    onClick={()=>props.onClick(props.product)}
    className="fas fa-cart-plus"></i>
    );
};
export default Cart;