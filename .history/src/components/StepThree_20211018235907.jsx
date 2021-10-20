import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function StepThree({ onboardForm, setOnboardForm, handleOnboarding }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [usePOS, setUsePOS] = useState(false);

  const onSubmit = (data) => {
    const newOnboardForm = { ...onboardForm };
    newOnboardForm.typeOfBusiness = data.typeOfBusiness;
    newOnboardForm.businessCategory = data.businessCategory;
    handleOnboarding(newOnboardForm);
    setOnboardForm(newOnboardForm);
  };
  return (
    <div className='Step-two-container'>
      <div>
        <p className='step-process__text'> Step 3/3</p>
        <p className='step-process__header'>Business Category</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='steps-form'>
          <div style={{ marginTop: '25px' }}>
            <div className='insta-twitter-input__card'>
              <div>
                <label className='form-control' htmlFor='typeOfBusiness'>
                  Type of Business
                </label>
                <select
                  {...register('typeOfBusiness', {
                    required: true,
                  })}
                  name='typeOfBusiness'
                  id='typeOfBusiness'
                  className='form-control'
                >
                  <option defaultChecked value=''></option>
                  <option value='online'>Online</option>
                  <option value='offline'>Offline</option>
                </select>
                {errors.typeOfBusiness &&
                  errors.typeOfBusiness.type === 'required' && (
                    <span className='input-error__text'>
                      This option is Required
                    </span>
                  )}
              </div>
              <div>
                <label className='form-control' htmlFor='businessCategory'>
                  Business Category
                </label>
                <select
                  {...register('businessCategory', {
                    required: true,
                  })}
                  name='businessCategory'
                  id='businessCategory'
                  className='form-control'
                >
                  <option defaultChecked value=''></option>
                  <option value='online'>Online</option>
                  <option value='offline'>Offline</option>
                </select>
                {errors.businessCategory &&
                  errors.businessCategory.type === 'required' && (
                    <span className='input-error__text'>
                      This option is Required
                    </span>
                  )}
              </div>
            </div>
          </div>

          <div>
            <p className='select-verification__text'>
              Do you use POS machines for your business?
            </p>
            <div className='verification-method-card'>
              <button
                onClick={() => setUsePOS(true)}
                className={
                  usePOS
                    ? 'btn btn__verification active'
                    : 'btn btn__verification'
                }
              >
                Yes
              </button>

              <button
                onClick={() => setUsePOS(false)}
                className={
                  usePOS
                    ? 'btn btn__verification'
                    : 'btn btn__verification active'
                }
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div className='steps-form__line'></div>
        <div className='steps-form__button'>
          <div></div>
          <button type='submit' className='btn btn-continue'>
            Complete
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepThree;
