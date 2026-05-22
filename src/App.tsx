/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Contacts } from "./components/Navbar/Hero/Contacts/Contacts"
import { Hero } from "./components/Navbar/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects"

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, [])

    return (
        <div className="app">
            <Navbar />

            <Hero />

            <Projects />

            <Contacts />

            <>
                <footer className="footer">
                    <p> &copy; 2026 My Portfolio. All rights reserved.</p>
                </footer>
            </>
        </div>
    )
}

export default App
