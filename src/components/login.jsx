import React, { Component } from 'react';
import Joi from "joi-browser";
class Login extends Component {
    state = {
        email :"",
        password :"",
        errors: {}
    };

    schema ={
        email:Joi.string().required().email(),
        password:Joi.string().required().regex(/[a-zA-Z0-9]{3,30}/).min(8)
    };

/////////// refes
// email = React.createRef();
    handleSubmit = e => {
        // const email = this.email.current.value;
        // console.log("submit",email);
        e.preventDefault();

        const errors = this.validate();

        if (errors) return;
        //call backend
        console.log("submit");
    };

    validate = () => {
        const errors ={};
        // if(this.state.email.trim() === '')
        //     errors.email ="Email is required";
        // if(this.state.password.trim() === '')
        //     errors.password ="Password is required";

        // this.setState({ errors });

        // return Object.keys(errors).length === 0 ? null : errors
        const state = { ...this.state };
        delete state.errors;
        const res= Joi.validate(state , this.schema ,{abortEarly: false});
        //console.log(res);
        
        if (res.error === null) {
            this.setState({ errors: {} });  
            return null;
        }
        for (const error of res.error.details ) {
            errors[error.path] = error.message;
        }
        this.setState({ errors });
    };

    handleChange = e => {
        // console.log("Change");
        //clone - edit - set state
        let state = {...this.state};
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);
    };
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                        name='email'
                        value={this.state.email} 
                        onChange={this.handleChange}
                        autoFocus
                        // ref={this.email}
                         type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                          {this.state.errors.email &&  (<div className="alert alert-danger">{this.state.errors.email}</div>)}
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        { this.state.errors.password && (<div className="alert alert-danger">{this.state.errors.password}</div>)}
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;