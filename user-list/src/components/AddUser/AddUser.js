import React, { useState, useRef } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const DEFAULT_VALUES = {
  userName: 'Username',
  age: 1,
};

const AddUser = (props) => {
  const userNameInputRef = useRef();
  const userAgeInputRef = useRef();

  const [userInput, setUserInput] = useState(DEFAULT_VALUES);
  const [errorShown, setErrorShown] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = userNameInputRef.current.value;
    const enteredAge = userAgeInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.length === 0) {
      setErrorShown({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge <= 0) {
      setErrorShown({
        title: 'Invalid Age',
        message: 'Please enter a valid age (older than 0).',
      });
      return;
    }
    props.onAddUser(userInput);
    setUserInput(DEFAULT_VALUES);
  };

  const userNameChangeHandler = (event) => {
    setUserInput((prev) => {
      return {
        ...prev,
        userName: event.target.value,
      };
    });
  };

  const userAgeChangeHandler = (event) => {
    setUserInput((prev) => {
      return {
        ...prev,
        age: event.target.value,
      };
    });
  };

  const errorHandler = () => {
    setErrorShown(null);
  };
  return (
    <Wrapper>
      {errorShown && (
        <ErrorModal
          title={errorShown.title}
          message={errorShown.message}
          onError={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            onChange={userNameChangeHandler}
            value={userInput.userName}
            ref={userNameInputRef}
          />
          <label htmlFor="userAge">User Age</label>
          <input
            type="number"
            id="userAge"
            name="userAge"
            onChange={userAgeChangeHandler}
            value={userInput.age}
            ref={userAgeInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
