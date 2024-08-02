import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"/",
                element:<About />
            },
            {
                path:"/Resume",
                element:<Resume />
            },
            {
                path:"/Portfolio",
                element:<Portfolio />
            },
            {
                path:"/Services",
                element:<Services />
            },
            {
                path:"/Contact",
                element:<Contact />
            }
        
        ]
    }
]);