import mail from "../Icons/mail-icon.svg"
import linkedin from "../Icons/linkedin-icon.svg"

function ProfileInfo() {
    return ( 
        <>
        <h2 className='card-name' >Saad Ahmad</h2>
          <p className="name-role">frontend developer</p>
          <p className="name-mail">saad.solves@gmail.com</p>
          <div className="buttons-container">
            <a className="button btn-white" href="mailto:saad.solves@gmail.com" target="_blank" rel="noreferrer">
              <img src={mail}  alt="mailto"/>
              Email
            </a>
            <a className="button btn-blue" href="https://www.linkedin.com/in/saadsolves/" target="_blank" rel="noreferrer">
              <img src={linkedin}  alt="linkedin"/>
              LinkedIn
            </a>
          </div>
        </>
     );
}

export default ProfileInfo;