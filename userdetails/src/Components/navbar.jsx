import React from "react";
import styled from "styled-components";
import axios from "axios";
import Loader from "./loader"
import Card from "./card"
const NavBar = styled.div`
  border-bottom: 1px solid black;
  color: white;
  height: 90px;
  display: flex;
`;
const Logo = styled.img`
  height: 60px;
  margin: 10px;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: auto;
  height: 50px;
  padding: 10px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Wrapper = styled.div`
 
`;
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
      page: 1,
      isLoading: false,
      isSuccess:false,
    };
  }
  handleData = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(()=>{
    axios
      .get(`https://reqres.in/api/users?page=${this.state.page} `)
      .then((res) =>
        this.setState({
          userDetails: res.data.data,
          isLoading: false,
          isSuccess:true
        })
      )
      .catch((err) => alert("Backend server Down"));
    },1000)
  };
  render() {
    return (
      <>
        <NavBar>
          <Logo src="https://www.stylex.in/img/logo.png" />
          <Button onClick={this.handleData}>Get Users</Button>
        </NavBar>
        <Wrapper>
            {this.state.isLoading?<Loader/>:null}
            {this.state.isSuccess?<Card data={this.state.userDetails}/>:null}
        </Wrapper>
      </>
    );
  }
}

export default Navbar;
