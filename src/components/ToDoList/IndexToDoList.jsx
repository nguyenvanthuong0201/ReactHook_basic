import React from "react";
import PropTypes from "prop-types";

IndexToDoList.propTypes = {
  toDos: PropTypes.array,
  onToDoClick: PropTypes.func,
};
IndexToDoList.defaultProps = {
  toDos: [],
  onToDoClick: null,
};

function IndexToDoList(props) {
  const { toDos, onToDoClick } = props;

  function handleClick(toDo) {
    if (onToDoClick) {
      onToDoClick(toDo);
    }
  }

  return (
    <ul className="todo-list">
      {toDos.map((toDo) => (
        <li key={toDo.id} onClick={() => handleClick(toDo)}>
          {toDo.title}
        </li>
      ))}
    </ul>
  );
}

export default IndexToDoList;
