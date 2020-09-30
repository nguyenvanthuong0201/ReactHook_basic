import React from "react";
import PropTypes from "prop-types";

IndexPostList.propTypes = {
  posts: PropTypes.array,
};
IndexPostList.defaultProps = {
  posts: [],
};

function IndexPostList(props) {
  const { posts } = props;
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default IndexPostList;
