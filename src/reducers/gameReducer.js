import { MOVE_TO_ANSWER, MOVE_TO_QUESTION } from "../constants";

const initialState = {
  questionData: [
    {
      id: 1,
      title: "what",
    },
    {
      id: 2,
      title: "are",
    },
    {
      id: 3,
      title: "you",
    },
    {
      id: 4,
      title: "doing",
    },
    {
      id: 5,
      title: "?",
    },
  ],
  answerData: [],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TO_ANSWER:
      return {
        answerData: [
          ...state.answerData,
          state.questionData.find(item => item.id === action.payload.id),
        ],
        questionData: state.questionData.filter(
          item => item.id !== action.payload.id,
        ),
      };
    case MOVE_TO_QUESTION:
      return {
        questionData: [
          ...state.questionData,
          state.answerData.find(item => item.id === action.payload.id),
        ],
        answerData: state.answerData.filter(
          item => item.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
