import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';

export default function Contact(props) {
    const formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [form, setForm] = useState(formData);
    const [status, setStatus] = useState({});

    useEffect(() => {
        const handleScroll = props.revealItem;
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [props.revealItem]);

    function handleContactForm(e) {
        setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const userId = import.meta.env.VITE_EMAILJS_USER_ID;

        console.log(serviceId, templateId, userId);

        if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.message) {
            setStatus({ success: false, message: "Please fill out all the fields." });
            setTimeout(() => {
                setStatus({});
            }, 3000);
            return;
        }

        try {
            const templateParams = {
                to_name: 'Sadeem',
                from_name: form.firstName + ' ' + form.lastName,
                from_email: form.email,
                phone: form.phone,
                message: form.message
            };

            const result = await emailjs.send(
                serviceId, 
                templateId, 
                templateParams,
                userId 
            );

            if (result.status === 200) {
                setStatus({ success: true, message: "Message Sent Successfully!" });
                setTimeout(() => {
                    setForm(formData);
                    setStatus({});
                }, 3000);
            }
        } catch (error) {
            setStatus({ success: false, message: "Unable to send. Try again!" });
            setTimeout(() => {
                setStatus({});
            }, 3000);
        }
    }

    return (
        <section className="contact">
            <Container>
                <h1 className="reveal"><b>Contact Me</b></h1>
                <div className="contact-form reveal">
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <input type="text" value={form.firstName} name="firstName" placeholder="First Name" onChange={handleContactForm} />
                            </Col>
                            <Col>
                                <input type="text" value={form.lastName} name="lastName" placeholder="Last Name" onChange={handleContactForm} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="email" value={form.email} name="email" placeholder="Email" onChange={handleContactForm} />
                            </Col>
                            <Col>
                                <input type="tel" value={form.phone} name="phone" placeholder="Phone" onChange={handleContactForm} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <textarea value={form.message} name="message" placeholder="Message" onChange={handleContactForm}></textarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col><button type="submit">Send</button></Col>
                        </Row>
                        <Row className="status-row">
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success ? "success" : "danger"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </div>
            </Container>
        </section>
    );
}
