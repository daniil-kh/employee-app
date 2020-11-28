import React, { useState } from 'react';

import './add-modal.style.scss';

const AddModal = (props) => {
  const { isShowed, onSubmit, onCancel } = props;

  const [employeeInfo, setEmployeeInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  return isShowed ? (
    <div className='modal-container'>
      <div className='modal-content'>
        <div className='input-container'>
          <div className='input-field-container'>
            <input
              onChange={(event) =>
                setEmployeeInfo((prevState) => ({
                  ...prevState,
                  first_name: event.target.value,
                }))
              }
              className='input'
              type='text'
              placeholder='First Name'
            />
          </div>
          <div className='input-field-container'>
            <input
              className='input'
              onChange={(event) =>
                setEmployeeInfo((prevState) => ({
                  ...prevState,
                  last_name: event.target.value,
                }))
              }
              type='text'
              placeholder='Last Name'
            />
          </div>
          <div className='input-field-container'>
            <input
              className='input'
              onChange={(event) =>
                setEmployeeInfo((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }))
              }
              type='text'
              placeholder='Email'
            />
          </div>
          <div className='input-field-container'>
            <input
              className='input'
              onChange={(event) =>
                setEmployeeInfo((prevState) => ({
                  ...prevState,
                  avatar: event.target.value,
                }))
              }
              type='text'
              placeholder='Avatar URL'
            />
          </div>
        </div>
        <div className='button-container'>
          <span
            className='button'
            onClick={() => {
              onSubmit(employeeInfo);
              onCancel();
            }}
          >
            Submit
          </span>
          <span className='button' onClick={onCancel}>
            Cancel
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ display: 'none' }}></div>
  );
};

export default AddModal;
