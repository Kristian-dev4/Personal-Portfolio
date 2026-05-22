import { motion } from 'framer-motion';
import styles from './hero.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        <motion.section id="home" className={styles['hero']} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
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
                    <motion.h2 className={styles['hero-subtitle']} variants={fadeInUp} >
                        Full-Stack JavaScript Developer
                    </motion.h2>
                    <motion.p className={styles['hero-description']} variants={fadeInUp}>
                        Front-end focused JavaScript developer with experience building full-stack web applications through personal and academic projects using React, Angular, Node.js, and Express. Skilled in developing responsive and scalable applications with a focus on clean UI, performance, and maintainable code. Familiar with RESTful APIs, MongoDB, Git, and modern deployment tools including Docker, Azure, and Terraform
                    </motion.p>

                    <motion.div className={styles['cta-buttons']} variants={staggerContainer}>
                        <motion.a href={`#projects`} className={styles['cta-primary']} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            View My Work
                        </motion.a>
                        <motion.a href={`#contacts`} className={styles['cta-secondary']} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            Contact Me
                        </motion.a>
                    </motion.div>

                    <motion.div className={styles['social-links']} variants={staggerContainer} >
                        <motion.a href="https://github.com/Kristian-dev4" target="_blank" >
                            <i className="fab fa-github"></i>
                        </motion.a>
                        <motion.a href="https://linkedin.com/in/kristian-yordanov-114846355" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div className={styles['hero-image-container']} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                    <div className={styles['code-display']}>
                        <SyntaxHighlighter style={vscDarkPlus} language="javascript"
                            customStyle={{
                                margin: 0, padding: '2rem', height: '100%', borderRadius: '20px',
                                background: "rgba(30, 41, 59, 0.8)", backdropFilter: "blur(10px)", marginBottom: 50,
                            }}>
                            {`const aboutMe: DeveloperProfile = {
  codename: "Kristian",
  origin: "🌍 Bulgaria",
  role: "Full-Stack JavaScript Developer",
  stack: {
    languages: ["JavaScript", "TypeScript"],
    frameworks: ["React", "Angular", "Node.js", "Express"],
  },
  traits: [
    "Passionate about clean code and elegant solutions",
    "Loves turning complex problems into simple, scalable applications",
    "Always eager to learn new technologies and improve skills",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
                        </SyntaxHighlighter>
                    </div>
                    <motion.div className={styles['floating-card']} animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <div className={styles['card-content']}>
                            <span className={styles['card-icon']}>
                                🖥️
                            </span>
                            <span className={styles['card-text']}>
                                Searching for job opportunities
                            </span>
                        </div>

                    </motion.div>
                </motion.div>
            </div >
        </motion.section >
    )
}