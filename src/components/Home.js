import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const movie_api="https://api.themoviedb.org/3/movie/now_playing?api_key=10b31efc55017d339c319848bdaac1da";
const image_api='https://image.tmdb.org/t/p/w500/';

export default function Home() {
  const [movies, setMovies]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get(movie_api).then((resp)=>{
        setMovies(resp.data.results);
    },[])
  })
  // const handleClick=(movie)=>{
  //   navigate('/movies/' + movie.id,{state:movie});
    
  // }
  useEffect(()=>{
    const user = localStorage.getItem('userEmail');
    if(!user){
      navigate('/login');
    }
  },[]);

  return (
    <div style={{display:'flex',flexWrap:'wrap',padding:20}}>
      {movies.map((movie)=>{
        return(
          <div  key={movie.id}>
            <Card  onClick={()=> navigate('/movies/' + movie.id,{state:movie})} style={{width:'20em',padding:25,height:'auto',overflow:'hidden',margin:20}}>
              <Card.Img src={image_api + movie.poster_path} style={{width:275}}></Card.Img>
              <Card.Title>{movie.title}</Card.Title>
              {/* <Card.Text>{movie.overview}</Card.Text> */}
            </Card>
          </ div>
        )
      })}
    </div>
  )
}
