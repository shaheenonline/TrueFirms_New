import React from 'react';
import './App.css';

function Contact () {
  return (
    <section id='contact' className='pb-5'>
      <div className="flex justify-center items-center">
        <div className='bg-[url("../public/contact.png")] bg-cover bg-center sm:h-60 w-full flex items-center justify-between flex-wrap sm:pl-20 px-5 py-5'>
          <div className='text-white'>
            <h2 className='text-2xl sm:text-5xl font-bold'>Create a Company Profile</h2>
            <h4 className='text-sm sm:text-xl sm:w-[70%] sm:py-5 py-3'>Increase Your Brand’s Visibility, Showcase Credibility, And Build Trust With TrueFirms Claim Your Free Listing!</h4>
          </div>
          <div className="mb-0 md:mb-2 md:mr-auto">
            <button
              type="submit"
              className="inline-block rounded-full px-3 py-2 sm:px-6 sm:py-3 sm:text-sm text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out bg-orangeColor hover:shadow-lg hover:shadow-ShadowColor"
              data-te-ripple-init
              data-te-ripple-color="light">
              Claim Your FREE Listing!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;