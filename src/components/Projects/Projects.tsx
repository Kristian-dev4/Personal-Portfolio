import { motion } from "framer-motion";
import styles from "./projects.module.css";
import { animations } from '../../utils/animations';
import projectsData from '../../data/projects.json';

export const Projects = () => {
    return (
        <motion.section id='projects' className={styles['projects']} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.h2 className={styles['section-title']} variants={animations.fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                My Projects
            </motion.h2>

            <motion.div className={styles['project-grid']} variants={animations.staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
                {projectsData.map((project, idx) => (
                    <motion.a href={project.link} target="_blank" style={{ textDecoration: "none" }} key={idx}>
                        <motion.div className={styles['project-card']} whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.95 }} variants={animations.fadeInUp}>

                            <motion.div className={styles['project-image']} style={{ backgroundImage: `url(/projects/${project.img})` }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} />
                        <h3>{project.projectName}</h3>
                        <p>
                            {project.description}
                        </p>
                        <div className={styles['project-tech']}>
                            {project.technologies.map((tech, idx) => (
                                <span key={idx}>{tech}</span>
                            ))}
                        </div>

                    </motion.div>
                </motion.a>
                ))}

            </motion.div>
        </motion.section >
    )
}