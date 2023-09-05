import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card/Card';
import styles from './ErrorModal.module.css';
import Button from '../UI/Button/Button';
const Backdrop = (props) => {
  return (
    <div
      className={styles.backdrop}
      onClick={props.onError}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onError}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onError={props.onError} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onError={props.onError}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};
export default ErrorModal;
