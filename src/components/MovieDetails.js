import React,{useEffect,useState} from 'react';
import { Row,Col, Button } from 'react-bootstrap';
import { useLocation,useNavigate } from 'react-router-dom';

import axios from 'axios';

const image_api='https://image.tmdb.org/t/p/w500/';
const Timings=["10:30 AM","03:00 PM","06:00 PM","09:00 PM"];

export default function MovieDetails() {
  const location = useLocation();
  const  navigate= useNavigate();
  const {title, overview, poster_path} = location.state;
  const [latLng,setLatLng]=useState({});
  const [theatres,setTheatres]=useState([]);

  useEffect(()=>{
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        setLatLng({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        });
      })
    }
  },[]);

  useEffect(()=>{
    if(Object.keys(latLng).length>0){
      const geoApi=`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLng.lng},${latLng.lat},10000&bias=proximity:78.5155062,17.529823&limit=20&apiKey=78a9065dccb6451e8f01cea9413c8e3a`
      axios.get(geoApi).then(res=>{
        const featuresArr=res.data.features;
        const names =[];
        featuresArr.map((feature)=>names.push(feature.properties.name));
        setTheatres(names);
      })
    }
  },[latLng])

  return (
    <div>
      <Row>
        <Col>
          <div style={{padding:70}}>
            <img style={{borderRadius:8, marginBottom:24, height:240, width:200}} src={image_api + poster_path}  alt='' />
            <h2>{title}</h2>
            <div>
              {overview}
            </div>
          </div>
        </Col>
        <Col>
          <div style={{padding:70}}>
            {
              theatres.map((theatre,index)=>{
                return(
                  <div key={index} style={{marginBottom:20}} >
                    <div  style={{marginBottom:20}}>
                    <h4>{theatre}</h4>
                    </div>
                    {Timings.map((Time)=>{
                      return(
                        <Button onClick={()=>{navigate('/seat' ,{state:{title:title}})}} key={Time} style={{marginRight:10}}>{Time}</Button>
                      )
                    })}
                  </div>
                )
              })
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}
