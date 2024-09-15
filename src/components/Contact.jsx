import { useState, useEffect } from "react"
import {Container, Row, Col} from "react-bootstrap"

export default function Contact(props){
    const formData = {
        firstName : '',
        lastName : '',
        email : '',
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

    function handleContactForm(e){
        setForm(prevForm => {
            return{
                ...prevForm,
                [e.target.name] : e.target.value
            }
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        let response = await fetch('http://localhost:5000/contact',{
            method: "POST",
            headers:{
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(form)
        })
        let result = await response.json();
        console.log(result);
        if(result.code===200){
            setStatus({success:true, message:"Message Sent Successfully!"})
            setTimeout(()=>{
                setForm(formData);
                setStatus({});
            },3000);
        }
        else if(result.code===400){
            setStatus({success:false, message: "Please fill out all the fields."})
            setTimeout(()=>{
                setStatus({});
            },3000);
        }
        else{
            setStatus({success:false, message:"Unable to send. Try again!"})
            setTimeout(()=>{
                setStatus({});
            },3000);
            
        }
    }
    return(
        <section className="contact">
            <Container>
                <h1 className="reveal"><b>Contact Me</b></h1>
                <div className="contact-form reveal">
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <input type="text" value={form.firstName} name="firstName" placeholder="First Name" onChange={handleContactForm}/>
                            </Col>
                            <Col >
                                <input type="text" value={form.lastName} name="lastName" placeholder="last Name" onChange={handleContactForm}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="email" value={form.email} name="email" placeholder="Email" onChange={handleContactForm}/>
                            </Col>
                            <Col>
                                <input type="tel" value={form.phone} name="phone" placeholder="Phone" onChange={handleContactForm}/>
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
                                    <p className={status.success ? "success": "danger"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </div>
            </Container>
        </section>
    )
}