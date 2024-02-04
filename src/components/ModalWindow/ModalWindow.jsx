import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  StyledModalWindowOverlay,
  StyledModalWindow,
  StyledModalWindowCloseButton,
  // StyledModalWindowCloseIcon,
  StyledModalWindowContainer,
} from './ModalWindow.styled';

const ModalWindow = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const onModalClose = () => {
    onClose();
  };

  return createPortal(
    <StyledModalWindowOverlay onClick={onClose}>
      <StyledModalWindow onClick={e => e.stopPropagation()}>
        <StyledModalWindowCloseButton onClick={onModalClose}>
          {/* <CloseOutlinedIcon sx={{ display: 'flex' }} /> */}
          <CloseOutlinedIcon
            fontSize="small"
            style={{ fill: 'var(--main-text-color)' }}
          />
        </StyledModalWindowCloseButton>
        {/* <ModalClose onClick={handleClose} /> */}

        <StyledModalWindowContainer>{children}</StyledModalWindowContainer>
      </StyledModalWindow>
    </StyledModalWindowOverlay>,
    document.getElementById('modal-root')
  );
};

export default ModalWindow;
