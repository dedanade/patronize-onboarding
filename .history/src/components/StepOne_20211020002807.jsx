import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Lock } from '../images/lock.svg';
import { ReactComponent as SHOW_ARROW } from '../images/show_arrow.svg';
import { ReactComponent as PADLOCK } from '../images/padlock.svg';

function StepOne({ setStep, setOnboardForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showBVNInfo, setShowBVNInfo] = useState(false);
  const [showBVNInput, setShowBVNInput] = useState(true);

  const onSubmit = (data) => {
    console.log('data', data);
    setOnboardForm(data);
    setStep(2);
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
            <form onSubmit={handleSubmit(onSubmit)} className='bvn-input-form'>
              <div style={{ marginTop: '25px' }}>
                <label className='form-control' htmlFor='bvnInput'>
                  Bank Verification Number(11-digits)
                </label>
                <input
                  {...register('bvnInput', {
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                  })}
                  type='number'
                  name='bvnInput'
                  id='bvnInput'
                  className='form-control'
                />
                {errors.bvnInput && errors.bvnInput.type === 'required' && (
                  <span className='input-error__text'> BVN is Required</span>
                )}
                {errors.bvnInput && errors.bvnInput.type === 'minLength' && (
                  <span className='input-error__text'> BVN must be 11</span>
                )}
                {errors.bvnInput && errors.bvnInput.type === 'maxLength' && (
                  <span className='input-error__text'> BVN must be 11</span>
                )}
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='account-details-form'
            >
              <div className='account-number-bank__card'>
                <div>
                  <label className='form-control' htmlFor='accountNumber'>
                    Account Number
                  </label>
                  <input
                    {...register('accountNumber', {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                    type='number'
                    name='accountNumber'
                    id='accountNumber'
                    className='form-control'
                  />
                  {errors.accountNumber &&
                    errors.accountNumber.type === 'required' && (
                      <span className='input-error__text'>
                        Account Number is Required
                      </span>
                    )}
                  {errors.accountNumber &&
                    errors.accountNumber.type === 'minLength' && (
                      <span className='input-error__text'>
                        Account Number must be 10
                      </span>
                    )}
                  {errors.accountNumber &&
                    errors.accountNumber.type === 'maxLength' && (
                      <span className='input-error__text'>
                        Account Number must be 10
                      </span>
                    )}
                </div>
                <div>
                  <label className='form-control' htmlFor='bankName'>
                    Bank Name
                  </label>
                  <select
                    {...register('bankName', {
                      required: true,
                    })}
                    name='bankName'
                    id='bankName'
                    className='form-control'
                  >
                    <option defaultChecked value=''></option>
                    <option value='001'>GTB</option>
                    <option value='002'>Zenith Bank</option>
                    <option value='003'> Wema Bank</option>
                    <option value='005'>Kuda Bank</option>
                  </select>
                  {errors.bankName && errors.bankName.type === 'required' && (
                    <span className='input-error__text'>
                      Bank Name is Required
                    </span>
                  )}
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
