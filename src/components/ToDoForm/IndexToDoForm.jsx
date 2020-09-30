import React, { useState } from "react";
import PropTypes from "prop-types";

IndexToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};
IndexToDoForm.defaultProps = {
  onSubmit: null,
};

function IndexToDoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValue = {
      title: value,
    };
    onSubmit(formValue);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default IndexToDoForm;
