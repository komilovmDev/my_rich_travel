import './footer.css'
import logo from '../../assets/logo.svg'
import {BsInstagram} from 'react-icons/bs'
import {FiLinkedin , FiFacebook} from 'react-icons/fi'

export default function Footer() {
    return (
        <footer>
            <div className="footerTop">
                <img src="" alt="" />
                <ul>
                    <li>Places</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <button>Take a Trip</button>
                </ul>
            </div>
            <div className="footerBottom">
                <div className="icons"> 
                    <a href="#"><button><BsInstagram/></button></a>
                    <a href="#"><button><FiLinkedin/></button></a>
                    <a href="#"><button><FiFacebook/></button></a>
                </div>
            </div>
        </footer>
    )
}