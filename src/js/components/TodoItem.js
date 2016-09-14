import React from "react";

export default React.createClass({
    onTaskCompleted: function (id) {
        this.props.markTodoCompleted(id)
    },
    onTaskDeleted: function (id) {
        this.props.removeTodo(id);
    },
    renderConditionalText: function (flag) {
        if(flag) {
            return 'Mark as Uncompleted';
        } else {
            return 'Mark as Completed';
        }
    },
    getStyleForAnchor: function (flag) {
        if(flag) {
            return {textDecoration: 'line-through', color: 'grey'}
        } else {
            return {textDecoration: 'none', color: 'black'}
        }
    },
    render: function () {
        var anchorStyle = { cursor: 'pointer', paddingLeft: '2%' };
        const todo = this.props.todo;
        return (
            <li>
                {/*<span style={this.getStyleForAnchor(todo.get('completed'))}>{todo.get('name')}</span>*/}
                <span class={todo.get('completed')? 'active': 'inactive'}>{todo.get('name')}</span>
                <a onClick={() => this.onTaskDeleted(this.props.index)} style={anchorStyle}> Remove</a>
                <a onClick={() => this.onTaskCompleted(todo.get('id'))} style={anchorStyle}>
                    {this.renderConditionalText(todo.get('completed'))}
                </a>
            </li>
        )
    }
})