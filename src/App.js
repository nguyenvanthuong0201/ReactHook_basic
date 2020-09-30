import React, { useEffect, useState } from "react";
import "./App.scss";
import IndexPostList from "./components/PostList/IndexPostList";
import IndexToDoForm from "./components/ToDoForm/IndexToDoForm";
// import IndexColorBox from "./components/ColorBox/IndexColorBox";
import IndexToDoList from "./components/ToDoList/IndexToDoList";
import IndexPagination from "./Pagination/IndexPagination";
import queryString from "query-string";

function App() {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRow: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        //luôn đặt trong try catch để nhiều khi bị lỗi|| queryString npm về
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log(responseJSON);
        const { data, pagination } = responseJSON; //lấy từ API
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  function handleClick(toDo) {
    console.log(toDo);
    const index = toDoList.findIndex((x) => x.id === toDo.id); // Tìm vị trí của index
    if (index < 0) return;

    const newTodoList = [...toDoList]; ///tạo ra 1 mãng mới để remove
    newTodoList.splice(index, 1);
    setToDoList(newTodoList); ///lấy mãng mới thay thế cho mãng cũ
  }
  function onSubmit(formValue) {
    console.log("form Value", formValue);
    const newTodo = {
      id: toDoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...toDoList];
    newTodoList.push(newTodo);
    setToDoList(newTodoList);
  }
  function handlePageChange(newPage) {
    console.log("New pages", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  return (
    <div className="app">
      <h1>Well come to reactHook</h1>
      {/* <IndexColorBox /> (1) */}
      {/* <IndexToDoForm onSubmit={onSubmit} />
      <IndexToDoList toDos={toDoList} onToDoClick={handleClick} /> */}
      <IndexPostList posts={postList} />
      <IndexPagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
