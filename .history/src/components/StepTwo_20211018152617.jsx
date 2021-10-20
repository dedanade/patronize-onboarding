import React from 'react';

function StepTwo({ setStep }) {
  const handleSubmit = () => {
    setStep(3);
  };
  return (
    <div className='Step-two-container'>
      <div>
        <p className='step-process__text'> Step 2/3</p>
        <p className='step-process__header'>Social Handles</p>
        <p className='step-process__sub-header'>
          Enter your business social media handles
        </p>
      </div>
      <div className='steps-form'>
        <div style={{ marginTop: '25px' }}>
          <label className='form-control' htmlFor='abeg-tag-input'>
            Choose your Abeg Tag (required)
          </label>
          <div className='prepend-input-group' style={{ width: '380px' }}>
            <div className='prepend-input__value'>@</div>
            <input
              type='text'
              name='abeg-tag-input'
              id='abeg-tag-input'
              className='form-control-prepend'
            />
          </div>
          <div className='insta-twitter-input__card'>
            <div>
              <label className='form-control' htmlFor='instagram-input'>
                Instagram
              </label>
              <div className='prepend-input-group' style={{ width: '380px' }}>
                <div className='prepend-input__value'>@</div>
                <input
                  type='text'
                  name='instagram-input'
                  id='instagram-input'
                  className='form-control-prepend'
                />
              </div>
            </div>
            <div className='twitter-input'>
              <label className='form-control' htmlFor='twitter-input'>
                Twitter
              </label>
              <div className='prepend-input-group' style={{ width: '380px' }}>
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
        <button onClick={() => handleSubmit()} className='btn btn-continue'>
          Confirm Social Handles
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
