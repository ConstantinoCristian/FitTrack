import React from 'react';
import { User, Scale, Ruler, Target } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import "./icon.css"


const Profile = () => {

      const[getuserGoals,setGetUserGoals]=React.useState("")
      const[getuserStats,setGetUserStats]=React.useState("")
      let token=localStorage.getItem("token")

  const navigate=useNavigate()
  function logout(){
    localStorage.clear()
    localStorage.removeItem("token");
     window.location.reload();
    navigate("/")
   
    
    
  }
  
  React.useEffect(()=>{
      if(token){
        getUserGoals()
      }
    },[token])
  
  
  
  
    async function getUserGoals(){
      let result=await fetch("http://localhost:8000/api/getuserGoals",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization":`Bearer ${token}`
        },
        
      })
      let data=await result.json()
      setGetUserGoals(data)
      console.warn({
          "user goals":data
      })    
  }
  
    React.useEffect(()=>{
      if(token){
        getUserStats()
      }
    },[token])
  
  async function getUserStats(){
    let result=await fetch("http://localhost:8000/api/getuserStats",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization":`Bearer ${token}`
      },
      
    })
    let data=await result.json()
    setGetUserStats(data)
    console.warn({
        "user stats":data
    })    
  }
  


  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-indigo-100 p-3 rounded-full">
            <User className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{localStorage.getItem("name")}</h2>
            <p className="text-gray-600">{localStorage.getItem("email")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4"> 
            <h3 className="font-semibold text-gray-700">User's Stats</h3>
            <div className="flex items-center space-x-3">
           
              <Scale className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Weight</p>
                <p className="font-medium">{getuserStats.weight?`${getuserStats.weight}kg`:
                 <i id='icon' class="fa-solid fa-fade  fa-xmark fa-xl"></i>
                  } </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Ruler className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Height</p>
                <p className="font-medium">{getuserStats.height? `${getuserStats.height}cm`:<i id='icon' class="fa-solid fa-fade  fa-xmark fa-xl"></i>} </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Target className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Goal</p>
                <p className="font-medium">{getuserStats.goal
                  ?getuserStats.goal:<i id='icon' class="fa-solid fa-fade  fa-xmark fa-xl"></i> 
                  }</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Daily Goals</h3>
            <div>
              <p className="text-sm text-gray-500">Calories</p>
              <p className="font-medium">{getuserGoals.calories?`${getuserGoals.calories}kcal`:<i id='icon' class="fa-solid fa-fade  fa-xmark fa-xl"></i> } </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Protein</p>
              <p className="font-medium">{getuserGoals.protein?`${getuserGoals.protein}g`: <i id='icon' class="fa-solid fa-fade  fa-xmark fa-xl"></i>} </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Water</p>
              <p className="font-medium">{getuserGoals.water  ?`${getuserGoals.water}L` : <i id='icon' class="fa-solid fa-fade  fa-xmark fa-xl"></i> } </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-10 pt-6 border-t border-gray-200">
          <Link to="/EditProfile">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Edit Profile
            </button>
          </Link>
            <button
            onClick={logout}
            className='bg-indigo-600 rounded-lg text-white p-3 hover:bg-red-500 transition-all'>
              Log out
            </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;