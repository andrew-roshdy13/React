import React,{Component} from 'react';
import NavBar from './navbar';
import {Route,Switch,Redirect} from "react-router-dom";
import ShoppingCart from './shoppingCard';
import About from './about';
import Contact from './contact';
import Home from './home';
import NotFound from './notFound';


import ProductDetails from './productDetails';
//import { Routes } from 'react-router-dom';
class App extends Component {
    state ={
        products :[
            {id:1, name:'Burger', count:2},
            {id:2, name:'Bief', count:0},
            {id:3, name:'Crispy', count:1},
        ]
    };
    handleDelete =product=>{
        //console.log(product);
        //clone
        //edit
        const products=this.state.products.filter(p => p.id !== product.id);
        //set state
        this.setState({products});
    };
    handleReset = () =>{
        // console.log('Reset')
        //clone edit setstate
        let products = [...this.state.products];
        products =products.map(p => {
            p.count=0;
            return p;
        });
        this.setState({products});
    };
    clickHandler= product => {
        //console.log(product);
        const products =[...this.state.products];
        const index= products.indexOf(product);
        products[index]={...products[index]};
        products[index].count++;
        this.setState({products})
       
    };
    reduceCount =product=>{
        const products =[...this.state.products];
        const index =products.indexOf(product);
        products[index]={...products[index]};
        products[index].count--;
        this.setState({products})
    };
    render() { 
        return (
            <React.Fragment>
                <NavBar productsCount={this.state.products.filter(p =>p.count>0).length} />
               
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
                            render={props =>(
                            <ProductDetails products={this.state.products} {...props} />
                            )}
                            />
                        
                        <Route path="/about" component={About} />
                        <Route path="/notfound" component={NotFound} />
                        <Route path="/contact" component={Contact}/>
                        
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
                        <Route
                            path="/cart"
                            render={(props) => (
                                <ShoppingCart
                                products={this.state.products}
                                onIncrement={this.clickHandler}
                                onDelete={this.handleDelete}
                                onReset={this.handleReset}
                                onReduce={this.reduceCount}
                                {...props}
                                />
                            )}
                            />
                            <Route path="/home" exact component={Home} />
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
 
export default App;