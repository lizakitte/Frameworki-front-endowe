import useFetch from "../hooks/useFetch";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useReducer, useState } from "react";
import TableDataReducer from "../data/TableDataReducer";
import { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { redirect } from "react-router-dom";
import { ToastHeader } from "react-bootstrap";

function Lab5() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  const [state, dispatch] = useReducer(TableDataReducer, []);
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    if (posts && users && comments) {
      const tableData = posts.map((p) => {
        const user = users.find((u) => u.id === p.userId) || {
          name: "Unknown User",
          id: "unknown",
        };
        const postComments = comments.filter((c) => c.postId === p.id) || [];

        return {
          user,
          post: p,
          comments: postComments,
        };
      });
      dispatch({ sortOrder: "SET_DATA", payload: tableData });

      setInitialState(tableData);
    }
  }, [posts, users, comments]);

  return (
    <table style={{ margin: "auto" }}>
      <thead>
        <th>
          <DropdownButton
            variant="success"
            id="dropdown-button-user"
            title="User"
          >
            <Dropdown.Item
              onClick={() =>
                dispatch({
                  sortOrder: "descending",
                  field: (data) => data.user.name,
                })
              }
            >
              Decsending order
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                dispatch({
                  sortOrder: "ascending",
                  field: (data) => data.user.name,
                })
              }
            >
              Ascending order
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                dispatch({
                  sortOrder: "natural",
                  payload: initialState,
                })
              }
            >
              Natural order
            </Dropdown.Item>
          </DropdownButton>
        </th>
        <th>
          <DropdownButton
            variant="success"
            id="dropdown-button-post"
            title="Post"
          >
            <Dropdown.Item
              onClick={() =>
                dispatch({
                  sortOrder: "descending",
                  field: (data) => data.post.title,
                })
              }
            >
              Decsending order
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                dispatch({
                  sortOrder: "ascending",
                  field: (data) => data.post.title,
                })
              }
            >
              Ascending order
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                dispatch({
                  sortOrder: "natural",
                  payload: initialState,
                })
              }
            >
              Natural order
            </Dropdown.Item>
          </DropdownButton>
        </th>
        <th>
          <DropdownButton
            variant="success"
            id="dropdown-button-comments"
            title="Comments"
          >
            <Dropdown.Item
              onClick={() =>
                dispatch({
                  sortOrder: "descending",
                  field: (data) => data.comments.length,
                })
              }
            >
              Decsending order
            </Dropdown.Item>
            <Dropdown.Item
              nClick={() =>
                dispatch({
                  sortOrder: "ascending",
                  field: (data) => data.comments.length,
                })
              }
            >
              Ascending order
            </Dropdown.Item>
            <Dropdown.Item
              nClick={() =>
                dispatch({
                  sortOrder: "natural",
                  payload: initialState,
                })
              }
            >
              Natural order
            </Dropdown.Item>
          </DropdownButton>
        </th>
      </thead>
      <tbody>
        {state.map(function tableLine(item) {
          return (
            <tr>
              <td>
                <a href={"/lab5/users/" + item.user.id}>{item.user.name}</a>
              </td>
              <td>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item>
                    <Accordion.Header>{item.post.title}</Accordion.Header>
                    <Accordion.Body>{item.post.body}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>
              <td>
                <a href={"/lab5/posts/" + item.post.id + "/comments"}>{item.comments.length}</a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Lab5;
