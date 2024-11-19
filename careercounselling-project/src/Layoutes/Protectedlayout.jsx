import React, { useContext, useState } from 'react'; // Import useState
import { useLoaderData, useParams } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';
import Navbber from '../component/Navbber';
import Footer from '../component/Footer';
import mental from '../assets/mental.png'
import well from '../assets/well.png'
import medi from '../assets/meditation (2).png'
import self from '../assets/care.png'

const Protectedlayout = () => {
    const { id } = useParams();
    const idd = parseInt(id);  // Get the dynamic ID from the URL
    const ServiceData = useLoaderData(); // Fetch data using useLoaderData
    const service = ServiceData?.find(service => service.id === idd);  // Find the service by id (add optional chaining)
    
    const [comment, setComment] = useState('');  // Initialize state for comment
    const [commentsList, setCommentsList] = useState([]);  // Initialize state for list of comments

    const { user } = useContext(Authcontext); // Fetch user from context

    // Fallback for user name if not logged in
    const userName = user?.displayName || 'Anonymous'; // Default to 'Anonymous' if user is not logged in

    const handleCommentChange = (e) => {
        setComment(e.target.value);  // Update comment state
    };

    const handleCommentSubmit = () => {
        if (comment.trim()) {
            // Add the new comment with user name to the comments list
            setCommentsList(prevComments => [
                ...prevComments, 
                { user: userName, text: comment }  // Store comment along with the user's name
            ]);
            setComment(''); // Clear the comment input field
            console.log("Feedback submitted:", comment);
        } else {
            console.log("Comment cannot be empty.");
        }
    };

    if (!ServiceData) {
        return <div>Loading...</div>;  // Show loading until data is fetched
    }

    if (!service) {
        return <div>Service not found</div>;  // If no service is found for the given ID
    }

    return (
        <div>
            <Navbber></Navbber>
            <div className="flex justify-center items-center min-h-screen  mt-5 mb-5">
            <div className="md:w-8/12 w-full  grid  bg-gray-50 p-6 rounded-lg shadow-lg">
                <img 
                    src={service.image} 
                    alt={service.service_name} 
                    className="w-full h-[400px] object-cover rounded-md mb-4" 
                />
                <h2 className="text-2xl font-bold text-center mb-2">{service.service_name}</h2>
                <p className="text-center text-lg text-gray-600 mb-2">{service.category}</p>
                <p className="text-gray-800 text-lg mb-4">{service.description}</p>
                <p className="text-gray-700 text-lg font-semibold">Pricing: {service.pricing}</p>
                <p className="text-gray-700 text-lg">
                    Duration: {new Date(service.duration.split(' - ')[0]).toLocaleString()} - 
                    {new Date(service.duration.split(' - ')[1]).toLocaleString()}
                </p>
                <div className="my-4">
                    <p className="font-semibold text-lg">Counselor: {service.counselor.name}</p>
                    <p>{service.counselor.qualification}</p>
                    <p>{service.counselor.experience}</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-yellow-500 font-bold text-lg">Rating: {service.rating}</span>
                </div>
                
                {/* Comment Section */}
                <div className="mt-4">
                    <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Leave your feedback here..."
                    />
                    <button
                        onClick={handleCommentSubmit}
                        className="mt-2 w-full bg-green-600 text-white py-2 rounded-full"
                    >
                        Submit Feedback
                    </button>
                </div>

                {/* Display submitted comments below the form */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">User Comments</h3>
                    {commentsList.length > 0 ? (
                        <ul>
                            {commentsList.map((comment, index) => (
                                <li key={index} className="border-b py-2">
                                    <p className="font-semibold">{comment.user}</p>
                                    <p>{comment.text}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>
            </div>

           
        </div>
            <div className='mt-10 mb-10 w-full md:w-10/12 mx-auto'>
            <h2 className="text-3xl font-bold text-center mb-4">Upcoming Events</h2>
          
            <div className=" bg-white p-6 rounded-lg shadow-lg mt-6 gap-10 grid grid-cols-1 md:grid-cols-2">
        {/* Event 1 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            {/* Event Image */}
            <img 
                src={mental}
                alt="Mental Health Awareness" 
                className="w-full h-52 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-semibold">Mental Health Awareness</h3>
            <p className="text-gray-700">Date: December 15, 2024</p>
            <p className="text-gray-700">Time: 10:00 AM - 12:00 PM</p>
            <p className="text-gray-700">Location: Online</p>
            <div className="mt-4 text-center">
                <a 
                    href="#" 
                  className="w-full bg-red-500 font-bold text-white py-2 rounded-full inline-block"
                >
                    Register Now
                </a>
            </div>
        </div>

        {/* Event 2 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            {/* Event Image */}
            <img 
                src={well}
                alt="Wellness Workshop" 
                className="w-full h-52 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-semibold">Wellness Workshop</h3>
            <p className="text-gray-700">Date: January 10, 2025</p>
            <p className="text-gray-700">Time: 1:00 PM - 3:00 PM</p>
            <p className="text-gray-700">Location: City Hall, Downtown</p>
            <div className="mt-4 text-center">
                <a 
                    href="#" 
                   className="w-full bg-red-500 font-bold text-white py-2 rounded-full inline-block"
                >
                    Register Now
                </a>
            </div>
        </div>

        {/* Event 3 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            {/* Event Image */}
            <img 
            src={medi}
                alt="Mindfulness Meditation" 
                className="w-full h-52 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-semibold">Mindfulness Meditation</h3>
            <p className="text-gray-700">Date: February 5, 2025</p>
            <p className="text-gray-700">Time: 9:00 AM - 11:00 AM</p>
            <p className="text-gray-700">Location: Virtual</p>
            <div className="mt-4 text-center">
                <a 
                    href="#" 
                    className="w-full bg-red-500 font-bold text-white py-2 rounded-full inline-block"
                >
                    Register Now
                </a>
            </div>
        </div>

        {/* Event 4 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            {/* Event Image */}
            <img 
            src={self}
                alt="Self-Care Retreat" 
                className="w-full h-52 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-semibold">Self-Care Retreat</h3>
            <p className="text-gray-700">Date: March 20, 2025</p>
            <p className="text-gray-700">Time: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-700">Location: Mountain Resort</p>
            <div className="mt-4 text-center">
                <a 
                    href="#" 
                  className="w-full bg-red-500 font-bold text-white py-2 rounded-full inline-block"
                >
                    Register Now
                </a>
            </div>
    
    </div>
            </div>

            </div>
              

        <Footer></Footer>
        </div>

    );
};

export default Protectedlayout;
