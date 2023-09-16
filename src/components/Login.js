import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import {Row,Col,Card,Form,Button} from 'react-bootstrap';
import login from '../Image/login.png'
import  '../App.css';
import { Navigate, useNavigate } from "react-router-dom";


export default function Login({setUser}){
    const [email,setEmail]=useState('');
    const navigate = useNavigate();
    const handleLogin=()=>{
        localStorage.setItem('userEmail',email);
        setUser(email);
        navigate('/');
    }
    return(
        <div className="auth-container">
            <Container>
                <Row>
                    <Col className="image-conatiner"> <img src={login} alt="" />
                     <h1 style={{color:'white',padding:10}}>BOOK TICKETS | EARN POINTS</h1>
                    </Col>
                    <Col className="auth-inner-container">
                    <Card style={{ width: '30rem' }}>
                        
                        <Card.Body>
                        <Form style={{margin:20}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button onClick={()=>handleLogin()} variant="primary" type="submit" className="login-btn">
                                Login
                            </Button>
                            </Form>
                            <div style={{display:'flex',justifyContent:'center',marginTop:20}}>
                                <span onClick={()=>navigate('/signup')}>New here? Please Sign Up</span> 
                            </div>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
