import python from '../assets/images/py.png'
import c from '../assets/images/c.png'
import cpp from '../assets/images/cpp.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import nodejs from '../assets/images/nodejs.png'
import sql from '../assets/images/sql.png'
import react from '../assets/images/react.png'
import davinci from '../assets/images/davinci.png'

export default function Apps(){
    return(
        <>
            <div className="skill">
                <img src={python} id="logo"/>
                <p>Python</p>
            </div>
            <div className="skill">
                <img src={c} id="logo"/>
                <p>C</p>
            </div>
            <div className="skill">
                <img src={cpp} id="logo"/>
                <p>C++</p>
            </div>
            <br/>
            <div className="skill">
                <img src={html} id="logo"/>
                <p>HTML</p>
            </div>
            <div className="skill">
                <img src={css} id="logo"/>
                <p>CSS</p>
            </div>
            <div className="skill">
                <img src={js} id="logo"/>
                <p>JavaScript</p>
            </div>
            <div className="skill">
                <img src={nodejs} id="logo"/>
                <p>Node.js</p>
            </div>
            <div className="skill">
                <img src={react} id="logo"/>
                <p>React</p>
            </div>
            <br/>
            <div className="skill">
                <img src={sql} id="logo" height="50px"/>
                <p>SQL</p>
            </div>
            <div className="skill">
                <img src={davinci} id="logo" height="50" style={{width: "90px", marginLeft: "0px"}}/>
                <p>DaVinci</p>
            </div>
            <br/>
        </>
    )
}