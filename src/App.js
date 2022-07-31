import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let post = 'happy birthday';
    let [title, b] = useState('Raincoat');
    let [logo, setlogo] = useState('ReactProject');
    //logo같이 잘 안변하는 친구는 state쓸 필요가 없음
    
    //Let num = [1, 2, 3];
    //Let [a, c] = [1, 2];
    // > let a = num[0];
    // > let c = num[1];

    //state를 쓰는 html은 변수가 바뀌면 자동으로 렌더링이 다시 된다

  return (
    <div className="App">
        <div className="black-nav">
        <h4 style={ {color : 'green',fontSize : '16px'} }>myblog</h4>
      </div>
      <div className="list">
        <h4>{ title }</h4>
        <p>220731 created</p>
      </div>
      <div className="list">
        <h4>{ post }</h4>
        <p>220731 created</p>
      </div>
      <div className="list">
        <h4>{ logo }</h4>
        <p>220731 created</p>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
