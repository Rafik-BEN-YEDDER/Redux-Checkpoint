import { taskListe } from "../../data/data";
import { ADD, DLT, EDT } from "../action/ActionType";

const intialeState = {
  task: taskListe,
};

const taskReducer = (state = intialeState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, task: [...state.task, payload] };
    case DLT:
      return { ...state, task: state.task.filter((el) => el.id !== payload) };
    case EDT:
      return {
        ...state,
        task: state.task.map((el) =>
          el.id === payload.id ? payload.task : el
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
