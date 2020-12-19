import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangeEmail(e) {
    this.setState({email: e.target.value});
}

handleChangePassword(e) {
    this.setState({password: e.target.value});
}

handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props

    axios.post('/api/doctor', this.state)
      .then(response => {
        if(response.data){
          localStorage.setItem('authlogin', 1);
          window.location.href = 'http://fe67818e391e.ngrok.io';
         
        }
        else{
          localStorage.setItem('authlogin', 0);
        }
       
      }).catch(err => console.log(err));
}
  render () {
  
    return (
     
        <section id="wrapper" className="login-register" >
        <div className="login-box login-sidebar">
          <div className="white-box">
            <form className="form-horizontal form-material" id="loginform" onSubmit={this.handleSubmit}>
              <a href="javascript:void(0)" className="text-center db"><img src="./app_assets/plugins/images/eliteadmin-logo-dark.png" alt="Home" />
                <br /><img src="./app_assets/plugins/images/eliteadmin-text-dark.png" alt="Home" /></a>
              <div className="form-group m-t-40">
                <div className="col-xs-12">
                  <input className="form-control" type="text" required placeholder="Username"  onChange={this.handleChangeEmail}/> </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input className="form-control" type="password" required placeholder="Password" onChange={this.handleChangePassword} /> </div>
              </div>
        
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                  <div className="social">
                    <a href="javascript:void(0)" className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fa fa-facebook" /> </a>
                    <a href="javascript:void(0)" className="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fa fa-google-plus" /> </a>
                  </div>
                </div>
              </div>
       
            </form>
    
          </div>
        </div>
      </section>

    )
  }
}

export default Login