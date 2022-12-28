import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  // title: string;
  onClose: () => void;
}

interface BackdropProps {
  onClose: () => void;
}

interface ModalOverlayProps {
  children: React.ReactNode;
}

const portalElement = document.getElementById("overlays") as HTMLElement;

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <>
      {/* <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
        onClick={onClose}
      >
        <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
          <h1 className="text-2xl text-center mb-2">{title}</h1>
          {children}
        </div>
      </div> */}
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)};
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
