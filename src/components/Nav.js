import colourLogo from '../images/color-logo.svg';
import whiteLogo from '../images/white-logo.svg';

const Nav = ({minimal, authToken,setShowModal,showModal,setIsLogIn}) =>{
    const handleNavLogIn=()=>{
        setShowModal(true);
        setIsLogIn(true);
    }
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal?whiteLogo:colourLogo}></img>
            </div>
            {!authToken && <button className='nav-button' onClick={handleNavLogIn}>Log In</button>}
        </nav>
      
    );
  }
  
  export default Nav;
  