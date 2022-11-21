import React, { useState } from 'react';
import './App.css';
import Title from './TitleSection';

var listLoaded = false;
var userValue;
var userDelete;
var isAdded = false;
var values = []
var del = false;

function RenderDelete(){
  const getValue = (event) => {
    userDelete = event.target.value;
  }
  return (
    <form>
    <label className='InputLabel'>New Delete</label><br />
    <input className='InputField' onChange={getValue}></input>
    </form>
  )
}

function addToList(value){
  if (value == ''){
    return;
  }

  if (values.length == 0){
    values.push(value);
  }

  for (var i = 0; i < values.length; i++){
    if (values[i] === value) return;
  }
  values.push(value);
}

function deleteFromRender(deleteValue){
  for (let i = 0; i < values.length; i++){
    if (deleteValue === values.at(i)){
      values.splice(i, 1);
    }
  }
  console.log(values);
}

function RenderList() {
  listLoaded = true;
  isAdded = false;
  return(
    <div id='todoList'>
        {values.map(element => (
          <><div className='ToDo'>{element}</div></>
            )
          )
        }
    </div>
  );
}

function RenderAdd(){
  const getValue = (event) => {
    userValue = event.target.value;
  }
  return (
    <form>
    <label className='InputLabel'>New ToDo</label><br></br>
    <input className='InputField' onChange={getValue}></input>
    </form>
  )
}

function App() {
  const [deleting, setDelete] = useState('null');
  const [pressed, setPressed] = useState(false);
  var onDelete = () => {
    if (deleting === 'null'){
      setDelete('deleting');
      del = true;
    }
    else if (deleting === 'deleting'){
      setDelete('null')
      del = false;
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <div>
          {pressed ? <RenderAdd /> : null}
          {del ? <RenderDelete /> : null}
          <div>
            <button className='Button' id='AddTodoButton' onClick={() => setPressed(!pressed)}>Add new TODO</button>
          </div>
          <div>          
            <button className='Button' id='DeleteTodoButton' onClick={() => onDelete()}>Delete ToDo</button>
          </div>
        </div>
        {!pressed && listLoaded ? addToList(userValue) : null}
        {!del ? deleteFromRender(userDelete) : null}
        <div>
        
        <div id='deleteDiv'></div>
        </div>
        <RenderList />
      </header>
    </div>
  ); 
}

export default App;