import { useState } from 'react';
import './InputBox.css';

function InputBox({ label, children, errorMessage, guideText }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="inputbox-container">
      <label className="input-label">{label}</label>

      <div
        className={`input-content ${errorMessage ? 'error' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {/* 상황에 따라 input 또는 textarea */}
        {children}
      </div>

      {errorMessage ? (
        <p className="error-message">{errorMessage}</p>
      ) : (
        // 작성 조건 알려주는 가이드 문구
        isFocused && guideText && <p className="guide-text">{guideText}</p>
      )}
    </div>
  );
}

export default InputBox;
