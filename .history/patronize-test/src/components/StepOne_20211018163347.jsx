import React, { useState } from 'react';
import { ReactComponent as Lock } from '../images/lock.svg';
import { ReactComponent as SHOW_ARROW } from '../images/show_arrow.svg';
import { ReactComponent as PADLOCK } from '../images/padlock.svg';

function StepOne({ setStep, onboardForm, setOnboardForm, errors, setErrors }) {
  const [showBVNInfo, setShowBVNInfo] = useState(false);
  const [showBVNInput, setShowBVNInput] = useState(true);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setStep(2);
  };
  const handleBVNOnchange = (value) => {
    if (value.length === 11) {
      // Process BVN
    } else {
      if (!errors) {
        setErrors({ bvnInput: 'BVN mus be 11 digits' });
      } else {
        const newErrors = { ...errors };
        newErrors.bvnInput = 'BVN mus be 11 digits';
        setErrors(newErrors);
      }
    }
  };
  return (
    <div className='Step-one-container'>
      <div>
        <p className='step-process__text'> Step 1/3</p>
        <p className='step-process__header'>Verify Account</p>
      </div>
      <div className='steps-form'>
        <p className='select-verification__text'>
          Select a verification method
        </p>
        <div className='verification-method-card'>
          <button
            onClick={() => setShowBVNInput(true)}
            className={
              showBVNInput
                ? 'btn btn__verification active'
                : 'btn btn__verification'
            }
          >
            BVN
          </button>
          <button
            onClick={() => setShowBVNInput(false)}
            className={
              showBVNInput
                ? 'btn btn__verification'
                : 'btn btn__verification active'
            }
          >
            Personal Account Number
          </button>
        </div>
        <div>
          {showBVNInput ? (
            <form onSubmit={(e) => handleSubmit(e)}>
              <div style={{ marginTop: '25px' }}>
                <label className='form-control' htmlFor='bvnInput'>
                  Bank Verification Number(11-digits)
                </label>
                <input
                  type='number'
                  name='bvnInput'
                  id='bvnInput'
                  className='form-control'
                  required={true}
                  minLength='11'
                  onChange={(e) => handleBVNOnchange(e.currentTarget.value)}
                />
              </div>
              <div className='why-bvn-card'>
                <div className='why-bvn-header'>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>
                      <Lock />
                    </span>
                    <p className='why-bvn-header__text'>Why we need your BVN</p>
                  </div>
                  <div
                    onClick={() => setShowBVNInfo(!showBVNInfo)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <p className='why-bvn-header__show'>Show</p>
                    <SHOW_ARROW />
                  </div>
                </div>
                {showBVNInfo && (
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
                )}
              </div>
              <div className='steps-form__line'></div>
              <div className='steps-form__button'>
                <div></div>
                <button className='btn btn-continue' type='submit'>
                  Continue
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={(e) => handleSubmit(e)}>
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
                    required={true}
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
                    required={true}
                  >
                    <option defaultChecked value=''></option>
                    <option value='001'>GTB</option>
                    <option value='002'>Zenith Bank</option>
                    <option value='003'> Wema Bank</option>
                    <option value='005'>Kuda Bank</option>
                  </select>
                </div>
              </div>
              <div className='steps-form__line'></div>
              <div className='steps-form__button'>
                <div></div>
                <button type='submit' className='btn btn-continue'>
                  Continue
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default StepOne;
