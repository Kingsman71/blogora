import React, { useEffect, useRef } from 'react';
import './ConfirmationDialog.css';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div
        className="dialog-box"
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        ref={dialogRef}
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title">Confirm Deletion</h2>
        <p id="dialog-description">Are you sure you want to delete this post?</p>
        <div className="dialog-buttons">
          <button onClick={onClose}>Cancel</button>
          <button className="delete" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
