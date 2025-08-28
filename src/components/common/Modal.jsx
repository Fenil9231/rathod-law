import React from 'react';

function Modal({ isOpen, onClose, type, title, message, children }) {
  if (!isOpen) return null;

  const getModalIcon = () => {
    switch (type) {
      case 'success':
        return (
          <div className="modal-icon success-icon">
            <i className="bx bx-check-circle"></i>
          </div>
        );
      case 'error':
        return (
          <div className="modal-icon error-icon">
            <i className="bx bx-error-circle"></i>
          </div>
        );
      case 'warning':
        return (
          <div className="modal-icon warning-icon">
            <i className="bx bx-error"></i>
          </div>
        );
      default:
        return (
          <div className="modal-icon info-icon">
            <i className="bx bx-info-circle"></i>
          </div>
        );
    }
  };

  const getModalClass = () => {
    return `custom-modal ${type}-modal`;
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className={getModalClass()} onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            {getModalIcon()}
            <button className="modal-close" onClick={onClose}>
              <i className="bx bx-x"></i>
            </button>
          </div>
          <div className="modal-body">
            {title && <h3 className="modal-title">{title}</h3>}
            {message && <p className="modal-message">{message}</p>}
            {children}
          </div>
          <div className="modal-footer">
            <button className="modal-btn primary-btn" onClick={onClose}>
              {type === 'success' ? 'Great!' : 'Got it'}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.3s ease-out;
        }

        .custom-modal {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          max-width: 480px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease-out;
        }

        .modal-header {
          position: relative;
          padding: 32px 32px 0;
          text-align: center;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: #f5f5f5;
          color: #333;
        }

        .modal-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          font-size: 40px;
          color: white;
        }

        .success-icon {
          background: linear-gradient(135deg, #4CAF50, #45a049);
          animation: successPulse 0.6s ease-out;
        }

        .error-icon {
          background: linear-gradient(135deg, #f44336, #d32f2f);
          animation: errorShake 0.6s ease-out;
        }

        .warning-icon {
          background: linear-gradient(135deg, #ff9800, #f57c00);
        }

        .info-icon {
          background: linear-gradient(135deg, #2196F3, #1976D2);
        }

        .modal-body {
          padding: 0 32px 32px;
          text-align: center;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #333;
          line-height: 1.3;
        }

        .modal-message {
          font-size: 16px;
          line-height: 1.6;
          color: #666;
          margin-bottom: 24px;
        }

        .modal-footer {
          padding: 0 32px 32px;
          text-align: center;
        }

        .modal-btn {
          background: var(--primary-color1, #1a365d);
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          min-width: 120px;
        }

        .modal-btn:hover {
          background: var(--primary-color2, #2c5282);
          transform: translateY(-1px);
        }

        .success-modal .modal-btn {
          background: #4CAF50;
        }

        .success-modal .modal-btn:hover {
          background: #45a049;
        }

        .error-modal .modal-btn {
          background: #f44336;
        }

        .error-modal .modal-btn:hover {
          background: #d32f2f;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes successPulse {
          0% { transform: scale(0.8); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        @keyframes errorShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @media (max-width: 768px) {
          .custom-modal {
            margin: 20px;
            width: calc(100% - 40px);
          }

          .modal-header,
          .modal-body,
          .modal-footer {
            padding-left: 24px;
            padding-right: 24px;
          }

          .modal-icon {
            width: 64px;
            height: 64px;
            font-size: 32px;
          }

          .modal-title {
            font-size: 20px;
          }

          .modal-message {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

export default Modal;