import React, {Component} from "react";

/**
 * In this class, take the values passed into the form, stored into the state, i.e state values
 * Earlier we stored these values via using obj.entries() on TodoList Object 
 * Therefore in thiis class, we just use that data, hence array to display it on to the screen
 */

class TodoItems extends Component{
 
  createTasks(item){
    return <li key={item.key}>{item.text}</li>
  }

  render(){
    var todoEntries = this.props.entries;
    // todoEntries, is to get the copy of props
    var listItems = todoEntries.map(this.createTasks);
    // variable listItems is take every entery in the var todoEntries(array) and use the map fx to iterate through every item

    return(
        <ul className = "theList">
             {listItems}
        </ul>
    );

  }
}

export default TodoItems;