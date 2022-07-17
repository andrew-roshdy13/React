import React,{Component} from 'react';
import Product from './product';
class ShoppingCart extends Component {
    constructor(props){
        super(props);
        console.log("Shopping Card ==> Constructor");
    }
    componentDidMount(){
        console.log("Shopping Card ==> componentDidMount");
    };
    componentDidUpdate(prevProps,prevState){
        console.log("Shopping Card ==> componentDidUpdate");
        console.log(prevProps);
    }
    // state ={
    //     products :[
    //         {id:1, name:'Burger', count:2},
    //         {id:2, name:'Bief', count:0},
    //         {id:3, name:'Crispy', count:1},
    //     ]
    // };
    // handleDelete =product=>{
    //     //console.log(product);
    //     //clone
    //     //edit
    //     const products=this.state.products.filter(p => p.id !== product.id);
    //     //set state
    //     this.setState({products});
    // };
    // handleReset = () =>{
    //     // console.log('Reset')
    //     //clone edit setstate
    //     let products = [...this.state.products];
    //     products =products.map(p => {
    //         p.count=0;
    //         return p;
    //     });
    //     this.setState({products});
    // };
    // clickHandler= product => {
    //     //console.log(product);
    //     const products =[...this.state.products];
    //     const index= products.indexOf(product);
    //     products[index]={...products[index]};
    //     products[index].count++;
    //     this.setState({products})
       
    // };
    // reduceCount =product=>{
    //     const products =[...this.state.products];
    //     const index =products.indexOf(product);
    //     products[index]={...products[index]};
    //     products[index].count--;
    //     this.setState({products})
    // }
    render() { 
        console.log("Shopping Cart ==> Render");
        const {products,onDelete,onReset,onReduce,onIncrement}=this.props;
        return (
        <React.Fragment>
            <h1>Shopping Cart</h1>
            <button onClick={onReset}
             className='btn btn-secondary btn-sm m-2'>Reset</button>
            <hr/>
            {products.map(product =>(
                <Product key={product.id} product={product} onDelete={onDelete} onIncrement={onIncrement} onReduce={onReduce} >
                    {/* <h4>{product.id}</h4> */}
                    
                    </Product>
            ))}
        </React.Fragment>
        );
    }
}
 
export default ShoppingCart;