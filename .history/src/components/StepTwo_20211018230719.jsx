import React from 'react';
import { useForm } from 'react-hook-form';

function StepTwo({ setStep, onboardForm, setOnboardForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const newOnboardForm = { ...onboardForm };
    newOnboardForm.abegTag = data.abegTag;
    newOnboardForm.instagramTag = data.instagramTag;
    newOnboardForm.twitterTag = data.twitterTag;
    setOnboardForm(newOnboardForm);
    setStep(3);
  };
  console.log(onboardForm);
  return (
    <div className='Step-two-container'>
      <div>
        <p className='step-process__text'> Step 2/3</p>
        <p className='step-process__header'>Social Handles</p>
        <p className='step-process__sub-header'>
          Enter your business social media handles
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='steps-form'>
          <div style={{ marginTop: '25px' }}>
            <label className='form-control' htmlFor='abegTag'>
              Choose your Abeg Tag (required)
            </label>
            <div className='prepend-input-group' style={{ width: '380px' }}>
              <div className='prepend-input__value'>@</div>
              <input
                {...register('abegTag', {
                  required: true,
                })}
                type='text'
                name='abegTag'
                id='abegTag'
                className='form-control-prepend'
              />
            </div>
            {errors.abegTag && errors.abegTag.type === 'required' && (
              <p> Abeg Tag is Required</p>
            )}
            <div className='insta-twitter-input__card'>
              <div>
                <label className='form-control' htmlFor='instagramTag'>
                  Instagram
                </label>
                <div className='prepend-input-group' style={{ width: '380px' }}>
                  <div className='prepend-input__value'>@</div>
                  <input
                    {...register('instagramTag', {
                      required: true,
                    })}
                    type='text'
                    name='instagramTag'
                    id='instagramTag'
                    className='form-control-prepend'
                  />
                </div>
                {errors.instagramTag &&
                  errors.instagramTag.type === 'required' && (
                    <p> Instagram Tag is Required</p>
                  )}
              </div>
              <div className='twitter-input'>
                <label className='form-control' htmlFor='twitterTag'>
                  Twitter
                </label>
                <div className='prepend-input-group' style={{ width: '380px' }}>
                  <div className='prepend-input__value'>@</div>
                  <input
                    {...register('twitterTag', {
                      required: true,
                    })}
                    type='text'
                    name='twitterTag'
                    id='twitterTag'
                    className='form-control-prepend'
                  />
                </div>
                {errors.twitterTag && errors.twitterTag.type === 'required' && (
                  <p> Twitter Tag is Required</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='steps-form__line'></div>
        <div className='steps-form__button'>
          <div></div>
          <button onClick={() => handleSubmit()} className='btn btn-continue'>
            Confirm Social Handles
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepTwo;
