import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";

import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className="container">        
        <Aside />
        <Main/>
        <Aside />

      </div>
    </>
  );
}

export default App;
