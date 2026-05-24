import { motion } from 'framer-motion';
import styles from './navbar.module.css';
import { animations } from '../../utils/animations';

export const Navbar = () => {
    return (
        <>
            <motion.nav className={styles.navbar}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
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