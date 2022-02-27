import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { dlt, edt } from "../redux/action/Action";
import EditTask from "./EditTask";

function Task({ task }) {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container
        style={{ display: "flex", justifyContent: "center", padding: 20 }}
      >
        <h1>{task.text}</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Button
            style={{ margin: 10 }}
            onClick={() =>
              dispatch(edt({ ...task, done: !task.done }, task.id))
            }
          >
            {" "}
            {task.done ? "TO DO" : "DONE"}
          </Button>
          <Button style={{ margin: 10 }} onClick={() => dispatch(dlt(task.id))}>
            DELET
          </Button>
          <EditTask task={task} />
        </div>
      </Container>
    </div>
  );
}

export default Task;
