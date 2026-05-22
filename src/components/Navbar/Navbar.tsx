import { motion } from 'framer-motion';
import styles from './navbar.module.css';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: { staggerChildren: 0.1 }
    }
};

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

                <motion.ul className={styles.navLinks} variants={staggerContainer} initial="initial" animate="animate">
                    <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="#home">Home</a>
                    </motion.li>

                    <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="#about">About</a>
                    </motion.li>

                    <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="#projects">Projects</a>
                    </motion.li>

                    <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="#contacts">Contacts</a>
                    </motion.li>
                </motion.ul>

            </motion.nav>
        </>
    )
}