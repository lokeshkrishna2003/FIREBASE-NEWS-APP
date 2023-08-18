import React, { useState } from 'react'
import {Alert, Button, Card} from "react-bootstrap";
import Navbar from '../../components/Navbar';
import News from '../../components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const Dashboard = (props) => {

    const [progress,setprogress]=useState(1)

    const apikey = "c78a4d691e204a4ab9a73f7c43200638"

  return (
    <>
    
<LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
   <Navbar/> 
   <div className="container"> 
   <Routes>
   </Routes> 
</div>
   
    </>
  )
}

export default Dashboard
