import React from "react";
import { Modal } from './components/Modal';
import './App.css';

function App() {
  return (
    <div>
      <h1>React Custom Components</h1>
      <h2>Modal</h2>
      <div className="box">
        <Modal />
      </div>
    </div>
  );
}

export default App;
