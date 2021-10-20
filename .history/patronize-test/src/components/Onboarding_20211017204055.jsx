import React from 'react';
import { ReactComponent as OnboardImage } from '../images/onboard_img.svg';
import { ReactComponent as Lock } from '../images/lock.svg';
import { ReactComponent as SHOW_ARROW } from '../images/show_arrow.svg';

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
                <div style={{ marginTop: '25px' }}>
                  <label className='form-control' htmlFor='bvn-input'>
                    Bank Verification Number(11-digits)
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
                    <ul className='why-bvn__list'>
                      <li></li>
                    </ul>
                  </div>
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
