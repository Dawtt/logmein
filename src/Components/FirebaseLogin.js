import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import fire from '../config/Fire'

class FirebaseLogin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email:'',
      password:''
    }
  }

  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

    }).catch((error) => {
      console.log(error);
    });
  }
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
.catch((error) => {
      console.log(error);
    });
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    return(
      <div className="col-md-6">
      <form>
      <div className="form-group">
      <label htmlFor="exampleInputEmail"> Email Address </label>
      <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
      className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
      placeholder="Enter email" />
      <small id="emailHelp" className="form-text text-muted"> We will never share your email</small>
      </div>
      <div className="form-group">
      <label form="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password"
      name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup </button>
      </form>

      </div>
    );
  }
}
export default FirebaseLogin;
