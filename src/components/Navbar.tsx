import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Home, User, PieChart } from 'lucide-react';

const Navbar = () => {
  let token=localStorage.getItem("localstorage");


  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
   
          {localStorage.getItem("token") ?(
          <>
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="w-8 h-8" />
            <span className="font-bold text-xl">FitTrack</span>
          </Link>
            <div className="flex space-x-4">
              <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200">
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              <Link to="/stats" className="flex items-center space-x-1 hover:text-indigo-200">
                <PieChart className="w-5 h-5" />
                <span>Stats</span>
              </Link>
              <Link to="/profile" className="flex items-center space-x-1 hover:text-indigo-200">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            </div>
          </>
          )
          :(  
          <>
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="w-8 h-8" />
              <span className="font-bold text-xl">FitTrack</span>
            </Link>
              <div className='flex space-x-4 '>
                <Link to="/register">
                  <span>Register</span>
                </Link>
                
                <Link to="/login" >
                  <span>Log in</span>
                </Link>
              </div>
          </>
          )
        }
    

        </div>
      </div>
    </nav>
  );
};

export default Navbar;