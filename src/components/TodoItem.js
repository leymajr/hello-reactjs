import { Component } from "react";
import './TodoItem.css'

class TodoItem extends Component {
  render() {
      const item = this.props.item;
      let className = 'TodoItem';
      if (item.isCompleted){
        className += '-completed';
      }
    return <div className={className}>{item.title}</div>;
  }
}

export default TodoItem;
