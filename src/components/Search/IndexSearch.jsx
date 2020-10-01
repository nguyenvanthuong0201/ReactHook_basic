import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

IndexSearch.propTypes = {
  onSubmit: PropTypes.func,
};
IndexSearch.defaultProps = {
  onSubmit: null,
};

function IndexSearch(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null); // giữ nguyên giá trị sau mỗi lần render

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      //// reset timeout cũ để tiếp tục timeout mới
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      ///sau 0.3s sẽ cho ra kết quả || kĩ thuật debounce
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);
    }, 300);
  }
  return (
    <form className="form__Search">
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default IndexSearch;
