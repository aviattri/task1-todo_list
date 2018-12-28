//syntax to import the react lib
import React, { Component } from 'react';
//import TodoItems from "./TodoItems";
//this is done to get the react object from react module

/** Trivia
 * A module is a self contained unit that can expose assests to other modules 
 *  or
 *  can acquire assest using import  
 */
 
class TodoList extends Component {
  constructor(props){
   super(props);
   //binding the even handlers
   this.state = {
     //for manting the state of the items
     items: []
   }
   this.addItem = this.addItem.bind(this);
  }

  addItem(e){
   if(this._inputElement.value !==""){

    var newItem = {
       text: this._inputElement.value,
       //we need a key value here becuase we are dealing with multiple items
       key: Date.now()
    };

    this.setState((prevState) => {
      // the previous state argument gives the value of the state object just before
        return{
          items:prevState.items.concat(newItem)
          //concat is to modify the array by adding in the new item
        }
      }
     );

    this._inputElement.value = "";
    //this is to clear out the form once the value has been submitted
    }
    /** 
     * Now to make sure that the things are working fine
     * we need to log it to the console 
     */
    console.log(this.state.items);

    /** 
     * To overcume the default behaviour of the form of refreshing the webpage everytime when 
     * something is submiited to it, we need to use prevent default
     */
    e.preventDefault();
  }

  render(){
    return(
      <div className="todoListMain" id="cont1">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input  ref={(a) => this._inputElement = a}
            
            placeholder="whats in ur mind"/>
            <button type="submit">add item </button>
          </form>  
        </div>
        {/*<TodoItems entries={this.state.items}/> */}
      </div>
    );   
  }
}

export default TodoList; //expose the todolist component to other modules