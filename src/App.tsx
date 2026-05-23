/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects";
import { Hero } from "./components/Hero/Hero";
import { Contacts } from "./components/Contacts/Contacts";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, [])

    return (
        <div className={`app ${isLoaded ? "loaded" : ""}`}>
            <Navbar />

            <Hero />

            <Projects />

            <Contacts />

            <motion.footer
                className="footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <p> &copy;2026 Kristian. All rights reserved.</p>
            </motion.footer>

        </div>
    )
}

export default App
