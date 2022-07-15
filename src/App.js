import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import * as S from "./style"


export default class App extends React.Component{
  

  render(){

    return(
      <Router>
        <S.GlobalStyle/>
        <S.BodyApp>
        <S.Nav>
        <h1>Movies and Series</h1>
        <S.UlNav>
          <li> <Link to="/" >Home</Link></li>
          <li><Link to="/movies" >Movies</Link></li>
          <li><Link to="/series" >Series</Link></li>

        </S.UlNav>
      </S.Nav>
      
        <Routes>
          <Route path="/" />	
          <Route path="/movies" element={<Movies/>} />
          <Route path="/series" element={<Series/>} />
        </Routes>

        
        </S.BodyApp>
      </Router>
    )
  }
}
