import { useState, useRef, useCallback } from "react";
import sha512 from "crypto-js/sha512";
import Base64 from 'crypto-js/enc-base64';

function Sha384() {
  const inputRef = useRef(null);
  const [result, setResult] = useState('');
  const encryptHandler = useCallback(() => {
    setResult(Base64.stringify(sha512(inputRef.current.value)));
  }, []);

  return (
    <div className="Encrypt-item">
      <header className="Encrypt-item-header">
        SHA512 (module-b)
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

export default Sha384;