import React from "react";
import axios from "axios";

const apiSeries = axios.create({
  baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=32e1a08c337fe6cd06d685f58ba14f53&language=en-US&page=1",
}) 

export default class App extends React.Component{
  state={
    listTVshow:[],
  }
 async componentDidMount(){
   const responseTvshow = await apiSeries.get()
   const tvShow = responseTvshow.data.results.map(superBonde => {
     return {
       ...superBonde,
       poster_path:`https://image.tmdb.org/t/p/w500/${superBonde.poster_path}`
     }})

     this.setState({
       listSeries: tvShow
     })
     console.log(responseTvshow)

  }
  
  render(){

    return(
      <div>
        <h1>TvShows</h1>
        <ul>
          {this.state.listSeries.map(item => (
            <div>
            <h2>{item.name}</h2>
            <img src={item.poster_path} alt={`poster do filme ${item.name}`} />
            </div>
          ))}
        </ul>

      </div>
    )
  }
}