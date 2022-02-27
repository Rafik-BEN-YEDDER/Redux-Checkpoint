import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edt } from "../redux/action/Action";

function EditTask({ task }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [txt, setTxt] = useState();
  const dispatch = useDispatch();
  const close = (task, text) => {
    handleClose();
    dispatch(edt({ ...task, text: text }, task.id));
  };
  return (
    <>
      <Button style={{ margin: 10 }} onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Title>EDIT TASK</Modal.Title>
        <Form.Control onChange={(e) => setTxt(e.target.value)} />
        <Button onClick={() => close(task, txt)}>EDIT</Button>
      </Modal>
    </>
  );
}

export default EditTask;
