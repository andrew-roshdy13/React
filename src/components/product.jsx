// state بيحتفظ بالداتا
// render ده الشكل اللى بيطلعلى
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class Product extends Component {
    // state = {
    //     name:this.props.product.name,
    //     count :this.props.product.count
    //     // imgURL: "logo192.png",
    //     // names : ['andrew','roshdy','louka']
    // };
    /////another way insted under rendre
    getClasses(){
        return this.props.product.count===0 
        ? "m-2  alert alert-success"
        :"m-2  alert alert-danger";
    }
    //1. way
    // renderNames(){
    //     return this.state.names.length===0 ? <h2>No Names</h2>: 
    //     <ul>
    //     {this.state.names.map(name =>
    //       <li key={name}>{name}</li>)}
        
    //     </ul>
    // }
    // constructor (){
    //     super();
    //  1. rebind this
    //     this.clickHandler = this.clickHandler.bind(this);
    // }
    //2.rebind this
    // clickHandler= num => {
    //     console.log('this');
    //     //this.setState({count:this.props.product.count + num})
       
    // };
    //1.
    // increment =()=>{
    //     this.clickHandler(2);
    // }
    componentWillUnmount(){
        console.log('Product ==> UNMOUNT');
    }
    render() { 
        console.log("Product ==> Render");
        //console.log(this.props);
        //// prop اى معلومه ممبعوته للدااتا من بره
        /////another way
        // let classes;
        // if (this.state.count===0){
        //     classes = "m-2  alert alert-success";
        // }else{
        //     classes ="m-2  alert alert-danger"
        // }
///////////////////////////another way
        // const classes = this.state.count===0 
        // ? "m-2  alert alert-success"
        // :"m-2  alert alert-danger"
        
        return(
            <div className="row">
            {/* {this.renderNames()} */}
            {/* {this.props.children} */}
                <div className='col-2'>
                    <span>
                     
                        <Link to={`/products/${this.props.product.id}`}>
                            {this.props.product.name}
                        </Link>
                    
                    </span>
                </div>
                <div className='col'>
                    <span className={this.getClasses()}>{this.props.product.count}</span>
            
                    <button onClick={()=>this.props.onIncrement(this.props.product)} className="btn btn-primary btn-sm" >+</button>	&nbsp;
                    <button onClick={() => this.props.onReduce(this.props.product)} className="btn btn-primary btn-sm" >-</button>	&nbsp;
                    <span style={{cursor: 'pointer'}} onClick={()=> this.props.onDelete(this.props.product)}>
                        <i className="fas fa-trash"> </i>
                    </span>
                     <br/>
                     <hr></hr>
                </div>
        {/* 2.way */}
        {/* {this.state.names.length===0 &&<h2>No Names</h2>} */}
        {/* <ul>
            {this.state.names.map(name =>
                <li key={name}>{name}</li>)}
            
        </ul> */}
        </div>
        );
    }
}

export default Product;