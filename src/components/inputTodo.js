import React from 'react';
import PropTypes from 'prop-types';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { state } = this;
    const { props } = this;
    e.preventDefault();
    if (state.title.trim()) {
      props.addTodoProps(state.title);
      this.setState({
        title: '',
      });
    } else {
      throw Error('Must write Item');
    }
  };

  render() {
    const { state } = this;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.defaultProps = {
  addTodoProps: '',
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.string,
};

export default InputTodo;
