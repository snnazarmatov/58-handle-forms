import React from "react";
import useInput from "./custom-hook/use-input";

const BasicForm = (props) => {
  // FirsName
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firsNameChangeHandler, 
    inputBlurHandler: firstNameBlurHandler
  } = useInput(value => value.trim() !== '')
  // LastName
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: LastNameHasError,
    valueChangeHandler: LastNameChangeHandler, 
    inputBlurHandler: LastNameBlurHandler
  } = useInput(value => value.trim() !== '')

  // email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler
  } = useInput(value => value.includes('@.com'))

  let formIsValid = false;
  if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if(!enteredFirstNameIsValid)return;
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

  }
  
  const firsNameInputClasses = firstNameHasError ? "form-control error-text" : "form-control ";
  const LastNameInputClasses = LastNameHasError ? "form-control error-text" : "form-control ";
  const emailInputClasses = emailHasError ? "form-control error-text" : "form-control ";
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        {/* 1-input */}
        <div className={firsNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          onChange={firsNameChangeHandler}
          onBlur={firstNameBlurHandler}
          value={enteredFirstName}
          />
          { firstNameHasError && <p>Firs Name must not be emty</p>}
        </div>
        {/* 2-input */}
        <div className={LastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name'
          onChange={LastNameChangeHandler}
          onBlur={LastNameBlurHandler}
          value={enteredLastName}
           />
           {LastNameHasError && <p>Last Name must not be emty</p>}
        </div>
      </div>

      {/* 3-email input */}
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text' 
        id='name' 
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        />
        {emailHasError && <p>email must not be invalid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
