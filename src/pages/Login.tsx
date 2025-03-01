import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() 
{
  const[email,setEmail]=React.useState("")
  const[password,setPassword]=React.useState("")
  const[res,setRes]=React.useState("")
  const navigate=useNavigate()
  React.useEffect(()=>{
    if(localStorage.getItem("token")){
      navigate("/")
    }
  },[])

  async function login(){
    let item={email,password}

    let result= await fetch("http://localhost:8000/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(item)
    })
    const data=await result.json()
    try{
      localStorage.setItem("name",data.user.name)
      localStorage.setItem("email",data.user.email)
      localStorage.setItem("token",data.token)
      window.location.reload()
    }
    catch{
      setRes("Invalid Credentials")
    }
  }



  return (
    <>
   
   <div className='flex flex-col items-center  border-2 border-solid border-gray-200 shadow-lg rounded-xl  p-2 gap-5'>
   <h1 className='font-bold text-3xl'>Login Page</h1>
  <div className='flex items-center '>
    <i className="fa-solid fa-envelope mr-3 fa-2xl"></i>
    <input
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      className='bg-gray-200 p-4 rounded-lg text-pretty font-bold outline-none focus:shadow-xl shadow-indigo-800'
      type='email'
      name='email'
      placeholder='Email'
    />
  </div>

  <div className='flex items-center'>
    <i className="fa-solid fa-key mr-3 fa-2xl"></i>
    <input
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      className='bg-gray-200 p-4 rounded-lg text-pretty font-bold outline-none focus:shadow-xl shadow-indigo-800'
      type='password'
      name='password'
      placeholder='Password'
    />
  </div>

  <span className='text-pretty text-red-600 font-bold -tracking-tighter'>{res}</span>

  <button
    onClick={login}
    className='bg-yellow-600 text-black hover:bg-red-300 rounded-lg w-40 max-w-full max-h-14 p-3 flex justify-center self-center text-pretty font-bold'
  >
    Login
  </button>
</div>

     
    </>
  )
}

export default Login
