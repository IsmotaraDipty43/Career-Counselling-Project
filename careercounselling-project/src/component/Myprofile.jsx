import React, { useContext, useState, useEffect } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import Navbber from "./Navbber";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const MyProfile = () => {
  const { user, updateCurrentUserProfile } = useContext(Authcontext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
const navigate = useNavigate()
  // Update displayName and photoURL state when user changes
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || navigate('/login'));
      setPhotoURL(user.photoURL || navigate('/login'));
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Check if at least one field is provided
    if (!displayName && !photoURL) {
      toast.error("Please provide at least one field to update.");
      return;
    }

    const updateData = {
      displayName: displayName || user.displayName,
      photoURL: photoURL || user.photoURL,
    };

    setLoading(true);

    updateCurrentUserProfile(updateData)
      .then(() => {
        toast.success("Profile Update successful!");
      })
      .catch((error) => {
     
        toast.error(`Failed to update profile: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

 

  return (
    <>
      <Helmet>
        <title>Career Pathway || Profile</title>
      </Helmet>
      <Navbber />
      <div className="w-full min-h-screen md:w-10/12 mx-auto justify-center items-center">
        <div className="p-4 mt-10 mb-10">
          <h1 className="md:text-3xl text-xl font-bold mb-4 text-center">My Profile</h1>
          <div>
            <p className="text-xl font-semibold">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-xl font-semibold">
              <strong>Display Name:</strong> {user.displayName || "Not set"}
            </p>
            <p className="text-xl font-semibold">
              <strong>Photo:</strong>{" "}
              {user.photoURL ? (
                <img src={user.photoURL} alt="User Avatar" className="w-24 h-24 mt-5 rounded-full" />
              ) : (
                "Not set"
              )}
            </p>
            <form onSubmit={handleUpdateProfile} className="mt-4">
              <div className="mb-2">
                <label htmlFor="displayName" className="block font-medium text-lg">
                  Update User Name:
                </label>
                <input
                  type="text"
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="border rounded px-2 py-1 w-full"
                  placeholder="Enter new display name"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="photoURL" className="block font-medium text-lg">
                  Update Photo URL:
                </label>
                <input
                  type="text"
                  id="photoURL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="border rounded px-2 py-1 w-full"
                  placeholder="Enter new photo URL"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MyProfile;
