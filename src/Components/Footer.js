
import gb from "../Icons/gb-icon.svg"
import insta from "../Icons/insta-icon.svg"
import fb from "../Icons/fb-icon.svg"
import twitter from "../Icons/twitter-icon.svg"

function Footer() {
    return ( 
        <div className="social-container">
          <a href="https://twitter.com/iamsaad640" target="_blank" rel="noreferrer"><img alt="" src={twitter} /></a>
          <a href="https://www.facebook.com/saadsolves" target="_blank" rel="noreferrer"><img alt="" src={fb} /></a>
          <a href="https://www.instagram.com/xaaddev/" target="_blank" rel="noreferrer"><img alt="" src={insta} /></a>
          <a href="https://www.github.com/iamsaad640/" target="_blank" rel="noreferrer"><img alt="" src={gb} /></a>
        </div>
     );
}

export default Footer;