import { useState } from "react";
import Nav from '../components/Nav';

const Onboarding = () =>{

    const [formData, setFormData] = useState({
      'user-id':'',
      'name':'',
      'dob_date':'',
      'dob_month':'',
      'dob_year':'',
      "gender_identity":'',
      "showGender":false,
      "gender_interest":'',
      "about":'',
      "email":'',
      "url":'',
      "matches":[]
    });

    const handleChange=(e)=>{
      console.log(e);
      const key = e.target.name;
      const value = e.target.type==='checkbox'?e.target.checked:e.target.value;
      console.log(`${key}:${value}`);
      setFormData((prevState)=>({
        ...prevState,
        [key]:value
      })
      )
      
    }

    const handleOnBoardingForm=(e)=>{
      e.preventDefault();
      console.log(formData);

    }
    return (
      <>
        <Nav
          minimal={false}
          setShowModal={()=>{}}
          showModal={false}/>
        <div className='onBoarding'>
          <h2>CREATE ACCOUNT</h2>
          <form onSubmit={handleOnBoardingForm}>
            <section>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                type='text'
                name="name"
                placeholder='name'
                required={true}
                value={formData.name}
                onChange={handleChange}
              />

              <label>BirthDay</label>
              <div className="multiple-line-input">
              <input
                id='dob_date'
                type='number'
                name="dob_date"
                placeholder='DD'
                required={true}
                value={formData.dob_date}
                onChange={handleChange}
              />
              <input
                id='dob_month'
                type='number'
                name="dob_month"
                placeholder='MM'
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                id='dob_year'
                type='number'
                name="dob_year"
                placeholder='YYYY'
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />            
              </div>  

              <label>Gender</label>
              <div className="multiple-line-input">
              <input
                id='woman'
                type='radio'
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_identity==='woman'}
              /> 
              <label htmlFor='woman'>Woman</label>
              <input
                id='man'
                type='radio'
                name="gender_identity"
                value="man"
                onChange={handleChange}
                checked={formData.gender_identity==='man'}
              /> 
              <label htmlFor='man'>Man</label>
              </div>

              <div className="show-gender-container">
              <label htmlFor='showGender'>Show Gender On My Profile</label>
              <input
                id='showGender'
                type='checkbox'
                name="showGender"
                onChange={handleChange}
                checked={formData.showGender}
              /> 
              </div>

              <label htmlFor='genderInterest'>Show Me</label>
              <div className="multiple-line-input">
              <input
                id='womanInterest'
                type='radio'
                name="gender_interest"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_interest==='woman'}
              /> 
              <label htmlFor='womanInterest'>Woman</label>
              <input
                id='manInterest'
                type='radio'
                name="gender_interest"
                value="man"
                onChange={handleChange}
                checked={formData.gender_interest==='man'}
              /> 
              <label htmlFor='manInterest'>Man</label>
              </div>

              <label htmlFor='about'>About Me</label>
              <input
                id='about'
                type='text'
                name="about"
                required={true}
                value={formData.about}
                onChange={handleChange}
              /> 
              <input type="submit"/>
            </section>
              
            <section>
              <label htmlFor='profile'>Profile Photo</label>
              <input
                id='url'
                type='url'
                name="url"
                required={true}
                value={formData.url}
                onChange={handleChange}
              /> 
              <div className="photo-container">
                <img src={formData.url} alt="profile photo preview"></img>
              </div>
            </section>
          </form>
        </div>
      </>
    );
  }
  
  export default Onboarding;
  