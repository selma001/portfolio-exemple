import './work.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import {useContext} from "react"
import {ThemeContext} from "../../Context"

function Work(){

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="works">
            {/* left side*/ }
            <div className="awesome">
               <span style={{ color: darkMode ? "white" : "" }} >Works for all these</span>
               <span>Brands & Clients</span>
               <span>
                Lorem impsum is sumply dummy text of printing of printing Lorem
                <br />
                impsum is simpely summy text of printing
                <br />
                impsum is simpely summy text of printing text of printing
                <br />
                Lorem impsum is sumply dummy text
               </span>
               <button className="button s-button">Hire me</button>
               <div className="blur s-blur1"
               style={{
                background:"#ABF1FF94"
               }}
               ></div>
            </div>
            {/* right side*/ }
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} />
                    </div>
                </div>
                {/* background circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Work