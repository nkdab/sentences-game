import React from "react";
import { useReducer } from "react";
import PlayArea from "../PlayArea/PlayArea";

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

const reducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_ANSWER":
      return {
        answerData: [
          ...state.answerData,
          state.questionData.find(item => item.id === action.payload.id),
        ],
        questionData: state.questionData.filter(
          item => item.id !== action.payload.id,
        ),
      };
    // const data = state.questionData;
    // const answerData = [...state.answerData, data[action.payload.id]];
    // const questionData = data.filter(item => item.id !== action.payload.id);
    // return { answerData, questionData };
    case "MOVE_TO_QUESTION":
      return {
        questionData: [
          ...state.questionData,
          state.answerData.find(item => item.id === action.payload.id),
        ],
        answerData: state.answerData.filter(
          item => item.id !== action.payload.id,
        ),
      };
    // const data1 = state.answerData;
    // const questionData1 = [...state.questionData, data1[action.payload.id]];
    // const answerData1 = data1.filter(item => item.id !== action.payload.id);
    // return { answerData: answerData1, questionData: questionData1 };
    default:
      return state;
  }
};

const GameBoard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAnswerItemClick = (e, id) => {
    e.preventDefault();
    dispatch({ type: "MOVE_TO_QUESTION", payload: { id } });
  };
  const handleQuestionItemClick = (e, id) => {
    e.preventDefault();
    dispatch({ type: "MOVE_TO_ANSWER", payload: { id } });
  };
  return (
    <div>
      <PlayArea items={state.answerData} onItemClick={handleAnswerItemClick} />
      <PlayArea
        items={state.questionData}
        onItemClick={handleQuestionItemClick}
      />
    </div>
  );
};

export default GameBoard;
