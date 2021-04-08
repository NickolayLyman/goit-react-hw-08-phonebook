import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const modalRoot = document.querySelector('#modal-root');

const useStyles = createUseStyles({
  Overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  modal: {
    position: 'relative',
    backgroundColor: 'aliceblue',
    borderRadius: 15,
  },
});
const Modal = ({ onClose, children }) => {
  const st = useStyles();
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={st.Overlay} onClick={handleBackdropClick}>
      <div className={st.modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modal;
