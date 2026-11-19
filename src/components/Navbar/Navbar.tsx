import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './navbar.module.css';
import { animations } from '../../utils/animations';

export const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const previousScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - previousScrollY.current;

            if (Math.abs(scrollDelta) > 5) {
                setIsVisible(currentScrollY <= 10 || scrollDelta < 0);
                previousScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav className={styles.navbar}
                initial={false}
                animate={{ y: isVisible ? '0%' : '-100%' }}
                transition={{ duration: 0.6, ease: "easeOut" }} >
                <motion.div className={styles.logo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Portfolio
                </motion.div>

                <motion.ul className={styles.navLinks} variants={animations.staggerContainer} initial="initial" animate="animate">
                    <motion.li variants={animations.fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="#home">Home</a>
                    </motion.li>

                    <motion.li variants={animations.fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="#projects">Projects</a>
                    </motion.li>

                    <motion.li variants={animations.fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="#experience">Experience</a>
                    </motion.li>

                    <motion.li variants={animations.fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="#education">Education</a>
                    </motion.li>

                    <motion.li variants={animations.fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="#contacts">Contacts</a>
                    </motion.li>
                </motion.ul>

            </motion.nav>
        </>
    )
}