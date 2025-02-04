import React from 'react';


function SimpleModal({ isOpen, onClose, children }) {
  const onWrapperCLick = (event) => {
    if (event.target.classList.contains("simpleModal__wrapper")) onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="simplemodal">
          <div className="simplemodal__wrapper" onClick={onWrapperCLick}>
            <div className="simplemodal__wrapper-content">
              <button className="simplemodal__wrapper-content-closebtn"
                onClick={() => onClose()}>
                X
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SimpleModal
