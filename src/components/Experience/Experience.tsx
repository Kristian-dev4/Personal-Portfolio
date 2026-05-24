import { motion } from "framer-motion";
import styles from "./experience.module.css";
import { animations } from '../../utils/animations';

export const Experience = () => {
    return (
        <motion.section id='experience' className={styles['experiences']} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.h2 className={styles['section-title']} variants={animations.fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                Experience
            </motion.h2>

            <motion.div className={styles['experience-grid']} variants={animations.staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>

                <motion.div className={styles['experience-card']} whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }} variants={animations.fadeInUp}>

                    <h3>No working experience yet</h3>
                    {/*
                    <p className={styles['experience-details']}>Company Name</p>
                    <p className={styles['experience-details']}>2020 - Present</p>
                    <p className={styles['experience-details']}>Bulgaria</p> */}
                    <p>
                        {/* Meme Maker is a fun and interactive web application that allows users to create, edit, save and share hilarious memes effortlessly!
                        Built with modern web technologies, it provides a seamless user experience for meme enthusiasts. */}
                    </p>
                    <div className={styles['experience-tech']}>
                        {/* <span>React</span>
                        <span>Back4App</span>
                        <span>AntDesign</span> */}
                    </div>
                </motion.div>

            </motion.div>
        </motion.section >
    )
}