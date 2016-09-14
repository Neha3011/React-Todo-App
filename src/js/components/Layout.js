import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import * as action from "../actions/action";

function mapStateToProps(state) {
    return {
        todos: state.get('todos')
    };
}

export const Layout = React.createClass({
    onTaskAdded: function (event) {
        if(event.which === 13 && event.target.value.length > 0) {
            const name = event.target.value;
            event.target.value = "";
            this.props.createTodo(name)
        }
    },
    renderTodoBlock: function () {
        if(this.props.todos.size > 0) {
            return <TodoList todos = {this.props.todos}
                             removeTodo = {this.props.removeTodo}
                             removeAllTodos = {this.props.removeAllTodos}
                             markTodoCompleted = {this.props.markTodoCompleted} />
        } else {
            return <h5>No todos added</h5>
        }
    },
    render: function() {
        var divStyle = { width: '45%' };
        var inputStyle = { marginBottom: '30px' };

        return (
            <div class="container well" style={divStyle}>
                <input type = 'text'
                       class = "form-control"
                       placeholder = 'Type & Enter to add todo'
                       onKeyDown = {this.onTaskAdded}
                       style = {inputStyle} />


                {this.renderTodoBlock()}
            </div>
        );
    }
});

export const TodoContainer = connect(mapStateToProps, action)(Layout);