import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  
  const[name,setName]=React.useState("")
  const[email,setEmail]=React.useState("")
  const[password,setPassword]=React.useState("")
  const navigate=useNavigate()

  React.useEffect(()=>{
    if(localStorage.getItem("token")){
      navigate("/")
    }
  },[])


  async function register(){
    let item={name,email,password}

    let result= await fetch("http://localhost:8000/api/register",{
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
      alert(data.message);
    }
  }

  return (
    <>
    <div className='flex flex-col items-center   border-2 border-solid border-gray-200 shadow-lg rounded-xl bg-white p-6 gap-5'>
      <h1 className='font-bold text-3xl'>Register Page</h1>
  <div className='flex items-center'>
    
    <i className="fa-solid fa-signature mr-3 fa-2xl"></i>
    <input
      onChange={(e) => setName(e.target.value)}
      value={name}
      className='bg-gray-200 p-4 rounded-lg text-pretty font-bold outline-none focus:shadow-xl shadow-indigo-800'
      type='text'
      name='name'
      placeholder='Name'
    />
  </div>

  <div className='flex items-center'>
    <i className="fa-solid fa-envelope mr-5 fa-2xl"></i>
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
    <i className="fa-solid fa-key mr-5 fa-2xl"></i>
    <input
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      className='bg-gray-200 p-4 rounded-lg text-pretty font-bold outline-none focus:shadow-xl shadow-indigo-800'
      type='password'
      name='password'
      placeholder='Password'
    />
  </div>

  <button
    onClick={register}
    className='bg-red-600 text-black hover:bg-red-300 rounded-3xl w-80 p-3 flex justify-center self-center text-pretty font-bold'
  >
    Register
  </button>
</div>

    </>
  )
}

export default Register
