import React, { useState } from 'react';
import { ReactComponent as OnboardImage } from '../images/onboard_img.svg';
import { ReactComponent as Saved } from '../images/saved_mark.svg';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function Onboarding(props) {
  const [step, setStep] = useState(1);
  const [onboardForm, setOnboardForm] = useState(null);
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
              <span className='step-number active'>
                {step > 1 ? <Saved /> : 1}
              </span>
              <span className='step-text active'>Verify Account</span>
            </div>
            <div className='step-card'>
              <span className='step-number'> {step > 2 ? <Saved /> : 2} </span>
              <span className='step-text'>Social Handles</span>
            </div>
            <div className='step-card'>
              <span className='step-number'>3</span>
              <span className='step-text'>Business Category</span>
            </div>
          </div>
          <div className='step-visual__line'></div>
          <div className='onboard-form--card'>
            {step === 1 && (
              <StepOne
                setStep={setStep}
                onboardForm={onboardForm}
                setOnboardForm={setOnboardForm}
              />
            )}
            {step === 2 && (
              <StepTwo
                setStep={setStep}
                onboardForm={onboardForm}
                setOnboardForm={setOnboardForm}
              />
            )}
            {step === 3 && (
              <StepThree
                setStep={setStep}
                onboardForm={onboardForm}
                setOnboardForm={setOnboardForm}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
