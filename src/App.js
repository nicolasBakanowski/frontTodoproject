import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import TodoView from './components/TodoListView';
const cors = require('cors')

function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc,setDesc] = useState('')
  
  //Read all todo
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/todo')
    .then(res => {
      setTodoList(res.data)
    })
  });
 
 
  // post a todo
  const addTodoHandler = () =>{
    axios.post('http://127.0.0.1:8000/api/todo',{'title':title,'description': desc })
    .then(res => console.log(res))
  };
  
  return (
    <div className="App list-group-item
     justify-content-center align-items-center mx-auto"
     style={{"width": "400px","backgroundColor":"white", "marginTop":"15px"}}>
      <h1 className ="card text-white bg-primary mb-1"
      styleName="max-width: 20rem;"> Task manager </h1>    
      <h6 className="card text-white bg-primary mb-3">Fastapi - react - MondoDB</h6>
      <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">ADD your task</h5>
        <span className="card-text">
          <input className ="mb-2 form-control titleIn" onChange={event=>setTitle(event.target.value)} placeholder="title"></input>
          <input className ="mb-2 form-control desIn" onChange={event=>setDesc(event.target.value)} placeholder="Description"></input>
        <button className="btn btn-outline-primary mx-2 mb-3" style={
          {'borderRadius':'50px',"font-weight":"bold"}} onClick={addTodoHandler}>add Task</button>
        </span>
      <h5 className="card text-white bg-dark mb-3">Your task</h5>      
          <div>
             <TodoView todoList={todoList}>{todoList}</TodoView>
          </div>
      </div>
       <h6 className="card text-dark bg-warning py-1 mb-0">Copyright
       2021, All right reserved </h6>






















    </div>
  );
}

export default App;
