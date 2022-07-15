import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  text-decoration:none;
  color:red;
}

`
export const BodyApp = styled.div`
  width:100%;
  min-height:100vh;
  background-color:#050505;


`

export const Nav = styled.nav`
  width:100%;
  height:7vh;
  padding:1.3%;
  display:flex;
  align-items:center;
  background-color:#0a0908;
  img {
    width:8vh;
    height:8vh;
  }
  h1{
    margin-left:1%;
    font-size:1.6em;
    color:white;
  }
`
export const UlNav = styled.ul` 
  width:100%;
  display:flex; 
  li{
    padding:10%;
    list-style:none;
  }
  li a{
    font-size:1.5em;
    color:white;
    text-decoration:none;
    &:hover{
      border-radius:50%;
      color:#f8f9fa;
      text-shadow: 0px 0px 3px #f8f9fa;
    }
  }
`