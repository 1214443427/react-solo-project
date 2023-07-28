import image from "../assets/profileImg.png"
import './Info.css'

export default function Info(){
    return (
        <div>
            <img src={image} alt = "profile picture" className="photo"/>
            <div className="namePlate">
                <h1>Laura Smith</h1>
                <p className="title">Frontend Developer</p>
                <p className='website'>laurasmith.website</p>
            </div>
            <div className="buttons">
                <button id="email">Email</button>
                <button id="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}