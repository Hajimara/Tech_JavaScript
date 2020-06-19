import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from 'universal-cookie';
import { withRouter } from 'react-router-dom';
import Login from "../../components/login/Login";
import { usersThunk } from "../../modules/users";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login({
      strategy: "local",
      email: this.state.email,
      password: this.state.password,
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if(this.props.isTest !== prevProps.isTest){
  //       this.setState({id : this.props.isTest})
  //   }
  // }
  componentDidUpdate(prevProps, prevState){
    if(this.props.auth !== prevProps.auth){
      console.log(this.props.auth.user.token);
      const cookie = new Cookies();
      cookie.set('access_token', this.props.auth.user.token);
      this.props.history.push('/home')
      // this.cookies.setCookie('access_token', this.props.auth.user.token);
    }
  }
  render() {
    const { email, password } = this.state;
    return (
      <Login
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        password={password}
        email={email}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.users.auth,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(usersThunk(user)),
});

export default connect(
  mapStateToProps, //store update시 항상 호출됨
  mapDispatchToProps // store에 접근한 컴포넌트가 store의 상태를 바꾸기 위해 dispatch 사용을 가능하게 해줌
)(withRouter(LoginContainer));
