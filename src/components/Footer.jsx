import { Container } from "react-bootstrap"
import ig from "../assets/images/ig.png"
import linkedin from "../assets/images/linkedin.png"
import github from "../assets/images/github.png"
import whatsapp from "../assets/images/whatsapp.png"
import phone from "../assets/images/phone.png"
import email from "../assets/images/email.png"

export default function Footer(){
    return(
        <footer>
            <section>
                <Container>
                    <div class="foot-content">
                        <h2>Sadeem</h2>
                        <div class="foot-right">
                            <div class="foot-images">
                                <a href="https://www.instagram.com/sadreammmm/"><img src={ig} class='foot-logo'/></a>
                                <a href="https://www.linkedin.com/in/sadeem-mehkery-738736290/"><img src={linkedin} class='foot-logo' style={{height: "40px"}}/></a>
                                <a href="https://wa.me/971508542136"><img src={whatsapp} class='foot-logo' /></a>
                                <a href="https://github.com/sadreammm?tab=repositories"><img src={github} class='foot-logo'/></a>
                            </div>
                            <div class="foot-contact">
                                <div class="foot-contact-item">
                                    <img src={phone} class="foot-contact-icon"/>
                                    <span class="foot-contact-text">+971 50 854 2136</span>
                                </div>
                                <div class="foot-contact-item">
                                    <img src={email} class="foot-contact-icon"/>
                                    <span class="foot-contact-text">sadeem.meh10@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </footer>
    )
}
