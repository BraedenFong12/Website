import Contact from '../components/Contact';
import './ContactPage.css';

function ContactPage() {
    return (
        <main className="contact-page">
            <div className="page-header">
                <h1>Contact Me</h1>
                <p>Let's connect and create something great together</p>
            </div>
            <Contact />
        </main>
    );
}

export default ContactPage;
