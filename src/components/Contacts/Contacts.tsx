/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion';
import styles from './contacts.module.css';
import { animations } from '../../utils/animations';
import { useActionState } from 'react'
import { sendEmail } from '../../api/emailjsApi';

export const Contacts = () => {
    type ContactState = { success: boolean; error?: string };

    const sendEmailHandler = async (_state: ContactState, formData: FormData) => {
        const formValues = Object.fromEntries(formData) as Record<string, FormDataEntryValue>;
        const name = formValues.name?.toString() ?? '';
        const email = formValues.email?.toString() ?? '';
        const message = formValues.message?.toString() ?? '';

        if (!name || !email || !message) {
            return { success: false, error: "All fields are required." };
        }

        try {
            await sendEmail(name, email, message);
            return { success: true };
        } catch (error) {
            return { success: false, error: "Failed to send email." };
        }
    };

    const [state, formAction, isPending] = useActionState(sendEmailHandler, { success: false });

    return (
        <motion.section id={`contacts`}
            className={styles.contact}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 variants={animations.fadeInUp} initial="initial" animate="animate" viewport={{ once: true }}>
                Get in Touch
            </motion.h2>

            <motion.div className={styles['contact-content']} variants={animations.fadeInUp}>
                <motion.form className={styles['contact-form']} action={formAction}>
                    <motion.input
                        type="text"
                        placeholder="Your Name..."
                        required
                        whileFocus={{ scale: 1.02 }}
                        name="name"
                    />

                    <motion.input
                        type="email"
                        placeholder="Your Email..."
                        required
                        whileFocus={{ scale: 1.02 }}
                        name="email"
                    />

                    <motion.textarea
                        placeholder="Your Message..."
                        required
                        whileFocus={{ scale: 1.02 }}
                        name="message"
                    />

                    <motion.button
                        type="submit"
                        className={styles['submit-btn']}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isPending}
                    >
                        {isPending ? "Sending..." : "Send Message"}
                    </motion.button>
                </motion.form>


                {state?.success &&
                    <div className={`${styles['form-status']} ${styles.success}`}>{
                        <p>Message sent successfully!</p>
                    }
                    </div>
                }
                {state.error && (
                    <div className={`${styles['form-status']} ${styles.error}`}>{
                        state.error
                    }
                    </div>
                )}

            </motion.div>
        </motion.section>
    )
}