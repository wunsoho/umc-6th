import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <h2 id="number">{count}</h2>
      <button id="increase" type="button" onClick={increaseCount}>+</button>
      <button id="decrease" type="button" onClick={decreaseCount}>-</button>  
      <div id="sil2">
        <h1>안녕하세요!</h1>
        <p>내용내용내용</p>
        <button id="open" onClick={openModal}>버튼 열기</button>
        {modalOpen && (
        <div id="modal" className="modal-wrapper">
          <div className="modal">
            <div className="modal-title">안녕하세요</div>
            <div className="modal-info">모달 내용은 어쩌고 저쩌고..</div>
            <button id="close" className="close" onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
      </div>
    </div>
    
  );
}

export default App;