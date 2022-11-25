import './experience.css'
import React, { useContext } from "react";
import {ThemeContext} from "../../Context"

function Experience(){

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="experience">
            <div className="achievement">
               <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
               <span style={{color: darkMode?'white':''}} >years</span>
               <span>Experience</span>
            </div>
            <div className="achievement">
               <div className="circle" style={{color: darkMode?'var(--orange)':''}}>28+</div>
               <span style={{color: darkMode?'white':''}} >completed</span>
               <span>Projects</span>
            </div>
            <div className="achstyle={{color: darkMode?'white':''}}ievement">
               <div className="circle" style={{color: darkMode?'var(--orange)':''}} >5+</div>
               <span  >companies</span>
               <span>work</span>
            </div>
        </div>
    )
}

export default Experience