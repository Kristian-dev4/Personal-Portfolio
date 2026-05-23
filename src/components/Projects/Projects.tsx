import { motion } from "framer-motion";
import styles from "./projects.module.css";

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


export const Projects = () => {
    return (
        <motion.section id='projects' className={styles['projects']} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.h2 className={styles['section-title']} variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                My Projects
            </motion.h2>


            <motion.div className={styles['project-grid']} variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <motion.a href="https://github.com/Kristian-dev4/Meme-Maker" target="_blank" style={{ textDecoration: "none" }}>
                    <motion.div className={styles['project-card']} whileHover={{ y: -10, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} variants={fadeInUp}>

                        <motion.div className={styles['project-image']} style={{ backgroundImage: "url(/projects/meme_maker.png)" }} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} />
                        <h3>Meme Maker</h3>
                        <p>
                            Meme Maker is a fun and interactive web application that allows users to create, edit, save and share hilarious memes effortlessly!
                            Built with modern web technologies, it provides a seamless user experience for meme enthusiasts.
                        </p>
                        <div className={styles['project-tech']}>
                            <span>React</span>
                            <span>Back4App</span>
                            <span>AntDesign</span>
                        </div>

                    </motion.div>
                </motion.a>

                <motion.a href="https://github.com/Kristian-dev4/Lutenitsa-Appraiser" target="_blank" style={{ textDecoration: "none" }}>
                    <motion.div className={styles['project-card']} whileHover={{ y: -10, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} variants={fadeInUp}>

                        <motion.div className={styles['project-image']} style={{ backgroundImage: "url(/projects/lutenitsa_appraiser.png)" }} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} />
                        <h3>Lutenitsa Appraiser</h3>
                        <p>
                            A web application for appraising and cataloging Lutenitsa brands. Built with Angular and Angular Material, it features user authentication, detailed appraisals and a responsive design.
                        </p>
                        <div className={styles['project-tech']}>
                            <span>Angular</span>
                            <span>Supabase</span>
                            <span>Angular Material</span>
                        </div>

                    </motion.div>
                </motion.a>

            </motion.div>
        </motion.section >
    )
}