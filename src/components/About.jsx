import Container from 'react-bootstrap/Container';
import Me from '../assets/images/me.jpg'
import resume from '../assets/resume.pdf'

/*Make the resume button*/ 
export default function About(){
    return(
        <Container>
            <div className="about">
                <table border="0" className="about-me">
                    <tr>
                        <td className='web'>
                            <h1><b>Hello, <br/>I am Sadeem!</b></h1>
                            <br/>
                            <p>
                                I am currently pursuing a degree in Computer Science at the University of Wollongong in Dubai, 
                                with a strong interest in Full Stack Development. I have hands-on experience in building personal projects,
                                which has honed my skills and deepened my understanding of both front-end and back-end technologies. 
                                I am eager to leverage my background and passion to contribute to innovative and impactful projects in a 
                                professional setting.
                            </p>
                            <div className='about-navButtons'>
                                <a href={resume} target="_blank" rel="noopener noreferrer"><button>Resume</button></a><a href="#contact"><button>Connect</button></a>
                            </div>  
                        </td>
                        <td className="hidden" width="6%"></td>
                        <td>
                            <img src={Me} width="350px" height="450px"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="media mt-4">
                            <h1><b>Hello, <br/>I am Sadeem!</b></h1>
                            <br/>
                            <p>
                                I am currently pursuing a degree in Computer Science at the University of Wollongong in Dubai, 
                                with a strong interest in Full Stack Development. I have hands-on experience in building personal projects,
                                which has honed my skills and deepened my understanding of both front-end and back-end technologies. 
                                I am eager to leverage my background and passion to contribute to innovative and impactful projects in a 
                                professional setting.
                            </p>
                            <div className='about-navButtons'>
                            <a href={resume} target="_blank" rel="noopener noreferrer"><button>Resume</button></a><a href="#contact"><button>Connect</button></a>
                            </div>  
                        </td>
                    </tr>
                </table>
            </div>
        </Container>
    )
}