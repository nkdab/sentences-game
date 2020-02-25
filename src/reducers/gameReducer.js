import {
  END_VALIDATE_ANSWER,
  MOVE_TO_ANSWER,
  MOVE_TO_QUESTION,
  TOGGLE_MATCHED,
  VALIDATE_ANSWER
} from "../constants";

const initialState = {
  question: "Что ты творишь?",
  answer: "what are you doing ?",
  isMatched: false,
  isValidating: false,
  questionData: [
    {
      id: 1,
      title: "what"
    },
    {
      id: 2,
      title: "are"
    },
    {
      id: 3,
      title: "you"
    },
    {
      id: 4,
      title: "doing"
    },
    {
      id: 5,
      title: "?"
    }
  ],
  answerData: []
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TO_ANSWER:
      return {
        ...state,
        answerData: [
          ...state.answerData,
          state.questionData.find(item => item.id === action.payload.id)
        ],
        questionData: state.questionData.filter(
          item => item.id !== action.payload.id
        )
      };
    case MOVE_TO_QUESTION:
      return {
        ...state,
        questionData: [
          ...state.questionData,
          state.answerData.find(item => item.id === action.payload.id)
        ],
        answerData: state.answerData.filter(
          item => item.id !== action.payload.id
        )
      };
    case VALIDATE_ANSWER:
      return { ...state, isValidating: !state.isValidating };
    case TOGGLE_MATCHED:
      return { ...state, isMatched: !state.isMatched };
    case END_VALIDATE_ANSWER:
      return { ...state, isMatched: false, isValidating: false };
    default:
      return state;
  }
};
