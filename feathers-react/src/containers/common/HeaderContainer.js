import React, { Component } from "react";
import Header from "../../components/common/Header";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";
import { userInfoThunk } from "../../modules/user";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: null,
    };

    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo = () => {
    this.props.userInfo();
  };

  componentDidMount() {
    const cookies = new Cookies();
    const token = cookies.get("access_token");
    if (token) {
      console.log(token);
      this.setState({
        cookie: token,
      });
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return <Header getUserInfo={this.getUserInfo} />;
  }
}
const mapStateToProps = (state) => ({
  auth: state.users.auth,
});

const mapDispatchToProps = (dispatch) => ({
  userInfo: () => dispatch(userInfoThunk()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderContainer));
