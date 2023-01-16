import React from 'react';
import InputTodo from './inputTodo';
import TodosList from './todoList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevState) {
    const { state } = this;
    if (prevState.todos !== state.todos) {
      const temp = JSON.stringify(state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    const { state } = this;
    this.setState(() => [...state.todos.filter((todo) => todo.id !== id)]);
  };

  addTodoItem = (title) => {
    const { state } = this;
    const newTodo = {
      id: Date.now().toString(36) + Math.random().toString(36),
      title,
      completed: false,
    };
    this.setState(() => [...state.todos, newTodo]);
  };

  setUpdate = (updatedTitle, id) => {
    const { state } = this;
    this.setState(() => {
      state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle; // eslint-disable-line no-param-reassign
        }
        return todo;
      });
    });
  };

  render() {
    const { state } = this;
    return (
      <div className="container">
        <div className="inner">
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
