import React, { useEffect, useState } from 'react';
import { Row ,Col, Button} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SelectSeat() {
  const location = useLocation();
  const navigate = useNavigate();
  const {title}= location.state;
  const [seatmatrix,setSeatMatrix]=useState([]);
  const [selectedSeat,setSelectedSeat]=useState([]);

  const createSeat=()=>{
    let totalRows = 5;
    let numberofSeatsInaRow=8;
    let tempSeats=[];
    let row=0;
    let ch='A';
    while(row < totalRows){
      let col=1;
      let rowArr=[];
      while(col < numberofSeatsInaRow){
        rowArr.push(ch+col);
        col++;
      }
      tempSeats.push(rowArr);
      row++;
      ch = String.fromCharCode(ch.charCodeAt(0)+1);
    }
    console.log(tempSeats);
    setSeatMatrix(tempSeats);
  }

  useEffect(()=>{
    createSeat();
  },[])

  const handleSelect=(newseat)=>{
      setSelectedSeat([...selectedSeat,newseat]);
  }



  return (
    <div style={{padding:50}}>
      <div>
        <h3 className='d-inline-block'>{title}</h3>
        <div style={{marginLeft:100}} className='d-inline-block'>
          screen this side
        </div>
      </div>
      <div style={{marginTop:45}}>
        {
          seatmatrix.map((seatArr)=>{
            return(
              <Row style={{marginBottom:20}}>
                {
                  seatArr.map((seat)=>{
                    let isSelected = selectedSeat.indexOf(seat)>-1;
                      return <Col>
                      <Button style={{backgroundColor:isSelected ? 'green' : 'blue',border:'none'}}  onClick={()=>handleSelect(seat)}>{seat}</Button>
                    </Col>
                  })
                }  
               </Row>
            )
          })
        }
      </div>
      <div>
        <div>
          {
            selectedSeat.length > 0 ? 
            <div>{selectedSeat.map((seat)=>{
              return(
                <span style={{marginRight:20}}>{seat}</span>
              )
              
            })}
            Seat Selected
            <div>
              <h4>Total: Rs.{selectedSeat.length * 200}</h4>
              <Button onClick={()=>{navigate('/success')}}>CheckOut</Button>
            </div>
            </div> :
            <div> No seat selected</div>
          }
        </div>
      </div>
    </div>
  )
}
