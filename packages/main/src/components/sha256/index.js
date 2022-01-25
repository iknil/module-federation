import { useState, useRef, useCallback } from "react";
import sha256 from "crypto-js/sha256";
import Base64 from 'crypto-js/enc-base64';

function Sha256() {
  const inputRef = useRef(null);
  const [result, setResult] = useState('');
  const encryptHandler = useCallback(() => {
    console.log(inputRef.current.value);
    setResult(Base64.stringify(sha256(inputRef.current.value)));
  }, []);

  return (
    <div className="Encrypt-item">
      <header className="Encrypt-item-header">
        SHA256
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

export default Sha256;