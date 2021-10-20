import React from 'react';
import { ReactComponent as OnboardImage } from '../images/onboard_img.svg';
import { ReactComponent as Lock } from '../images/lock.svg';
import { ReactComponent as SHOW_ARROW } from '../images/show_arrow.svg';
import { ReactComponent as PADLOCK } from '../images/padlock.svg';

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
            <div className='step-card'>
              <span className='step-number active'>1 </span>
              <span className='step-text active'>Verify Account</span>
            </div>
            <div className='step-card'>
              <span className='step-number'>1 </span>
              <span className='step-text'>Social Handles</span>
            </div>
            <div className='step-card'>
              <span className='step-number'>1 </span>
              <span className='step-text'>Business Category</span>
            </div>
          </div>
          <div className='step-visual__line'></div>
          <div className='onboard-form--card'></div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
