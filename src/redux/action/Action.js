import { ADD, DLT, EDT } from "./ActionType";

export const add = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};

export const dlt = (id) => {
  return {
    type: DLT,
    payload: id,
  };
};
export const edt = (task, id) => {
  return {
    type: EDT,
    payload: { task, id },
  };
};
