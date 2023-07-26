import React from 'react'
import { Row,Col } from 'react-bootstrap';
import popcorn from '../Image/popcorn.png'
import qr from '../Image/qr.png'

export default function Success() {
  return (
    <div style={{padding:20}}>
      <Row>
        <Col style={{display:'flex', flexDirection:'column'  ,justifyContent:'center',alignItems:'center'}}>
            <img height={500} width={375} src={popcorn} alt="" />
            <div style={{marginTop:10}}>
                <h6>Tickets Confirmed</h6>
                <h5>Enjoy your movie</h5>
            </div>
        </Col>
        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img height={300} width={350} style={{marginTop:30}}  src={qr} alt="" />
        </Col>
      </Row>
    </div>
  )
}
