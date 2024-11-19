import React from 'react';
import about from '../assets/about.jpg'
import Footer from '../component/Footer';
import Navbber from '../component/Navbber';
import {Helmet} from "react-helmet";
const AboutUs = () => {
    return (
        <div>
             <Helmet>
              
              <title>Career Pathway || About</title>
             
          </Helmet>
            <Navbber></Navbber>
            <div className="mt-10 lg:mt-20 mb-10 px-4 lg:px-20">
          <h1 className="text-3xl lg:text-4xl font-bold text-center text-[#2d524b]">
            About Us
          </h1>
          <p className="text-lg lg:text-xl text-center text-[#2d524b] text-opacity-80 mt-4">
            Learn more about our journey and commitment to excellence.
          </p>
    
          <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Left Section: Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={about}
                alt="About Us" 
                className="rounded-lg h-[600px] shadow-xl w-full"
              />
            </div>
    
            {/* Right Section: Content */}
            <div className="w-full lg:w-1/2">
  <h2 className="text-2xl font-semibold text-[#2d524b]">Our Mission</h2>
  <p className="text-gray-700 mt-4 leading-relaxed">
    At our core, we aim to empower and inspire. Our mission is to bring meaningful
    change by providing exceptional services and fostering a community built on
    trust, collaboration, and innovation.
  </p>

  <h2 className="text-2xl font-semibold text-[#2d524b] mt-6">Why Choose Us</h2>
  <p className="text-gray-700 mt-4 leading-relaxed">
    With a dedicated team and a relentless drive to succeed, we offer a platform
    that combines passion and expertise. Our commitment to quality ensures that we
    consistently exceed expectations.
  </p>

  <h2 className="text-2xl font-semibold text-[#2d524b] mt-6">Frequently Asked Questions</h2>
  <div className="join join-vertical w-full mt-4">
    {/* FAQ 1 */}
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="faq-accordion" defaultChecked />
      <div className="collapse-title text-xl font-medium">What is our mission?</div>
      <div className="collapse-content">
        <p>
          Our mission is to empower and inspire by delivering exceptional services
          and fostering a community built on trust and collaboration.
        </p>
      </div>
    </div>
    {/* FAQ 2 */}
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="faq-accordion" />
      <div className="collapse-title text-xl font-medium">Why should you choose us?</div>
      <div className="collapse-content">
        <p>
          We offer a platform that combines passion, expertise, and an unwavering
          commitment to quality, ensuring your experience exceeds expectations.
        </p>
      </div>
    </div>
    {/* FAQ 3 */}
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="faq-accordion" />
      <div className="collapse-title text-xl font-medium">How can you get involved?</div>
      <div className="collapse-content">
        <p>
          You can get involved by exploring our services, reaching out to us for
          collaborations, and joining our growing community.
        </p>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
        <Footer></Footer>
        </div>
      );
    };
export default AboutUs;