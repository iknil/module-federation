import { useState, useRef, useCallback } from "react";
import sha224 from "crypto-js/sha224";
import Base64 from 'crypto-js/enc-base64';

function Sha224() {
  const inputRef = useRef(null);
  const [result, setResult] = useState('');
  const encryptHandler = useCallback(() => {
    setResult(Base64.stringify(sha224(inputRef.current.value)));
  }, []);

  return (
    <div className="Encrypt-item">
      <header className="Encrypt-item-header">
        SHA244 (module-a)
      </header>
      <div className="Encrypt-item-body">
        text:
        <input ref={inputRef} type="text"/>
        <button onClick={encryptHandler}>Encrypt</button>
      </div>
      <footer className="Encrypt-item-footer">
        result: {result}
      </footer>
    </div>
  );
}

export default Sha224;