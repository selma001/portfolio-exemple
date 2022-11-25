import './floating.css'
import { useContext } from "react";
import {ThemeContext} from "../../Context"

function FloatingDiv ({image,txt1,txt2}) {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="floatingdiv" >
            <img src={image} alt="" />
            <span style={{color: darkMode?'black':'' ,}}>
                {txt1}
                <br />
                {txt2}
            </span>
        </div>
    )
}

export default FloatingDiv