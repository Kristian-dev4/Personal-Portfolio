/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects";
import { Hero } from "./components/Hero/Hero";
import { Contacts } from "./components/Contacts/Contacts";
import { motion } from "framer-motion";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, [])

    return (
        <div className={`app ${isLoaded ? "loaded" : ""}`}>
            <Navbar />

            <Hero />

            <Projects />

            <Contacts />

            <>
                <motion.footer className="footer">
                    <p> &copy; 2026 My Portfolio. All rights reserved.</p>
                </motion.footer>
            </>
        </div>
    )
}

export default App
