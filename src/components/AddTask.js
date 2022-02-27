import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../redux/action/Action";

function AddTask() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [txt, setTxt] = useState();
  const dispatch = useDispatch();

  const close = (text) => {
    handleClose();
    dispatch(add({ id: Math.random(), text: text, done: false }));
  };

  return (
    <>
      <Button onClick={handleShow}>ADD</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Title>ADD TASK</Modal.Title>
        <Form.Control onChange={(e) => setTxt(e.target.value)} />
        <Button onClick={() => close(txt)}>ADD</Button>
      </Modal>
    </>
  );
}

export default AddTask;
