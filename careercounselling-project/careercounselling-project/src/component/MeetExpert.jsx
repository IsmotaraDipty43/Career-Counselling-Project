
import React from 'react';
import male1 from '../assets/male1.jpg'
import male2 from '../assets/mal2.png'
import male3 from '../assets/male3.png'
import female from '../assets/femal1.png'
import female2 from '../assets/female2.jpg'
import male4 from '../assets/male4.png'
  
const MeetExpert = () => {
    return (
        <div className="lg:mt-20 mt-10 mb-10 lg:mb-20">
          <div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
            <h1 className="text-[#2d524b] font-bold text-2xl md:text-3xl lg:text-4xl text-center">
              Meet Our Expert
            </h1>
            <p className="text-[#2d524b] text-opacity-70 text-center font-semibold text-lg lg:text-xl">
              World-Class Excellence, Always Within Your Reach
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center p-5 mt-5 mb-5">
            {/* Expert 1 */}
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border p-4">
              <img
                src={female2}
                alt="Dr. Elizabeth Carter"
                className="w-full h-52  rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">Dr. Elizabeth Carter</h2>
                <p className="text-sm text-gray-600 mt-1">Senior Career Strategist</p>
                <p className="mt-4 text-gray-700">
                  <span className="font-bold">Expertise:</span> Corporate Career Development
                </p>
                <p>
                  <span className="font-bold">Qualifications:</span> PhD in Organizational Psychology, Certified Career Coach (CCC)
                </p>
                <p>
                  <span className="font-bold">Experience:</span> 12+ years guiding professionals in Fortune 500 companies
                </p>
                <p>
                  <span className="font-bold">Specialization:</span> Leadership development, executive coaching, and career transitions
                </p>
              </div>
            </div>
    
            {/* Expert 2 */}
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border p-4">
              <img
                src={male1}
                alt="Michael Thompson"
                className="w-full h-52 rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">Michael Thompson</h2>
                <p className="text-sm text-gray-600 mt-1">Career Counselor for Students & Early Careers</p>
                <p className="mt-4 text-gray-700">
                  <span className="font-bold">Expertise:</span> Academic and Career Path Planning
                </p>
                <p>
                  <span className="font-bold">Qualifications:</span> Master’s in Education, Licensed Career Advisor (LCA)
                </p>
                <p>
                  <span className="font-bold">Experience:</span> 10 years working with high school and college students
                </p>
                <p>
                  <span className="font-bold">Specialization:</span> Scholarship guidance, resume building, and interview preparation
                </p>
              </div>
            </div>
    
            {/* Expert 3 */}
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border p-4">
              <img
                src={female}
                alt="Sofia Martinez"
                className="w-full h-52  rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">Sofia Martinez</h2>
                <p className="text-sm text-gray-600 mt-1">Mental Health and Career Wellbeing Advisor</p>
                <p className="mt-4 text-gray-700">
                  <span className="font-bold">Expertise:</span> Career Stress Management
                </p>
                <p>
                  <span className="font-bold">Qualifications:</span> Licensed Psychologist (LP), MA in Counseling Psychology
                </p>
                <p>
                  <span className="font-bold">Experience:</span> 8 years in career counseling and mental health support
                </p>
                <p>
                  <span className="font-bold">Specialization:</span> Work-life balance, overcoming career burnout, and building confidence
                </p>
              </div>
            </div>
    
            {/* Expert 4 */}
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border p-4">
              <img
                src={male2}
                alt="Rajesh Kapoor"
                className="w-full h-52 rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">Rajesh Kapoor</h2>
                <p className="text-sm text-gray-600 mt-1">Industry Networking Consultant</p>
                <p className="mt-4 text-gray-700">
                  <span className="font-bold">Expertise:</span> Career Networking and Job Market Strategies
                </p>
                <p>
                  <span className="font-bold">Qualifications:</span> MBA in Human Resources, Certified HR Specialist
                </p>
                <p>
                  <span className="font-bold">Experience:</span> 15+ years in recruitment and talent management
                </p>
                <p>
                  <span className="font-bold">Specialization:</span> Job market strategies, building professional connections, and networking
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border p-4">
  <img
    src={male3}
    alt="David Walker"
    className="w-full h-52 rounded-t-xl"
  />
  <div className="p-4">
    <h2 className="text-xl font-bold text-gray-800">David Walker</h2>
    <p className="text-sm text-gray-600 mt-1">Global Career Strategist</p>
    <p className="mt-4 text-gray-700">
      <span className="font-bold">Expertise:</span> International Career Opportunities
    </p>
    <p>
      <span className="font-bold">Qualifications:</span> MSc in International Relations, Certified Career Consultant
    </p>
    <p>
      <span className="font-bold">Experience:</span> 10+ years advising on global job markets and opportunities
    </p>
    <p>
      <span className="font-bold">Specialization:</span> Visa guidance, cross-cultural communication, and international job placement
    </p>
  </div>
</div>

{/* Expert 6 */}
<div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border p-4">
  <img
    src={male4}
    alt="Ethan Williams"
    className="w-full h-52 rounded-t-xl"
  />
  <div className="p-4">
    <h2 className="text-xl font-bold text-gray-800">Ethan Williams</h2>
    <p className="text-sm text-gray-600 mt-1">Executive Career Coach</p>
    <p className="mt-4 text-gray-700">
      <span className="font-bold">Expertise:</span> Executive Leadership and Career Development
    </p>
    <p>
      <span className="font-bold">Qualifications:</span> MA in Business Administration, Certified Executive Coach
    </p>
    <p>
      <span className="font-bold">Experience:</span> 12+ years coaching C-suite executives and senior leaders
    </p>
    <p>
      <span className="font-bold">Specialization:</span> Leadership coaching, career development for senior executives, and organizational strategy
    </p>
  </div>
</div>


          </div>

          </div>
    
       
        </div>
      );
    };

export default MeetExpert;