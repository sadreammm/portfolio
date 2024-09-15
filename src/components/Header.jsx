import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect, useRef } from 'react';

export default function Header(){

    const [active, setActive] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
    function onScroll() {
        const currentScrollY = window.scrollY;
            
        if (window.innerWidth > 768) {
            if (currentScrollY > prevScrollY.current) {
                setScrolled(true);
            } else if (currentScrollY < prevScrollY.current) {
                setScrolled(false);
            }
            prevScrollY.current = currentScrollY;
        } else{
            setScrolled(false)
        }

        const home = document.getElementById('home');
        const projects = document.getElementById('projects');
        const contact = document.getElementById('contact');

        if (contact && currentScrollY >= contact.offsetTop - 50) {
            setActive('contact');
        } else if (projects && currentScrollY >= projects.offsetTop - 50) {
            setActive('projects');
        } else {
            setActive('home');
        }
        
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function onUpdateActive(value) {
        setActive(value);
    }

    console.log(active);

    return (
    <>
        <Navbar className={scrolled ? 'portfolio-navbar scrolled' : 'portfolio-navbar'} expand="lg">
        <Container>
            <Navbar.Brand className='navbar-head' href="#home" onClick={() => onUpdateActive('home')}>
            Sadeem
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='navbar-toggler'>
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-text">
                <a href="#home" className={active === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActive('home')}>
                About
                </a>
                <a href="#projects" className={active === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActive('projects')}>
                Projects
                </a>
                <a href="#contact" className={active === "contact" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActive('contact')}>
                Contact
                </a>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    );
}