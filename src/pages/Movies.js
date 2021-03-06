import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  text-decoration:none;
}

`


const apiMovies = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=32e1a08c337fe6cd06d685f58ba14f53&language=en-US&page=1",
}) 


export default class Movies extends React.Component{
  state={
    listMovies:[],
    resultMovies:[],
  }
 componentDidMount(){
  this.getFilmes()
  }
  getFilmes = async () => {

   const response = await apiMovies.get()
   const Movies = response.data.results.map(superBonde => {
     return {
       ...superBonde,
       poster_path:`https://image.tmdb.org/t/p/w500/${superBonde.poster_path}`
     }})

     this.setState({
       listMovies: Movies,
       resultMovies:Movies
     })
  }

  searchMovies =(event ) =>{
    let {listMovies} = this.state
    const moviesFiltrados = listMovies.filter(item => {
      if(item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    })

    this.setState({
      resultMovies: moviesFiltrados
    })
  }
  
  
  render(){

    return(
      <div>
        <h1>Movies</h1>
        <input type="text" onChange={this.searchMovies} placeholder="Search"  />
        <ul>
          {this.state.resultMovies.map(item => (
            <div>
            <h2>{item.title}</h2>

            <img src={item.poster_path} alt={`poster do filme ${item.title}`} />
            </div>
          ))}
        </ul>

      </div>
    )
  }
}