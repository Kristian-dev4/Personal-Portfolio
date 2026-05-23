import emailjs from '@emailjs/browser';

export const sendEmail = (name: string, email: string, message: string) => {
    const serviceID: string = import.meta.env.VITE_EMAILJS_KEY;
    const templateID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
    const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    return emailjs.send(serviceID, templateID, templateParams, publicKey);
}