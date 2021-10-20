import React from 'react';

function StepThree(props) {
  return (
    <div className='Step-two-container'>
      <div>
        <p className='step-process__text'> Step 3/3</p>
        <p className='step-process__header'>Business Category</p>
      </div>
      <div className='steps-form'>
        <div style={{ marginTop: '25px' }}>
          <div className='insta-twitter-input__card'>
            <div>
              <label className='form-control' htmlFor='type-of-business'>
                Type of Business
              </label>
              <select
                name='type-of-business'
                id='type-of-business'
                className='form-control'
              >
                <option defaultChecked value=''></option>
                <option value='online'>Online</option>
                <option value='offline'>Offline</option>
              </select>
            </div>
            <div>
              <label className='form-control' htmlFor='business-category'>
                Business Category
              </label>
              <select
                name='business-category'
                id='business-category'
                className='form-control'
              >
                <option defaultChecked value=''></option>
                <option value='online'>Online</option>
                <option value='offline'>Offline</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <p className='select-verification__text'>
            Do you use POS machines for your business?
          </p>
          <div className='verification-method-card'>
            <button className='btn btn__verification active'>Yes</button>

            <button className='btn btn__verification'>No</button>
          </div>
        </div>
      </div>
      <div className='steps-form__line'></div>
      <div className='steps-form__button'>
        <div></div>
        <button className='btn btn-continue'>Complete</button>
      </div>
    </div>
  );
}

export default StepThree;
