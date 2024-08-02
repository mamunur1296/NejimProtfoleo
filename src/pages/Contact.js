import React from 'react';

const Contact = () => {
  return (
    <div className="section w-full  h-screen flex flex-col  justify-start  ">
      <div class="mb-8 p-8 ">
            <h1 class="text-3xl font-bold text-blue-700">Contact Us</h1>
            <hr className="border-2 border-green-600 w-20 mb-5 font-bold" />
        </div>
      <div className="flex flex-wrap w-full   rounded-lg ">
        {/* Left Side */}
        <div className="w-full md:w-1/2  p-8">
          <h2 className="text-2xl font-bold mb-4">Our Address</h2>
          <p className="mb-4">123 Main Street, Suite 500</p>
          <p className="mb-4">City, State, 12345</p>
          <p className="mb-4">Email: contact@example.com</p>
          <p className="mb-4">Phone: +1 (555) 123-4567</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099296!2d144.95373631531685!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774d0bb7c2e5f!2sGoogle!5e0!3m2!1sen!2sau!4v1595853023510!5m2!1sen!2sau"
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8">
          <form className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
