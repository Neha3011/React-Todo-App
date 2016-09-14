import React from "react";
import TodoItem from "./TodoItem";

export default React.createClass({
    onTaskCompleted: function (id) {
        this.props.removeTodo(id)
    },
    onRemoveAllTodos: function () {
        this.props.removeAllTodos();
    },
    render: function () {
        var removeAllStyle = {float: 'right', cursor: 'pointer'};
        var clearBoth = {clear: 'both'};

        return (
            <div>
                <a style={removeAllStyle} onClick={this.onRemoveAllTodos}>Remove all</a>
                <ul style={clearBoth}>
                    {this.props.todos.map((t, v) => (
                        <TodoItem key={t.get('id')}
                                  removeTodo = {this.props.removeTodo}
                                  todo={t}
                                  index={v}
                                  markTodoCompleted = {this.props.markTodoCompleted}/>
                    ))}
                </ul>
            </div>

        )
    }
})