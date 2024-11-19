import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icon.png';
import { Authcontext } from '../Provider/AuthProvider';

const Navbber = () => {
  const { user, logOut } = useContext(Authcontext);
  console.log(user);
    return (
        <div className='bg-[#2d524b]'>
            <div className="navbar w-full md:w-11/12 lg:w-10/12 justify-center items-center mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mt-2 text-white "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 bg-base-300 text-black shadow">
          <NavLink
  className={({ isActive }) => 
    `text-lg font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`
  }
  to="/"
>
  Home
</NavLink>
{
 
  user &&  <>    <NavLink
  className={({ isActive }) => 
    `text-lg font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`
  }
  to="/course"
>
  Course
</NavLink>
 </>
}
<NavLink
  className={({ isActive }) => 
    `text-lg font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`
  }
  to="/about"
>
  About Us
</NavLink>
{
 
 user &&  <>    <NavLink
 className={({ isActive }) => 
   `text-lg font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`
 }
 to="/profile"
>
 My Profile
</NavLink>
</>
}
      </ul>
    </div>
  
       
    <div className='flex items-center justify-center '>
    <img src={logo} className='ml-10  md:ml-0 w-8 h-8 md:w-12 md:h-12' alt="" />
    <a className="btn btn-ghost text-white text-xl md:text-2xl">Career Pathway</a>
    </div>
   
  </div>
  <div className="navbar-center hidden text-white lg:flex">
    <ul className="menu menu-horizontal gap-10 px-1">
    <NavLink
  className={({ isActive }) => 
    `text-lg font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`
  }
  to="/"
>
  Home
</NavLink>
{
 
 user &&  <>    <NavLink
 className={({ isActive }) => 
   `text-lg font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`
 }
 to="/course"
>
 Course
</NavLink>
</>
}
<NavLink
  className={({ isActive }) => 
    `text-lg font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`
  }
  to="/about"
>
  About Us
</NavLink>
{
 
 user &&  <>    <NavLink
 className={({ isActive }) => 
   `text-lg font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`
 }
 to="/profile"
>
 My Profile
</NavLink>
</>
}
                
    </ul>
  </div>
  <div className="navbar-end">
    {/* Logout or Login Button */}
    {user && user?.email ? (
               <div className='flex gap-3 justify-center items-center'>
                               <img 
    src={user.photoURL}
    alt="User Avatar"
    className="w-10 h-10 rounded-full"
    title={user.displayName}
/>

                    <button className="btn btn-white text-lg text-black rounded-xl" onClick={logOut}>
                        Logout
                    </button>

               </div>
                ) : (
                
                  <NavLink to='/login' className="btn btn-white text-lg text-black rounded-xl">
                  Login
              </NavLink>
              
                )}
 
  </div>
</div>
        </div>
    );
};

export default Navbber;