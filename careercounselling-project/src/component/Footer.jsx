import React from 'react';
import logo from '../assets/icon.png'

const Footer = () => {
    return (
        <div className=' bg-neutral'>
            <footer className="footer w-10/12 mx-auto text-neutral-content  p-10">
  <nav className='text-white font-semibold'>
  <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
  <img src={logo} className = 'w-12 h-12' alt="" />
  <h1 className='text-xl font-bold text-white'>Career Pathway</h1>
  </div>
  <a href="mailto:career@counseling.com" className="link link-hover">career@counseling.com</a>
  <a href="tel:+1234567890" className="link link-hover">+1 234 567 890</a>
  </nav>
  <nav className='text-white font-semibold'>
  <h6 className="footer-title">Career Counseling</h6>
  <a className="link link-hover">Our Services</a>
  <a className="link link-hover">Meet Our Experts</a>
  <a className="link link-hover">Success Stories</a>
  <a className="link link-hover">FAQs</a>
</nav>
<nav className='text-white font-semibold '>
  <h6 className="footer-title">Legal</h6>
  <a className="link link-hover">Terms of Service</a>
  <a className="link link-hover">Privacy Policy</a>
  <a className="link link-hover">Cookie Policy</a>
</nav>

</footer>
        </div>
    );
};

export default Footer;