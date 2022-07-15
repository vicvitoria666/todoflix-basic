import React from "react";
import axios from "axios";

const apiSeries = axios.create({
  baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=32e1a08c337fe6cd06d685f58ba14f53&language=en-US&page=1",
}) 

export default class Series extends React.Component{
  state={
    listSeries:[],
  }
 async componentDidMount(){
   const responseTv = await apiSeries.get()
   const Series = responseTv.data.results.map(superBonde => {
     return {
       ...superBonde,
       poster_path:`https://image.tmdb.org/t/p/w500/${superBonde.poster_path}`
     }})

     this.setState({
       listSeries: Series
     })
     console.log(responseTv)

   //use o conslole log com resonse para lembrar o caminho
  }
  
  render(){

    return(
      <div>
        <h1>Filmes</h1>
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