import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Button } from 'react-bootstrap';
import logo from'./Image/logo.png'
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes,Route, useNavigate } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import SelectSeat from './components/SelectSeat';
import Success from './components/Success';
import { useEffect, useState } from 'react';

// const router=createBrowserRouter([
//   {
//     path:'/login',
//     element:<Login/>,
//   },
//   {
//     path:'/signup',
//     element:<Signup/>,
//   },
//   {
//     path:'/home',
//     element:<Home/>,
//   },
//   {
//     path:'/movies/:id',
//     element:<MovieDetails />,
//   },
//   {
//     path:'/seat',
//     element:<SelectSeat />,
//   },
//   {
//     path:'/success',
//     element:<Success />,
//   }
// ])

function App() {

  const navigate = useNavigate();
  const [user,setUser]=useState('');

  useEffect(()=>{
    const userEmail =  localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail);
    }
  },[user]);
  const handleLogout=()=>{
    localStorage.removeItem('userEmail');
    setUser(null);
    // window.location='/login';
    navigate('/login');
  }

  return (
    <div>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ticket Box
          </Navbar.Brand>
          { user && <Button onClick={handleLogout} className='logout-btn'>Lougout</Button>}
        </Container>
      </Navbar>
     
      <Routes>
        
        <Route path='/' element={<Home/>}  />
        <Route path='/signup' element={<Signup setUser={setUser}/>}  />
        <Route path='/login' element={<Login setUser={setUser}/>}  />
        <Route path='/movies/:id'  element={<MovieDetails/>}/>
        <Route path='/seat' element={<SelectSeat/>} />
        <Route path='/success' element={<Success/>}  />
      </Routes>
     
      
      {/* <RouterProvider router={router}/> */}
    </div>
  );
}

export default App;
