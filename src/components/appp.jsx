// import React, { Component } from 'react';

// class Appp extends Component{
//     state={
//         products : [
//             {id: 1, name: "Burger", price: 30, count: 0, isInCart: false},
//             {id: 2, name: "Fries", price: 20, count: 4, isInCart: false},
//             {id: 3, name: "Cola", price: 10, count: 2, isInCart: false},
//         ]
//     };
// }
import React, { Component } from 'react';
import NavBar from './navbar';
import { Route, Switch, Redirect } from "react-router-dom";
import ShoppingCart from './shoppingCard';
import About from './about';
import Contact from './contact';
import Home from './home';
import NotFound from './notFound';
import Login from './login';
import Admin from './admin';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import ProductDetails from './productDetails';
import Menu from './menu';
import ProductForm from './ProductForm';
//import { Routes } from 'react-router-dom';
class Appp extends Component {
    state = {
        products: [],
    };

    // useEffect(() => {
    //     const getData = async() => {
    //         const data =await axios.get("http://localhost:3000/products/");
    //     }
    // })



    async componentDidMount() {
        //call backend server
        const { data } = await axios.get("https://iti-react-cource.herokuapp.com/products/");
        // set state

        this.setState({ products: data });
        //   console.log(res);
        // const promise  = fetch('https://jsonplaceholder.typicode.com/posts');
        // //console.log(promise);
        // // to access response inside every promise
        // const res= promise.then(res => res.json());// then when resolved
        // //console.log(res);
        // res.then(data => console.log(data));
        ///pending ===>
        // if success ..... resolved
        //not success ..... rejected 
    };

    handleDelete = async product => {

        const oldProduct =[...this.state.products];

        //call backend
        //state change
        
        //console.log(product);
        //clone
        //edit
        const products = this.state.products.filter(p => p.id !== product.id);
        //set state
        this.setState({ products });
        //call backend
        try{
            await axios.delete("https://iti-react-cource.herokuapp.com/products/" + product.id);

        }catch (ex) {
            toast.error("Can't delete")
            this.setState({ products:oldProduct });
        }
    };
    handleReset = () => {
        // console.log('Reset')
        //clone edit setstate
        let products = [...this.state.products];
        products = products.map(p => {
            p.count = 0;
            return p;
        });
        this.setState({ products });
    };
    clickHandler = product => {
        //console.log(product);
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        products[index].count++;
        this.setState({ products })

    };
    reduceCount = product => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        products[index].count--;
        this.setState({ products })
    };

    handleInCartChange = (product) => {
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        //Edit
        products[index].isInCart = !products[index].isInCart;
        //Set State
        this.setState({ products });
    };
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar productsCount={this.state.products.filter(p => p.count > 0).length} />

                <main className='container'>
                    <Switch>
                        {/* <Route path='/about' component={About} /> */}
                        {/* <Route
                         path='/cart' 
                         render={props =>( 
                         <ShoppingCart
                            products={this.state.products}
                            onIncrement={this.clickHandler}
                            onReduce={this.reduceCount}
                            onDelete={this.handleDelete}
                            onReset={this.handleReset} 
                        />
                    )}
                
                /> */}


                        <Route
                            path='/products/:id/:name?'
                            render={props => (
                                <ProductDetails products={this.state.products} {...props} />
                            )}
                        />

                        <Route path="/about" component={About} />
                        {/* <Route
                            path="/admin"
                            render={props => (
                                <Admin
                                    {...props}
                                    products={this.state.products}
                                    onDelete={this.handleDelete}
                                    onEdite={this.handleEdit}

                                />
                            )}
                        /> */}
                        <Route
                            path="/admin"
                            render={(props) => (
                                <Admin
                                    {...props}
                                    products={this.state.products}
                                    onDelete={this.handleDelete}
                                />
                            )}
                        />
                        {/* <Route path="/productform/:id" component={ProductForm} /> */}
                        <Route
                            path="/productform/:id"
                            render={(props) => (
                                <ProductForm {...props} products={this.state.products} />
                            )}
                        />
                        <Route path="/notfound" component={NotFound} />
                        <Route
                            path="/menu"
                            render={(props) => (
                                <Menu
                                    {...props}
                                    products={this.state.products}
                                    onClick={this.handleInCartChange}
                                />
                            )}
                        />
                        <Route path="/contact" component={Contact} />

                        {/* <Route path="/cart" component={ShoppingCart 
                            products={this.state.products}
                    onIncrement={this.clickHandler}
                    onReduce={this.reduceCount}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset}
                        }/> */}
                        {/* <Route path='/products/:id'
                        render={props =>(
                            <ProductDetails products={this.state.products} {...props}/>
                        )}
                        /> */}
                        {/* <Route
                            path="/cart"
                            render={(props) => (
                                <ShoppingCart
                                    products={this.state.products}
                                    onIncrement={this.clickHandler}
                                    onDelete={this.handleInCartChange}
                                    onReset={this.handleReset}
                                    onReduce={this.reduceCount}
                                    {...props}
                                />
                            )}
                        /> */}
                        <Route
                            path="/cart"
                            render={(props) => (
                                <ShoppingCart
                                    products={this.state.products.filter((p) => p.isInCart)}
                                    onIncrement={this.IncrementHandler}
                                    onDelete={this.handleInCartChange}
                                    onReset={this.handleReset}
                                    {...props}
                                />
                            )}
                        />
                        <Route path="/home" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Redirect from='/' to='/home' />
                        <Redirect to="/notfound" />
                    </Switch>


                    {/*////////////*/}
                    {/* <ShoppingCart 
                        products={this.state.products}
                    onIncrement={this.clickHandler}
                    onReduce={this.reduceCount}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset}
                    /> */}
                </main>

            </React.Fragment>
        );
    }
}

export default Appp;