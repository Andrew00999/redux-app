import React from 'react'
import './App.css';
import Likes from './Likes';



function App() {

  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="https://img5.goodfon.ru/wallpaper/nbig/9/8c/poberezhe-portugaliia-visentina.jpg" alt="crysis" />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
