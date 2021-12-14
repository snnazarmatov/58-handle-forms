import React, {useState, useEffect} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  //input ту иштеткенде гана проверка болот
  const [enterednameToched, setEnterednameToched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enterednameToched;

  //проверка без useEffect
  let formIsValid = false;
  if(enteredNameIsValid) {
    formIsValid = true;
  }
  
  //**проверка на основе useEffect */
  // useEffect(() => {
  //   if(enteredNameIsValid){
  //      setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false)
  //   }
  // }, [enteredNameIsValid]);

  //*** */

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
//проверка на основе каждова нажатии клавиши
    if(enteredName.trim() !== ''){
    }

  };
//**2 проверка на основе onBlur*/
  const nameinputBlurHandler = (e) => {
    setEnterednameToched(true)

    // if(enteredName.trim() === ''){
    //   setEnteredNameIsValid(false)
    //   return;
    // }

  }
  //** */

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnterednameToched(true)
    //1
    if(!enteredNameIsValid) return;
    setEnteredName('');
    console.log(enteredName);
    setEnterednameToched(false)
  }

  

  const nameInputClasses = !enteredNameIsValid && enterednameToched ? "form-control error-text" : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
    <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameinputBlurHandler}
          value={enteredName}
        />
        {nameInputIsValid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
