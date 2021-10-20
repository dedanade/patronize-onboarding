import React, { useState } from 'react';
import { ReactComponent as OnboardImage } from '../images/onboard_img.svg';
import StepOne from './common/StepOne';
import StepTwo from './common/StepTwo';
import StepThree from './common/StepThree';

function Onboarding(props) {
  const [step, setStep] = useState(1);
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
          <div className='onboard-form--card'>
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
