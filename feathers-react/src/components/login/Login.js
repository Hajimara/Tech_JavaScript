import React, { Component } from "react";
import styled from "styled-components";

const LoginStyled = styled.div`
  height: 100%;
  width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  width: 100px;
  height: 50px;
  margin: 20px;
`;

const Title = styled.h1``;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputBox = styled.input`
  width: 100px;
  height: 20px;
`;

const Text = styled.p``;

const ButtonWrapper = styled.div``;

const Form = styled.form``;

const Button = styled.button``;
class Login extends Component {
  render() {
    console.log(this.props);
    const { email, handleChange, password, handleSubmit } = this.props;
    return (
      <>
        <LoginStyled>
          <LoginForm>
            <TitleWrapper>
              <Title>Login</Title>
            </TitleWrapper>
            <Form onSubmit={handleSubmit}>
              <InputBoxStyled>
                <InputBoxWrapper>
                  <Text>E-MAIL : </Text>
                  <InputBox
                    name={"email"}
                    onChange={handleChange}
                    value={email}
                  ></InputBox>
                </InputBoxWrapper>
                <InputBoxWrapper>
                  <Text>PASSWORD : </Text>
                  <InputBox
                    name={"password"}
                    onChange={handleChange}
                    value={password}
                  ></InputBox>
                </InputBoxWrapper>
              </InputBoxStyled>
              <ButtonWrapper>
              <Button>Login</Button>
            </ButtonWrapper>
            </Form>
            
          </LoginForm>
        </LoginStyled>
      </>
    );
  }
}

export default Login;
