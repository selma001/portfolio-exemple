import './card.css'

function Card({emoji, heading,detail}){
    return(
        <div className="card">
            <img src={emoji} />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}

export default Card