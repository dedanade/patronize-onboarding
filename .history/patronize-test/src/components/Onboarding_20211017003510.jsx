import React from 'react';
import { ReactComponent as OnboardImage } from '../images/onboard_img.svg';

function Onboarding(props) {
  return (
    <div className='container'>
      <div className='onboard-image-card'>
        <OnboardImage />
      </div>

      <div className='onboard-form-card'>
        <div className='btn-logout-container'>
          <button className='btn btn-logout'>Logout</button>
        </div>
        <div className='form-container'>
          <div className='step-visual-container'>
            <div className='step-one-card'>
              <span className='step-number active'>1 </span>
              <span className='step-text active'>Verify Account</span>
            </div>
            <div className='step-two-card'>
              <span className='step-number'>1 </span>
              <p className='step-text'>Verify Account</p>
            </div>
            <div className='step-three-card'>
              <span className='step-number'>1 </span>
              <p className='step-text'>Verify Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;