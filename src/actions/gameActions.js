import {
  END_VALIDATE_ANSWER,
  MOVE_TO_ANSWER,
  MOVE_TO_QUESTION,
  START_VALIDATE_ANSWER,
  TOGGLE_MATCHED,
  TOGGLE_VALIDATING
} from "../constants";

export const moveToQuestion = id => {
  return {
    type: MOVE_TO_QUESTION,
    payload: { id }
  };
};

export const moveToAnswer = id => {
  return { type: MOVE_TO_ANSWER, payload: { id } };
};

export const toggleValidating = () => {
  return { type: TOGGLE_VALIDATING };
};

export const toggleMatched = () => {
  return { type: TOGGLE_MATCHED };
};

export const startValidateAnsewr = () => {
  return { type: START_VALIDATE_ANSWER };
};

export const endValidateAnswer = () => {
  return { type: END_VALIDATE_ANSWER };
};
