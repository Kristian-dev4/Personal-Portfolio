import { motion } from 'framer-motion';
import styles from './education.module.css';
import { animations } from '../../utils/animations';
import educationData from '../../data/education.json';

export const Education = () => {

    return (
        <motion.section id="education" className={styles.education} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.h2 className={styles['section-title']} variants={animations.fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                Education
            </motion.h2>
            <motion.div className={styles['education-grid']} variants={animations.staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
                {educationData.map((edu, idx) => (
                    <motion.div className={styles['education-card']} key={idx} whileTap={{ scale: 0.95 }} whileHover={{ y: -10, transition: { duration: 0.2 } }} variants={animations.fadeInUp} >
                        <div className={styles['education-icon']}>
                            <span role="img" aria-label="diploma">🎓🗞👨🏻‍🎓</span>
                        </div>
                        <h3 className={styles['education-degree']}>{edu.degree}</h3>
                        <p className={styles['education-institution']}>{edu.institution}</p>
                        <p className={styles['education-period']}>{edu.period}</p>
                        <p className={styles['education-location']}>{edu.location}</p>
                        <p className={styles['education-details']}>{edu.details}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section >
    );
};
