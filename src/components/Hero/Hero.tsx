import { motion } from 'framer-motion';
import styles from './hero.module.css';

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

export const Hero = () => {
    return (
        <motion.section id="home" className={styles.hero} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className={styles['hero-container']}>
                <motion.div className={styles['hero-content']} variants={staggerContainer} initial="initial" animate="animate">
                    <motion.div className={styles['hero-badge']} >
                        <span>
                            👋 Hello I'm
                        </span>
                    </motion.div>
                    <motion.h1 className={styles['glitch']} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                        Kristian Yordanov
                    </motion.h1>
                    <motion.h2 className={styles['hero-subtitle']}>
                        Full-Stack JavaScript Developer
                    </motion.h2>
                </motion.div>
            </div>
        </motion.section>
    )
}