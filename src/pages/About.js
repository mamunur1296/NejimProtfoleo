import React from 'react';
import img from '../assats/Chartificate.jpeg'; // Ensure this path is correct
import { FaEnvelope, FaGlobe, FaGraduationCap, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const About = () => {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-blue-700">About</h1>
                <hr className="border-2 border-green-600 w-20 mb-5" />
            </div>
            <div className=" text-justify text-lg mb-8  text-xs md:text-sm lg:text-base">
                Experienced software engineer with 8+ years of expertise in Robotic Process Automation (RPA), specializing in UiPath for over 5 years, across various domains including Retail, Financial, and Health Care industries. Adept at designing and implementing test automation frameworks, writing code in multiple languages, and developing innovative solutions to complex engineering problems. Possesses comprehensive knowledge in handling all aspects of the intelligent robotic process cycle, including Windows, Web, Email, Excel, Citrix (Computer Vision), Terminal, SAP, and PDF-based unstructured image processing.
                <br />
                <br />
                Skilled in customizing machine learning models, has successfully implemented over 22 attended and unattended processes within a custom Reframework that ensures minimal maintenance and exceeds client expectations. Proven ability to coordinate development and testing between offshore and onshore teams, manage multiple vendors in large-scale projects, and serve as an escalation point of contact.
                <br />
                <br />

                Expert in preparing Process Design Documents (PDD) and Solution Design Documents (SDD) to meet customer requirements, and proficient in achieving FTE savings through automation processes. Committed to supporting existing processes, implementing change requirements as part of a structured change control process, and resolving issues promptly to ensure smooth RA process operations. Experienced in using UiPath Orchestrator for staging, deployment, monitoring, and managing automation business processes.
                <br />
                <br />
                Dedicated to continuous learning and professional growth, with a vision to contribute significantly to organizational success in a dynamic and evolving industry landscape.
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start">
                    <a href='https://credentials.uipath.com/3bb75fa6-5e52-4d75-86b8-7fbf0b6c8522#gs.dnxsg9'>
                    <img src={img} alt="Engineer" className="rounded-lg shadow-md w-full lg:w-auto" />
                    </a>
                </div>
                <div className="lg:w-2/3 lg:pl-12">
                    <div className=" font-bold mb-2 text-xs md:text-sm lg:text-3xl">Sr. RPA DEVELOPER (AI/ML) <br /> UiPath Advanced RPA Developer Certified (UiARD)




                    </div>
                    <div className="text-sm text-gray-600 mb-8 text-xs md:text-sm lg:text-base">Here is some of my personal information</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        <div className="flex items-center">
                            <FaGlobe className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold text-xs md:text-sm lg:text-base">Website:</span><span className="ml-3 text-xs md:text-sm lg:text-base">http://nezam-uddin.org</span>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold text-xs md:text-sm lg:text-base">Phone:</span><span className="ml-3 text-xs md:text-sm lg:text-base">+1804-637-1698</span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold text-xs md:text-sm lg:text-base">City:</span><span className="ml-3 text-xs md:text-sm lg:text-base">Richmond, Virginia</span>
                        </div>
                        <div className="flex items-center">
                            <FaGraduationCap className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold text-xs md:text-sm lg:text-base">Degree:</span><span className="ml-3 text-xs md:text-sm lg:text-base">M.Sc in information System and Technology, Stratford University, Virginia, USA</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-bold text-xs md:text-sm lg:text-base">Email:</span><span className="ml-3 text-xs md:text-sm lg:text-base">rpanezam@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
