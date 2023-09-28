/* eslint-disable */
//경고창 무시하기

// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './Modal';

function App() {
  // let post  = '강남 우동 맛집';
  // 기존
  let temp;
  const [count ,setCount] = useState([0,0,0]);
  const [name , setName] = useState(['여자코트 추천','맛집 추천','파이썬 독학']);
  const [myText ,setmyText] = useState(['','','']);
  let today = new Date();
  let year = today.getFullYear();



  const test = name.map((e,i)=>(
    <div className='list'>
      <h4>{e} <span onClick={()=>{ let tmp = [...count]; tmp[i]+=1;
      setCount(tmp);}}>👍</span> 따봉:{count[i]} </h4>
      <p onClick={()=>setCount([0,0,0])}>따봉 초기화</p>
      <p>{year}</p>
      <div style={{flexDirection:"row"}}>
       상세 내용을 입력하세요:
      <input onChange={(e)=>{
        // console.log(e.target.value);
         temp= e.target.value;
        
      }}/>
      <button onClick={()=>{let tmp = [...myText];tmp[i] = temp; setmyText(tmp); temp = '';}} style={{marginLeft:10}}>Button</button>
      
      </div>
      <Modal name={myText[i]}/>
      
    </div>

  ));

  
  return (
    <div className="App">
     <div className='black-nav'>
      <h4 style={{fontSize:'16px'}}>React blog</h4>
     </div>
      {test} {/* */ }
    

    </div>
  );
}

export default App;
