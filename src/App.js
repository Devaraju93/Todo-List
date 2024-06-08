import { useState,useEffect } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
function App() {
 const [iscompleteScreen, setiscompleteScreen] = useState(false);
 const [allTodos,setTodos]=useState([]);
 const [newTitle,setNewTitle]=useState("");
 const [newDescription,setNewDescription]=useState("");

 const handleAddTodo =()=>{
  let newTodoItem = {
    title:newTitle,
    description:newDescription
  }

  let updatedTodoArr =[...allTodos];
  updatedTodoArr.push(newTodoItem);
  setTodos(updatedTodoArr);
  localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
 }


 useEffect(()=>{
  let savedTodo = JSON.parse(localStorage.getItem('todolist'))
  if(savedTodo){
    setTodos(savedTodo)
  }
 },[])
  return (
    <div className="App">
      <h1 className="">Todo</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="what's the task title?" />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text"  value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="what's the task Description?" />
          </div>
          <div className="todo-input-item">
            <button type="button" onClick={handleAddTodo} className="primaryBtn">
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn  ${
              iscompleteScreen === false ? "active" : ""
            }`}
            onClick={() => setiscompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn  ${
              iscompleteScreen === true ? "active" : ""
            }`}
            onClick={() => setiscompleteScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          {allTodos.map((item,index)=>{
            return(
              <div className="todo-list-item" key={index}>
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
             <div>
            <AiOutlineDelete className="icon" />
            <BsCheckLg  className="check-icon" />
           </div>
          </div>
            )
          })}
         
        </div>
      </div>
    </div>
  );
}

export default App;
