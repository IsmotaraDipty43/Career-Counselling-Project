import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";
const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
  
    const handleResetPassword = (e) => {
      e.preventDefault();
  
      if (!email) {
        setError('Please enter your email');
        return;
      }
  
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success('Password reset email sent! Check your inbox.');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        })
        .catch((err) => {
          setError('Error sending reset email. Please try again later.');
          toast.error('Failed to send reset email.');
        });
    };
  
    return (
    <>
    
    <Helmet>
              
              <title>Career Pathway || Forget</title>
             
          </Helmet>
              <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-center text-black">Reset Password</h2>
                  <form onSubmit={handleResetPassword}>
                    <div className="mt-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2d524b] focus:outline-none"
                      />
                    </div>
          
                    {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
          
                    <div className="mt-4">
                      <button className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md">
                        Send Reset Link
                      </button>
                    </div>
                  </form>
                  <p className="mt-4 text-center text-sm text-gray-600">
                    Remember your password?{' '}
                    <NavLink to="/login" className="text-blue-500 hover:underline">
                      Login here
                    </NavLink>
                  </p>
                </div>
                <ToastContainer />
              </div>
    </>
    );
  };
  

export default ForgetPassword;