import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-medium">{title}</h2>
          <button 
            onClick={onClose} 
            className="close-button text-lg"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;