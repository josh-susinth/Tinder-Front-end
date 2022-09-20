import Nav from '../components/Nav';
import { useState } from 'react';
import AuthModal from '../components/AuthModal';

const Home = () =>{
    const [authToken,setAuthToken] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLogIn, setIsLogIn]=useState(false);

    console.log(`showModal:${showModal} isLogin:${isLogIn} authToken:${authToken}`);

    const handleHomeLogin = () =>{
        console.log("clicked");
        setShowModal(true);
        setIsLogIn(false);
    }
    return (
      <div className='overLay'>
        <Nav minimal={false} authToken={authToken} setShowModal={setShowModal}  showModal={showModal} setIsLogIn={setIsLogIn}/>
        <div className="Home">
            <h1 className='home-title'>Swipe Right!</h1>
            <button className="primary-button" onClick={handleHomeLogin}>
                {authToken?"Sign Out":"Create Account"}
            </button>
            {showModal && <AuthModal setShowModal={setShowModal} isLogIn={isLogIn}/>}
        </div>
      </div>
    );
  }
  
  export default Home;
  