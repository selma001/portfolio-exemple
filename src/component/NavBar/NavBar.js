import Toggle from '../Toggle/toggle'
import './navbar.css'

function NavBar(){
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Andrew</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className="button n-button" >
                   Contact 
                 </button>
            </div>
        </div>
    )
}

export default NavBar