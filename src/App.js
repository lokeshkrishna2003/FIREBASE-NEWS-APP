import './App.css'
import Signup from './components/Signup/Signup';
import  { useAuth } from './Context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import Login from './components/Login/Login';

import Loading from './components/Loading Page/Loading';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

import News from './components/News'
import { useState } from 'react';



function App() {
  const { load, currentUser } = useAuth();
  
  const [progress,setprogress]=useState(1)

  const apikey = "4dc42f9f2b024f22892fd0de8f8c32e1"



  return (

      
        <div className='div' >




          {
            load ?(
              <Loading/>
            ):
            (

              <>
              {
                !currentUser?(
                  <Routes>
                    <Route exact path='/' element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="forgot-password" element={<ForgotPassword/>}/>
                  </Routes>

                ):(
                  <>
<LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
                  
                    <Routes>
                      <Route  exact path='/dashboard' element={<News setProgress={(x)=>setprogress(x)} apikey={apikey}    key='general'  country="in" category="general" />}/> 
                      <Route  exact path='/dashboard/business' element={<News  setProgress={(x)=>setprogress(x)} apikey={apikey}  key='busines'  country="in" category="business" />}/>
                      <Route  exact path='/dashboard/entertainment' element={<News setProgress={(x)=>setprogress(x)} apikey={apikey}   key='entertainment' country="in" category="entertainment" />}/>
                      <Route  exact path='/dashboard/health' element={<News  setProgress={(x)=>setprogress(x)} apikey={apikey}  key='health'  country="in" category="health" />}/>
                      <Route  exact path='/dashboard/science' element={<News setProgress={(x)=>setprogress(x)} apikey={apikey}   key='science'  country="in" category="science" />}/>
                      <Route  exact path='/dashboard/sports' element={<News  setProgress={(x)=>setprogress(x)} apikey={apikey}  key='sports'  country="in" category="sports" />}/>
                      <Route  exact path='/dashboard/technology' element={<News setProgress={(x)=>setprogress(x)} apikey={apikey}   key='technology'  country="in" category="technology" />}/>
                      <Route path='/' element={<Login/>}/>
                    </Routes>
                  
                  
                    </>
                )

                
              }
              </>

              
            )
          }

          
        
        </div>      

    

  );
}

export default App;
