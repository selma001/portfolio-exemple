import './intro.css'
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesinmoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/floatingdiv'
import { ThemeContext } from "../../Context";
import {useContext} from "react"


function Intro() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }} >Hy! I Am</span>
                    <span>Andrew Thomas</span>
                    <span>Frontend Developer with high level of experience
                        in web designing and developement, producing 
                        the Quality work
                    </span>
                </div>
                <button className="i-button button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} />
                    <img src={LinkedIn} />
                    <img src={Instagram} />
                </div>
            </div>
            <div className="i-right">
                 <img src={Vector1} />
                 <img src={Vector2} />
                 <img src={boy} />
                 <img
                 src={glassesinmoji} />
                 <div className="f-container" >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                 </div>
                 <div className="f-container2"  >
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                 </div>
                {/* blur divs */}
                <div className="blur"></div>
                <div className="blur"
                style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}
                ></div>
            </div>
        </div>
    )
}

export default Intro