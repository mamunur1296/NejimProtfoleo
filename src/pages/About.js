import React from 'react';
import img from '../assats/profile.jpg'; // Ensure this path is correct
const About = () => {
    return (
        <div className="p-8">
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-blue-700">About</h1>
            <hr className="border-2 border-green-600 w-20 mb-5 font-bold" />
        </div>
        <div className="text-lg mb-8">
          Industrial Automation Engineer with 12+ years of experience in Industrial Automation, Software Engineering, Machine Design, and new innovation. Graduation from University Of Development Alternative, Dhaka-Bangladesh. Seeking to leverage IoT, IIoT, IR4, Machine Design expertise, Visual Studio expertise, SIEMENS Industrial Technology, leadership ability, and Industrial Solution (Both Hardware and Software) competency in the role of Senior Engineer.
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img src={img} alt="Engineer" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="lg:w-2/3 lg:pl-12">
            <div className="text-3xl font-bold mb-2">Industrial Automation & Embedded System Engineer.</div>
            <div className="text-sm text-gray-600 mb-8">Here is some of my personal information</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center">
                  
                  <span className="font-bold">Birthday:</span><span className='ms-3'>03 Oct</span>
                </div>
               
              </div>
              <div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 17.93v-2.13c0-.28-.11-.53-.29-.71s-.44-.29-.71-.29h-2c-.27 0-.52.11-.71.29s-.29.43-.29.71v2.13c-3.39-.49-6-3.39-6-6.93 0-.27.11-.52.29-.71l.71-.71c.19-.18.44-.29.71-.29h2c.27 0 .52-.11.71-.29s.29-.44.29-.71v-2c0-.27-.11-.52-.29-.71l-.71-.71c-.18-.19-.29-.44-.29-.71 0-.27.11-.52.29-.71l2.71-2.71c.19-.18.44-.29.71-.29s.52.11.71.29l.71.71c.18.19.44.29.71.29h2c.27 0 .52-.11.71-.29s.29-.44.29-.71v-2c.27 0 .52-.11.71-.29l.71-.71c.18-.19.29-.44.29-.71s-.11-.52-.29-.71c0-3.39 3.39-6 6-6.93z"/></svg>
                  <span className="font-bold">Website:</span>
                </div>
                <div>www.zitu.info</div>
              </div>
              <div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c3.87 0 7 3.13 7 7h-2c0-2.75-2.25-5-5-5h-2c-2.75 0-5 2.25-5 5h-2c0-3.87 3.13-7 7-7zm-8-1c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c3.87 0 7 3.13 7 7h-2c0-2.75-2.25-5-5-5h-2c-2.75 0-5 2.25-5 5h-2c0-3.87 3.13-7 7-7z"/></svg>
                  <span className="font-bold">Phone:</span>
                </div>
                <div>+88 017 55 94 33 15</div>
              </div>
              <div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7.77c.44 0 .87-.07 1.27-.19.29-.08.55-.33.55-.63v-5.33c0-.26-.2-.47-.47-.47h-2.71c-.26 0-.47.2-.47.47v5.33c0 .29.26.55.55.63.39.12.82.19 1.27.19zm0-7.27c-3.98 0-7 3.02-7 7 0 4.42 4.88 10.14 6.23 11.75.49.62 1.48.62 1.96 0 1.34-1.61 6.23-7.33 6.23-11.75 0-3.98-3.02-7-7-7zm0 15.54c-.82 0-1.47-.66-1.47-1.47 0-.81.66-1.47 1.47-1.47s1.47.66 1.47 1.47c0 .81-.66 1.47-1.47 1.47z"/></svg>
                  <span className="font-bold">City:</span>
                </div>
                <div>Mirpur-Dhaka, Bangladesh</div>
              </div>
              <div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 17.93v-2.13c0-.28-.11-.53-.29-.71s-.44-.29-.71-.29h-2c-.27 0-.52.11-.71.29s-.29.43-.29.71v2.13c-3.39-.49-6-3.39-6-6.93 0-.27.11-.52.29-.71l.71-.71c.19-.18.44-.29.71-.29h2c.27 0 .52-.11.71-.29s.29-.44.29-.71v-2c0-.27-.11-.52-.29-.71l-.71-.71c-.18-.19-.29-.44-.29-.71 0-.27.11-.52.29-.71l2.71-2.71c.19-.18.44-.29.71-.29s.52.11.71.29l.71.71c.18.19.44.29.71.29h2c.27 0 .52-.11.71-.29s.29-.44.29-.71v-2c.27 0 .52-.11.71-.29l.71-.71c.18-.19.29-.44.29-.71s-.11-.52-.29-.71c0-3.39 3.39-6 6-6.93z"/></svg>
                  <span className="font-bold">Degree:</span>
                </div>
                <div>B.Sc in ETE</div>
              </div>
              <div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c3.87 0 7 3.13 7 7h-2c0-2.75-2.25-5-5-5h-2c-2.75 0-5 2.25-5 5h-2c0-3.87 3.13-7 7-7zm-8-1c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c3.87 0 7 3.13 7 7h-2c0-2.75-2.25-5-5-5h-2c-2.75 0-5 2.25-5 5h-2c0-3.87 3.13-7 7-7z"/></svg>
                  <span className="font-bold">Email:</span>
                </div>
                <div>engr.zitu@yahoo.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;
