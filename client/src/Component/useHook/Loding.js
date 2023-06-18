import React,{useState} from 'react'
import logo from '../../image/Main.png'
const Loding = () => {
  return (
    <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={logo} style={{width:"30%",height:"60%"}} className="img-fluid"></img>
    </div>
  )
}

export default Loding