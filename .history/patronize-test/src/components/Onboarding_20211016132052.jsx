import React from 'react';
import { ReactComponent as OnboardImage } from '../images/onboard_img.svg';

function Onboarding(props) {
  return (
    <div className='container'>
      <div className='onboard-image-card'>
        <OnboardImage />
      </div>

      <div className='onboard-form-card'>
        <button className='btn btn-logout'>Logout</button>
        <div className='form-container'>form</div>
      </div>
    </div>
  );
}

export default Onboarding;
