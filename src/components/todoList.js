import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { props } = this;
    return (
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
            setUpdate={props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

TodoList.defaultProps = {
  todos: [],
  setUpdate: null,
  handleChangeProps: null,
  deleteTodoProps: null,
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf([PropTypes.object]),
  setUpdate: PropTypes.func,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};

export default TodoList;
