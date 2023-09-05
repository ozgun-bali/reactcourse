import React from 'react';
import styles from './UsersList.module.css';
import Card from '../UI/Card/Card';
const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.userList.map((user) => (
          <li key={Math.random()}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
