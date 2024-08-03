import React from 'react';
import img from '../assats/Chartificate.jpeg'; // Ensure this path is correct
import { FaBirthdayCake, FaEnvelope, FaGlobe, FaGraduationCap, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const About = () => {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-blue-700">About</h1>
                <hr className="border-2 border-green-600 w-20 mb-5" />
            </div>
            <div className="text-lg mb-8">
                Industrial Automation Engineer with 12+ years of experience in Industrial Automation, Software Engineering, Machine Design, and new innovation. Graduation from University Of Development Alternative, Dhaka-Bangladesh. Seeking to leverage IoT, IIoT, IR4, Machine Design expertise, Visual Studio expertise, SIEMENS Industrial Technology, leadership ability, and Industrial Solution (Both Hardware and Software) competency in the role of Senior Engineer.
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start">
                    <img src={img} alt="Engineer" className="rounded-lg shadow-md w-full lg:w-auto" />
                </div>
                <div className="lg:w-2/3 lg:pl-12">
                    <div className="text-3xl font-bold mb-2">Industrial Automation & Embedded System Engineer</div>
                    <div className="text-sm text-gray-600 mb-8">Here is some of my personal information</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <FaBirthdayCake className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold">Birthday:</span><span className="ml-3">03 Oct</span>
                        </div>
                        <div className="flex items-center">
                            <FaGlobe className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold">Website:</span><span className="ml-3">www.Example.com</span>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold">Phone:</span><span className="ml-3">+88 017 55 94 33 15</span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold">City:</span><span className="ml-3">Mirpur-Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center">
                            <FaGraduationCap className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold">Degree:</span><span className="ml-3">B.Sc in ETE</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold">Email:</span><span className="ml-3">mamunurrushd60@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
