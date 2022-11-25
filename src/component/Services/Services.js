import './services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Card from '../card/Card'
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import selma from './selma.pdf'
import { useContext } from "react";
import {ThemeContext} from "../../Context"

function Services (){

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode

    return(
        <div className="services">
            {/* left side*/ }
            <div className="awesome">
               <span style={{ color: darkMode ? "white" : "" }} >My Awesome</span>
               <span>services</span>
               <span>
                Lorem impsum is sumply dummy text of printing of printing Lorem
                <br />
                impsum is simpely summy text of printing
               </span>
               <a href={selma} download>
               <button className="button s-button">Download CV</button>
               </a>
               <div className="blur s-blur1"
               style={{
                background:"#ABF1FF94"
               }}
               ></div>
            </div>
            {/* right side*/ }
            <div className="cards">
                <div 
                style={{
                    left:'14rem'
                }}
                >
                    <Card
                       emoji={HeartEmoji}
                       heading={'Design'}
                       detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </div>
                {/*second card*/ }
                <div 
                style={{
                    top: "12rem",
                    left: "-4rem"
                }}
                >
                    <Card
                       emoji={Glasses}
                       heading={'Developer'}
                       detail={"Html, Css, JavaScript, React"}
                    />
                </div>
                {/*third card*/ }
                <div 
                style={{
                    top: "22rem",
                    left: "12rem"
                }}
                >
                    <Card
                       emoji={Humble}
                       heading={'UI/UX'}
                       detail={"lorem ispum dummy text are usually use in section where we need some random text"}
                    />
                </div>
                <div className="blur s-blur2" style={{backgrund: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services