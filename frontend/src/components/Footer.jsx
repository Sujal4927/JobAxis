import React from 'react'
import facebook from '../assets/facebook.png';
import x from '../assets/x.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md-4 md:mb-8">
            <h2 className="text-xl font-bold">JobAxis</h2>
            <p className='text-sm'>© 2026 JobAxis. All rights reserved. </p>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/">
              <img className='w-6 h-6' src={facebook} alt="" />
            </a>
            <a href="https://x.com/">
              <img className='w-6 h-6 rounded-full' src={x} alt="" />
            </a>
            <a href="https://in.linkedin.com/">
              <img className='w-6 h-6 rounded-full' src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
