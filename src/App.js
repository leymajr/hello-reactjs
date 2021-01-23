import React, {Component} from 'react';
import TodoItem from './components/TodoItem';

class App extends Component{
    constructor(){
        super();
        this.todoItems = [
            {title : "Mua bim bim", isCompleted: true},
            {title : "Ăn kẹo"},
            {title : "Đi đổ xăng hết cmmnr =))"}
        ];
    }

    render(){
        return(
            <div className="App">
                {this.todoItems.map((item, index) => <TodoItem key={index} item = {item}></TodoItem>)}
            </div>
        )
    }
};

export default App;