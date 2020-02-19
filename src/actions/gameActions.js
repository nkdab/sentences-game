import { MOVE_TO_ANSWER, MOVE_TO_QUESTION } from "../constants";

export const moveToQuestion = payload => {
  return {
    type: MOVE_TO_QUESTION,
    payload,
  };
};

export const moveToAnswer = payload => {
  return { type: MOVE_TO_ANSWER, payload };
};
