import { Ellipse, PopUp, SubmitButton } from '@UI';
import { Footer } from '@Layouts';
import './contactPage.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function ContactPage() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    function submitForm() {
        if (isPending) return;
        if (error) setError(false);
        if (success) setSuccess(false);

        setIsPending(true);

        emailjs
            .sendForm(
                'service_flcvj72',
                'template_4gkezeu',
                document.querySelector('.contact-form')! as HTMLFormElement,
                'Nfb_rKoUp0mJ7CaK0',
            )
            .then(
                (_res) => {
                    setSuccess(true);
                    setMessage('Email sent successfully! Expect a reply soon.');
                },
                (_err) => {
                    setError(true);
                    setMessage('Error sending email. Please retry.');
                },
            )
            .finally(() => {
                setIsPending(false);
            });
    }

    function onClose() {
        setError(false);
        setSuccess(false);
        setMessage('');
    }

    return (
        <section className="contact-page">
            <h2 className="contact-header">
                Slide Into
                <br className="contact-br-mobile" /> My{' '}
                <span className="contact-header-colored">Inbox</span>
            </h2>
            <form className="contact-form" action={submitForm}>
                <span className="contact-inputWrapper">
                    <Ellipse id="contact-ellipse" gradientId="contact-ellipse-gradient" />
                    <input
                        className="contact-input"
                        placeholder="Enter Your Email"
                        name="email"
                        type="email"
                        required
                    />
                </span>
                <SubmitButton isPending={isPending} />
            </form>
            <Footer />
            {message && <PopUp isSuccess={success} message={message} onClose={onClose} />}
        </section>
    );
}

export default ContactPage;
