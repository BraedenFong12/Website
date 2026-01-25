import './Contact.css';

function Contact() {
    const contacts = [
        {
            icon: '✉️',
            label: 'Email',
            value: 'bfong01@student.ubc.ca',
            href: 'mailto:bfong01@student.ubc.ca'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'Braeden Fong',
            href: 'https://www.linkedin.com/in/braeden-fong-633114268/'
        },
        {
            icon: '🐙',
            label: 'GitHub',
            value: 'braedenfong12',
            href: 'https://github.com/braedenfong12'
        }
    ];

    return (
        <section className="contact section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <p className="contact-intro">
                    Feel free to reach out! I'm always open to new opportunities and collaborations.
                </p>

                <div className="contact-cards">
                    {contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.href}
                            className="contact-card glass-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="contact-icon">{contact.icon}</span>
                            <span className="contact-label">{contact.label}</span>
                            <span className="contact-value">{contact.value}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
