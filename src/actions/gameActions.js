import { MOVE_TO_ANSWER, MOVE_TO_QUESTION } from "../constants";

export const moveToQuestion = id => {
  return {
    type: MOVE_TO_QUESTION,
    payload: { id },
  };
};

export const moveToAnswer = id => {
  return { type: MOVE_TO_ANSWER, payload: { id } };
};
