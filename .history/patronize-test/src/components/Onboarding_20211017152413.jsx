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
            <div>
              <p className='step-process__text'> Step 1/3</p>
              <p className='verify-account__text'>Verify Account</p>
            </div>
            <div style={{ marginTop: '39px' }}>
              <p className='select-verification__text'>
                Select a verification method
              </p>
              <div className='verification-method-card'>
                <button className='btn btn__verification active'>BVN</button>

                <button className='btn btn__verification'>
                  Personal Account Number
                </button>
              </div>
              <div>
                <div>
                  <label className='form-control' htmlFor=''>
                    Bank Verification Number(11-digits)
                  </label>
                  <input
                    type='number'
                    name='bvn-input'
                    id='bvn-input'
                    className='form-control'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
