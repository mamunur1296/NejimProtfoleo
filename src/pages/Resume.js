import React from 'react'
import img from '../assats/profile.jpg';
import { FaCircle } from 'react-icons/fa';
import QAEngineer from './ProjectExpriance/QAEngineer';
import RPADeveloper from './ProjectExpriance/RPADeveloper';
import RPASupportDeveloper from './ProjectExpriance/RPASupportDeveloper';
import SDETEngineer from './ProjectExpriance/SDETEngineer';
import QAAnalyst from './ProjectExpriance/QAAnalyst';
import PHPDeveloper from './ProjectExpriance/PHPDeveloper';
const Resume = () => {
    return (
        <div class="bg-gray-100">
            <div class="container mx-auto bg-white   rounded-lg shadow-lg">
                <div className="p-6 bg-gray-200 flex flex-col md:flex-row items-center">
                    <img
                        src={img}
                        alt="Profile"
                        className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-gray-300"
                    />
                    <div className="mt-4 md:mt-0 md:ml-6 ">
                        <h1 className=" text-center md:text-left text-xl md:text-2xl lg:text-3xl font-bold">Nezam Uddin</h1>
                        <h2 className=" text-center md:text-left text-lg md:text-xl lg:text-2xl">US CITIZEN</h2>
                        <p className=" text-center md:text-left text-sm md:text-base lg:text-lg text-gray-600">804-893-0499, 804-637-1698</p>
                        <p className=" text-center md:text-left text-sm md:text-base lg:text-lg text-gray-600">Email: rpanezam@gmail.com</p>
                    </div>

                </div>

                <div className="p-6">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold border-b border-gray-800 pb-2 mb-4">
                        Summary
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base text-gray-700">
                        Result-oriented technical professional with <span className="font-bold">8+ years</span>  hands-on experience in the field of Information Technology and
                        Retail, Financial, and Health Care industry. Certified RPA Developer specializing in UiPath with about <span className="font-bold">5 years</span>  of hands-on
                        experience in all stages of the automation cycle. Strong background in project management and customer
                        relations.
                    </p>
                </div>

                <div className="p-6">
                    <h2 className="text-xl font-semibold border-b border-gray-800 pb-2 mb-4">Professional Summary</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Good experience in analyzing client’s processes and identifying Automation opportunities and doing Feasibility
                                analysis with various stages of SDLC including requirement gathering.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Created end to end automation process fer clients as per the requirement which involves feasibility, Designing,
                                developing, testing workflows within the estimated SLA.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Experience in coordinating the activities across the test regions like QA, UAT and Pre-Production and
                                Production


                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Automated around 22 Manual Process Automations without manual intervention and extensive hands-on
                                experience in Process studio, Object studio, different kinds of automations such as web, mainframe, and
                                surface automation in blue prism
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Strong Knowledge on scheduling, monitoring, and running all the processes in control room without manual
                                intervention.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Experience working in a fast-paced Agile Development Environment. Building RPA solutions using UiPath
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Worked with team for UAT testing and worked closely with the business team.

                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Good experience in testing coordination between offshore and onshore, multiple vendors in larger projects, and
                                worked as escalation point of contact.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Worked with different teams to make changes in development processes as per the Process Design Document
                                (PDD). Involved in SDD and PDD preparation to meet the end customer requirements.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Worked on different Environments like, Windows Application, Web Application, Email automation, Excel
                                automation, & PDF Automation etc.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Experience using different UiPath techniques like Screen Scrapping, Data Scrapping, OCR engine, Recordings,
                                Explorer, Selector, Queues, OCR, Computer Vision, Document Processing etc. to automate complex processes.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Having excellent logical ability and systematic approach to problem solving analysis and ability to handle
                                Exception Handlings. Debugging the workflow/tasks, finding the bugs using error handlers and fixing them in
                                minimal time.

                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Creating and documenting test procedures and scenarios for the pre-UAT phases Supporting the Operational
                                Teams during the UAT to address assigned bugs and roll out phases.

                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Skilled in conceptualizing and implementing FTE savings on automation processes and partnering closely with
                                business leaders
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Supporting existing processes and implementing change requirements as part of a structured change control
                                process requested by clients as CR.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Problem solving issues that arise in day to day running of RA processes and providing timely responses and
                                solutions as required.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Experience on the UiPath Orchestrator for the staging, deployment, monitoring, and management of the UiPath
                                Robot automation business.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Demonstrated ability in problem solving & learning new technologies quickly & effectively.
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                100% Agile approach on DevOps, extensively involved in PI planning, Sprint planning, Product/Sprint backlog,
                                Daily stand up, Grooming, User Stories DEMO, Retrospective
                            </span>
                        </li>
                        <li className="flex justify-cente">
                            <span className="me-5 mt-2.5">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                To achieve high career growth through a continuous learning process, keep myself dynamic, visionary, and
                                competitive with the changing scenario of the world and to contribute for the growth of organization
                            </span>
                        </li>
                    </ul>

                </div>
                <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-semibold border-b border-gray-800 pb-2 mb-4">
                        Employment History
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Working as <span className="font-bold">RPA Developer</span> at Virginia Credit Union, Midlothian, VA from <span className="font-bold">Mar 2019-Till Now.</span>
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Working as SDET Engineer at Sun Trust Bank, Owings Mills, MD from Mar 2018-Feb 2019
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Working as QA Engineer at Cigna, Hartford, Connecticut from Aug 2017 - Mar 2018
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Worked as Business System Analyst at Care Centrix, Hartford, Connecticut from Dec 2016 - July 2017
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Worked as Junior PHP Developer at Enosis Solutions, Dhaka from Mar 2016 - Nov 2016
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-semibold border-b border-gray-800 pb-2 mb-4">
                        Certification
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        UiPath Developer Advanced Certification <span className="font-bold">(UiArd)</span>
                                    </div>
                                    <div className="col-span-1 text-end md:text-start font-medium">
                                        <span className="md:ms-4 lg:ms-10">--UiPath</span>
                                    </div>
                                </div>
                            </span>
                        </li>
                        
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        CompTIA <span className="font-bold">Security+</span> Certification
                                    </div>
                                    <div className="col-span-1 text-end md:text-start font-medium">
                                        <span className="md:ms-4 lg:ms-10">--CompTIA</span>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        NSE 1 The Threat Landscape
                                    </div>
                                    <div className="col-span-1 text-end md:text-start font-medium">
                                        <span className="md:ms-4 lg:ms-10">--Fortinet</span>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        NSE 2 The Fortinet Security <span className="font-bold">Fabric</span>
                                    </div>
                                    <div className="col-span-1 text-end md:text-start font-medium">
                                        <span className="md:ms-4 lg:ms-10">--Fortinet</span>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        NSE 3 Network Security Associate
                                    </div>
                                    <div className="col-span-1 text-end md:text-start font-medium">
                                        <span className="md:ms-4 lg:ms-10">--Fortinet</span>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        Certified Advanced RPA Professional <span className="font-bold">(Automation 360)</span>
                                    </div>
                                    <div className="col-span-1 text-end md:text-start font-medium">
                                        <span className="md:ms-4 lg:ms-10">--Automation Anywhere </span>
                                    </div>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-semibold border-b border-gray-800 pb-2 mb-4">
                        Educational Qualifications
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                Completed Master of Science in Information system from Stratford University, Virginia, USA

                            </span>
                        </li>
                    </ul>
                </div>
                <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-semibold border-b border-gray-800 pb-2 mb-4">
                        Domain Knowledge
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                <span className="font-bold">Banking:</span> Virginia Credit Union, Sun Trust Bank
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                <span className="font-bold">Insurance:</span> Cigna
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                <span className="font-bold">HealthCare: </span>CareCentrix
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="me-5 mt-2.5 text-xs md:text-sm lg:text-base">
                                <FaCircle className="text-[6px] " />
                            </span>
                            <span className="text-xs md:text-sm lg:text-base">
                                <span className="font-bold">Retail:</span>  Enosis Solutions
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-semibold border-b border-gray-800 pb-2 mb-4">
                        Technical Proficiency
                    </h2>
                    {/* <thead class="bg-gray-200">
                                <tr>
                                    <th class=" font-bold px-4 py-2 text-left font-semibold text-gray-700 border-b  text-xs md:text-sm lg:text-base">Category</th>
                                    <th class=" font-bold px-4 py-2 text-left font-semibold text-gray-700 border-b  text-xs md:text-sm lg:text-base">Details</th>
                                </tr>
                            </thead> */}
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-black text-sm">
                            <tbody>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4  py-2 border-b border-black text-xs md:text-sm lg:text-base">SDLC Methodologies</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">DevOps-Agile/Scrum Master and Kanban</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">RPA Tools</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">UiPath Studio, Automation Anywhere</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e  px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Frameworks/Open Source</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">ReFramwork, AI Center, Insights, Uipath App, Automation Hub, Document understanding, Task Capture, Data Service, Test Manager, Task Mining, Marketplace, Uipath Integration Services.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Language</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Java, C, C++, C#, JavaScript, jQuery, SQL, HTML, CSS, XML, JMeter BootStrap, PHP, Visual Basic, Python.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Databases tools</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">SQL* Plus, Toad, Oracle 10g,11g, Sybase, Microsoft SQL Server2008, 2008 R2, My SQL, 2012, SQL-Developer, Teradata SQL Assistant, Squirrel SQL Client, AS 400, OS 400, DB2, MSSQL, RDBMS.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Test Automation tools</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Log4j, Extent report, Allure Report, Jenkins.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Test Framework</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">JUnit, TestNG, Cucumber, Katalon, Test Controler, NUnit, XUnit, Specflow.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Web element locator</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Xpath, CSS selector, DOM, Json and JavaScript.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Management Tools</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Jira, Zephyr, Zapi, Confluence, HP ALM, MS TFS.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">App & Browser Testing</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">BrowserStack.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Web Debugging tools</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Chro-Path, Xpath Finder, Firebug.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Version Control</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Github, TFS, BitBucket.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Tools and Protocols</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">TCP/IP, FTP, SFTP, WSDL, SMTP, POP3, IMAP.</td>
                                </tr>
                                <tr class="border-t border-black">
                                    <td class="font-bold border-e px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">CI/CD Pipelines</td>
                                    <td class="px-4 py-2 border-b border-black text-xs md:text-sm lg:text-base">Jennkins, Azure Devops.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>





                </div>

                <RPADeveloper />
                <RPASupportDeveloper />
                <SDETEngineer />
                <QAEngineer />

                <QAAnalyst />
                <PHPDeveloper />


            </div>
        </div>
    )
}
export default Resume;