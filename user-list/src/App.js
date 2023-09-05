import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userData) => {
    setUserList((prev) => {
      return [userData, ...prev];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList userList={userList} />
    </>
  );
}

export default App;
