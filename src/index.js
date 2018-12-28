 import React from "react";
 import ReactDOM from "react-dom";
 import "./index.css";
 import TodoList from "./TodoList";
 //this is telling the bundeling tool to take all the
 // peice of the app and put it togeter in one css html bundle

 var destination = document.querySelector("#root");
 ReactDOM.render(
     <div>
        <TodoList/>
     </div>, destination
 );


