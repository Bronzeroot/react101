
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let post = 'happy birthday';
    let [subject, a] = useState('GA4');
    let [title, b] = useState(['Raincoat','Boots','Umbrella']);
    let [like, likechange] = useState(0);
    let [logo, setlogo] = useState('ReactProject');
    //logo같이 잘 안변하는 친구는 state쓸 필요가 없음
    
    //Let num = [1, 2, 3];
    //Let [a, c] = [1, 2];
    // > let a = num[0];
    // > let c = num[1];

    //state를 쓰는 html은 변수가 바뀌면 자동으로 렌더링이 다시 된다
  function 함수(){
    console.log(1);
  }
  // ()=> {console.log(1)}
  // 위 코드는 함수를 만드는 기능
  // State는 등호로 변경이 안됨
  return (
    <div className="App">
        <div className="black-nav">
        <h4 style={ {color : 'green',fontSize : '16px'} }>myblog</h4>
      </div>
      <div className="list">
        <h4>{ title[0] } <span onClick={ ()=>{likechange(like+1) }}>like</span> 
        { like } </h4>
        <span onClick={()=>{

          let copy = [...title];
          // ...을 통해서 array풀었다가 다시 넣어서.. 새로운 ref data
          copy[0]='Jacket';
          b(copy);
        }}>change</span>
        <p>220731 created</p>
      </div>
      
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>220731 created</p>
      </div>

      <div className="list">
        <h4>{ title[2] }</h4>
        <p>220731 created</p>
      </div>
      <div className="list">
        <h4>{ logo }</h4>
        <p>220814 created</p>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
