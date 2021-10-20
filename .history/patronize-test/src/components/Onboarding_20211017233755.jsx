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
                <p className='step-process__text'> Step 2/3</p>
                <p className='step-process__header'>Social Handles</p>
                <p className='step-process__sub-header'>
                  Enter your business social media handles
                </p>
              </div>
              <div className='steps-form'>
                <div>
                  <div style={{ marginTop: '25px' }}>
                    <label className='form-control' htmlFor='abeg-tag-input'>
                      Choose your Abeg Tag (required){' '}
                    </label>
                    <input
                      type='number'
                      name='abeg-tag-input'
                      id='abeg-tag-input'
                      className='form-control'
                      style={{ width: '50%' }}
                    />
                  </div>
                  <div className='insta-twitter-input__card'>
                    <div>
                      <label className='form-control' htmlFor='instagram-input'>
                        Instagram
                      </label>
                      <input
                        type='text'
                        name='instagram-input'
                        id='instagram-input'
                        className='form-control'
                      />
                    </div>
                    <div>
                      <label className='form-control' htmlFor='twitter-input'>
                        Twitter
                      </label>
                      <input
                        type='text'
                        name='twitter-input'
                        id='twitter-input'
                        className='form-control twitter-input'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='steps-form__line'></div>
              <div className='steps-form__button'>
                <div></div>
                <button className='btn btn-continue'>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
