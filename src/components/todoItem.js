import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import styles from './todoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const { props } = this;
    const { state } = this;

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { completed, id, title } = props.todo;

    const viewMode = {};
    const editMode = {};

    if (state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
          />
          {/* eslint-disable-next-line */}
          <button onClick={() => props.deleteTodoProps(id)}><DeleteIcon color="error" /></button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => { props.setUpdate(e.target.value, id); }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.defaultProps = {
  todo: {},
  handleChangeProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

TodoItem.propTypes = {
  todo: PropTypes.objectOf([PropTypes.object]),
  handleChangeProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodoItem;
