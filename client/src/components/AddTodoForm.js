import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodoAsync({
          title: value,
        })
      );
      setValue("");
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add a new task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-add mb-2">
        +
      </button>
    </form>
  );
};

export default AddTodoForm;
