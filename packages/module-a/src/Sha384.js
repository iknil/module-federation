import { useState, useRef, useCallback } from "react";
import sha384 from "crypto-js/sha384";
import Base64 from 'crypto-js/enc-base64';

function Sha384() {
  const inputRef = useRef(null);
  const [result, setResult] = useState('');
  const encryptHandler = useCallback(() => {
    setResult(Base64.stringify(sha384(inputRef.current.value)));
  }, []);

  return (
    <div className="Encrypt-item">
      <header className="Encrypt-item-header">
        SHA384 (module-a)
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