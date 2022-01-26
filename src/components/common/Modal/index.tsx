import { useState, useEffect, ReactNode } from "react";
import { ReactDOM } from "react-dom";
import * as S from "./Modal.styled";

interface IModalProps {
  onClose: () => void;
  title?: string;
  show: boolean;
  children: ReactNode;
}

const Modal = function ({ onClose, title, show, children }: IModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <S.ModalOverlay>
      <S.Modal>
        <S.ModalHeader>
          <button onClick={handleClose}>Close</button>
        </S.ModalHeader>
        {title && <div>{title}</div>}
        <S.ModalBody>{children}</S.ModalBody>
      </S.Modal>
    </S.ModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  }
  return null;
};

export default Modal;
