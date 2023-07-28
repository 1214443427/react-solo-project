import './Footer.css'
import twitterLogo from "../assets/twitter.png"
import instagramLogo from "../assets/insta.png"
import facebookLogo from "../assets/Facebook Icon.svg"
import githubLogo from "../assets/gh.png"


export default function Footer(){
    return (
        <div className="footer">
            <img src={twitterLogo}/>
            <img src={instagramLogo}/>
            <img src={facebookLogo}/>
            <img src={githubLogo}/>
        </div>
    )
}