import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Friends from "./components/Friends";

import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className="container">        
        <Aside />
        <Main/>
        <Friends />

      </div>
    </>
  );
}

export default App;
