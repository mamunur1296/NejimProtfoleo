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

          <p className="mb-4">Richmond, Virginia</p>
          <p className="mb-4">Email: rpanezam@gmail.com</p>
          <p className="mb-4">Phone: +1 (804) 637-1698</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.2567030206464!2d-77.44165048483897!3d37.54072477980357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111210c12b97d%3A0xadc69b5a64ac2bb0!2sRichmond%2C%20VA%2C%20USA!5e0!3m2!1sen!2sus!4v1690737499421!5m2!1sen!2sus"
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: '0' }}
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
