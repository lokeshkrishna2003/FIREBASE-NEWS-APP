import './App.css'
import Signup from './components/Signup/Signup';
import { Container } from 'react-bootstrap';
import AuthProvider, { useAuth } from './Context/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute.';
import Loading from './components/Loading Page/Loading';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import { useHistory } from 'react-router-dom';
import News from './components/News'
import { useState } from 'react';
import Error from './components/Error';
import Navbar from './components/Navbar';


function App() {
  const { load, currentUser } = useAuth();
  
  const [progress,setprogress]=useState(1)

  const apikey = "4dc42f9f2b024f22892fd0de8f8c32e1"
  // console.log(load)


  return (
    // Everything wrapped inside the authProvider to have access to the context
    // Switch determines which router we are currently on
      
        <div >
          {/* <Loading/> */}



          {
            load ?(
              <Loading/>
            ):
            (

              <>
              {
                !currentUser?(
                  <Routes>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="forgot-password" element={<ForgotPassword/>}/>
                  </Routes>

                ):(

                  
                    <Routes>
                      <Route  exact path='/dashboard' element={<News setProgress={(x)=>setprogress(x)} apikey={apikey}    key='general'  country="in" category="general" />}/> 
                      <Route  exact path='/dashboard/business' element={<News  setProgress={(x)=>setprogress(x)} apikey={apikey}  key='busines'  country="in" category="business" />}/>
                      <Route  exact path='/dashboard/entertainment' element={<News setProgress={(x)=>setprogress(x)} apikey={apikey}   key='entertainment' country="in" category="entertainment" />}/>
                      <Route  exact path='/dashboard/health' element={<News  setProgress={(x)=>setprogress(x)} apikey={apikey}  key='health'  country="in" category="health" />}/>
                      <Route  exact path='/dashboard/science' element={<News setProgress={(x)=>setprogress(x)} apikey={apikey}   key='science'  country="in" category="science" />}/>
                      <Route  exact path='/dashboard/sports' element={<News  setProgress={(x)=>setprogress(x)} apikey={apikey}  key='sports'  country="in" category="sports" />}/>
                      <Route  exact path='/dashboard/technology' element={<News setProgress={(x)=>setprogress(x)} apikey={apikey}   key='technology'  country="in" category="technology" />}/>
                      <Route path="/update-profile" element={<UpdateProfile/>} />
                      <Route path='/' element={<Login/>}/>
                    </Routes>
                  
                  // </div>

                )

                
              }
              </>

              
            )
          }

          
        
        </div>      

    

  );
}

export default App;
