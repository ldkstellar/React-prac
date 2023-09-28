import './App.css';
export default ({name})=>{
    let myname = name !==''?name:'상세내용';
    return(<div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>{myname}</p>
      
    </div>

    )
}