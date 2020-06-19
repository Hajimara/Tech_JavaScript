import React, { Component } from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 1100px;
  min-width: 1100px;
  height: inherit;
  margin-bottom: 1.25rem;
`;
const RightWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;

const Button = styled.div`
    color: rgba(0,0,0,0.25);
    font-size: 12px;
    :active{
        opacity:0.6;
    }
    :hover{
        cursor: pointer;
    }
`;

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <HeaderWrapper>
          <RightWrapper>
            <Button onClick={this.props.getUserInfo}>get my info
                </Button>
            <Button>Logout</Button>
          </RightWrapper>
        </HeaderWrapper>
      </HeaderStyled>
    );
  }
}
export default Header;
