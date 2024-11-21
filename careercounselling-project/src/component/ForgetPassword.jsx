import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Navbber from './Navbber';
import Footer from './Footer';

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  // Get the email passed from the Login page
  const [email, setEmail] = useState(location.state?.email || '');

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter a valid email address.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset email sent! Check your inbox.');
        setTimeout(() => {
          // Redirect user to their Gmail
          window.location.href = `mailto:${email}`;
        }, 2000);
      })
      .catch((err) => {
        toast.error('Error sending reset email. Please try again later.');
      });
  };

  return (
    <>
      <Helmet>
        <title>Career Pathway || Forget Password</title>
      </Helmet>

      <Navbber />
      <div className="min-h-screen justify-center items-center">
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
                  className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2d524b] focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <button className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md">
                  Send Reset Link
                </button>
              </div>
            </form>

            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgetPassword;
