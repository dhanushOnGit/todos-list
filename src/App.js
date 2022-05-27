import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos'; 
import {Footer} from './MyComponents/Footer'; 
import {AddTodo} from './MyComponents/AddTodo';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


 
function App() {
  //creating variables
   var myvariable = 345;

   const onDelete = (todo) =>{
     console.log("I am on delete!",todo);
    //let index = todos.indexOf(todo);
    //todos.splice(index,1); this dosent work for react

    
    setTodos(todos.filter((e)=>{
        return e!==todo;

    }));

   }
   const addTodo = (title,desc)=>{
    console.log("Adding this todo",title,desc);
    let sno;
    if(todos.length == 0)
    {
      sno = 0;
    }
    else
    {
     sno = todos[(todos.length) -1].sno +1;
    }
    
    const myTodo={
      sno :sno,
      title:title,
      desc:desc

    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  
   const [todos,setTodos] = useState([]);

  return (
    <>
      <Header  searchbar = {true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      
      <Footer/>
      
    </>
  );
}

export default App;
