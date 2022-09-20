import { useState } from "react";
const AuthModal = ({setShowModal,isLogIn}) =>{
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [confirmPassword,setConfirmPassword]=useState(null);
    const [error,setError]=useState(null);

    const handleAuthModalClick=()=>{
        setShowModal(false);
    }

    const handleAuthForm=(e)=>{
        e.preventDefault();
        
    }

    console.log(email, password, confirmPassword);

    return(
        <div className="authModal-container">
            <button className="authModal-close-btn" onClick={handleAuthModalClick}>🗙</button>
            <h2>{isLogIn?'LOG IN':'CREATE ACCOUNT'}</h2>
            <form className="auth-modal-form" onSubmit={handleAuthForm}>
                <div className="in-form">
                <div>
                    <label>Email : </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email' 
                        required={true}
                        onChange={(e)=>setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Password : </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Enter the Password' 
                        required={true}
                        onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                </div>
                {!isLogIn && <div>
                    <label>Confirm Password : </label>
                    <input
                        type='confirmPassword'
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder='Re-enter the Password' 
                        required={true}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    ></input>
                </div>}
                </div>
                <br></br>
                <input
                    className="primary-button"
                    type='submit'
                    value={isLogIn?'LOG IN':'CREATE ACCOUNT'}
                ></input>
                <p>{error}</p>
            </form>
        </div>
    )
}

export default AuthModal;