import Apps from "./Apps"
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';

export default function Skills(props){
    useEffect(() => {
        const handleScroll = props.revealItem;
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, [props.revealItem]);

    useEffect(()=>{
        const handleScroll = ()=>{
            let lid = document.querySelector('.lid');
            let laptop = document.querySelector('.laptop');
            let laptopRect = laptop.getBoundingClientRect();
            let scrollPosition = window.scrollY;

            let startClosingPosition = laptopRect.top + window.scrollY -200;

            let maxRotation = 90;
            let rotation = 0;

            if (scrollPosition > startClosingPosition) {
                rotation = Math.min((scrollPosition - startClosingPosition) / 2, maxRotation); // limit to maxRotation
            }

            lid.style.transform = `rotateX(${-rotation}deg) `;
        };
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll)
    })
    return(
        <section className="skills">
            <Container>
                <h1 className="reveal"><b>Skills</b></h1>
                <div className="reveal">
                    <div className="laptop">
                        <div className="lid">
                            <div className="screen">
                                <Apps/>
                            </div>
                        </div>
                        <div className="keyboard"></div>
                    </div>
                </div>
                <div className='phone reveal'>
                    <div className='phone-screen'>
                        <Apps/>
                    </div>
                </div>
            </Container>
        </section>
    )
}