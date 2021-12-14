import useInput from './custom-hook/use-input'

const SimpleInput = (props) => {
  //username
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler
} = useInput(value => value.trim() !== '' )

//useremail
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler
} = useInput(value => value.includes('@'));





  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
 
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
   

    if(!enteredNameIsValid) return;
    console.log(enteredName);
    console.log(enteredEmail);
  }

  

  const nameInputClasses = nameInputHasError ? "form-control error-text" : "form-control ";

  const emailInputClasses = emailInputHasError ? "form-control error-text" : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>

      {/* username */}
    <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p>Name must not be empty</p>}
      </div>

      {/* useremail */}
    <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
          type='text' 
          id='name' 
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p>Email must not be invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
