import './toggle.css'
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import {ThemeContext} from '../../Context'
import {useContext} from 'react'

function Toggle (){

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    function handleClick(){
        theme.dispatch({type: 'toggle'})
    }

    return (
        <div className="toggle"
        onClick={handleClick}
        >
            <Moon/>
            <Sun/>
            <div className="toggle-button"
            style={darkMode ? {left: '2px'} : {right : '2px'}}
            ></div>
        </div>
    )
}

export default Toggle