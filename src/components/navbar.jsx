import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import lolo from './3.jpg';
const NavBar = props => {
    return (  
        
        <React.Fragment>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
           
            <div className="collapse navbar-collapse" id="navbarNav">
                <img src={lolo} className="rounded-circle" style={{width:40}}/>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact US</NavLink>
                </li>
               
                <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/menu">Menu</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">Admin</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                
                </ul>
                
            </div>
            <span className='badge bg-primary'>{props.productsCount}</span>
        </nav>
        
        </React.Fragment>
         );
}
 
export default NavBar;
// class NavBar  extends React.Component {

//     render() { 
//         return(
//             <React.Fragment>
//             <nav className="navbar navbar-dark bg-dark">
            
//                <a className="navbar-brand" href="#">Navbar</a>
//                 <span className='badge bg-primary'>{this.props.productsCount}</span>
//             </nav>
//             </React.Fragment>
//         );
//     }
// }
 
// export default NavBar ;