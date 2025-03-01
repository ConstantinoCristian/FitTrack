import React from 'react'
import { useNavigate } from 'react-router-dom'


interface ProtectedProps{
  Cmp: React.ComponentType
}

function Protected(props:ProtectedProps) {
  let {Cmp}=props
  const navigate=useNavigate()
 
 React.useEffect(()=>{
  if(!localStorage.getItem("token")){
    navigate("/register")
  }
 },[])
 
 
  return (
    <> 
      <Cmp />
    </>
  )
}

export default Protected
