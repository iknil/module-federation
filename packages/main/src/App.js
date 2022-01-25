import { useState, useEffect } from "react";
import './App.css';
import Sha256 from "./components/sha256";

function App() {
  const [ list, setList ] = useState([<Sha256 key='0' />]);
  useEffect(async () => {
    const getList = (await import('@docker/List')).default;
    let _list = await getList();

    _list = _list.map((Element, index) => {
      return <Element key={list.length + index} />;
    });

    setList(list.concat(_list));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Encryption Algorithm
      </header>
      <div className="App-container">
        {list}
      </div>
    </div>
  );
}

export default App;
