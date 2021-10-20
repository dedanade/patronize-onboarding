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
                    <label className='form-control' htmlFor='bvn-input'>
                      Choose your Abeg Tag (required){' '}
                    </label>
                    <input
                      type='number'
                      name='bvn-input'
                      id='bvn-input'
                      className='form-control'
                    />
                  </div>
                  <div className='account-number-bank__card'>
                    <div>
                      <label
                        className='form-control'
                        htmlFor='account-number-input'
                      >
                        Account Number
                      </label>
                      <input
                        type='number'
                        name='account-number-input'
                        id='account-number-input'
                        className='form-control'
                      />
                    </div>
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
                  </div>
                  <div className='why-bvn-card'>
                    <div className='why-bvn-header'>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>
                          <Lock />
                        </span>
                        <p className='why-bvn-header__text'>
                          Why we need your BVN
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p className='why-bvn-header__show'>Show</p>
                        <SHOW_ARROW />
                      </div>
                    </div>
                    <div className='why-bvn-list'>
                      <p style={{ marginTop: '0' }}>
                        We only need access to your:
                      </p>
                      <ul className='why-bvn-list__ul'>
                        <li>Full Name</li>
                        <li>Phone Number</li>
                        <li>Date of Birth</li>
                      </ul>
                      <div className='why-bvn-list__line'></div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <PADLOCK />
                        <p className='why-bvn-list__last-text'>
                          Your BVN does not give us access to your bank accounts
                          or transactions
                        </p>
                      </div>
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
