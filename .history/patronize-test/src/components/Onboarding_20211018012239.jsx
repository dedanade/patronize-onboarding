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
          <div className='onboard-form--card'>
            <div className='Step-two-container'>
              <div>
                <p className='step-process__text'> Step 3/3</p>
                <p className='step-process__header'>Business Category</p>
              </div>
              <div className='steps-form'>
                <div style={{ marginTop: '25px' }}>
                  <div className='insta-twitter-input__card'>
                    <div>
                      <label className='form-control' htmlFor='bank-name-input'>
                        Bank Name
                      </label>
                      <select
                        name='bank-name-input'
                        id='bank-name-input'
                        className='form-control'
                      >
                        <option defaultChecked value=''></option>
                        <option value='001'>GTB</option>
                        <option value='002'>Zenith Bank</option>
                        <option value='003'> Wema Bank</option>
                        <option value='005'>Kuda Bank</option>
                      </select>
                    </div>
                    <div className='twitter-input'>
                      <label className='form-control' htmlFor='twitter-input'>
                        Twitter
                      </label>
                      <div
                        className='prepend-input-group'
                        style={{ width: '380px' }}
                      >
                        <div className='prepend-input__value'>@</div>
                        <input
                          type='text'
                          name='twitter-input'
                          id='twitter-input'
                          className='form-control-prepend'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='steps-form__line'></div>
              <div className='steps-form__button'>
                <div></div>
                <button className='btn btn-continue'>
                  Confirm Social Handles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
