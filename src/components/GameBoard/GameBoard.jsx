import React from "react";
import PlayArea from "../PlayArea/PlayArea";
import { useSelector, useDispatch } from "react-redux";

const GameBoard = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const answerData = useSelector(state => state.answerData);
  const questionData = useSelector(state => state.questionData);
  const dispatch = useDispatch();

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
      <PlayArea items={answerData} onItemClick={handleAnswerItemClick} />
      <PlayArea items={questionData} onItemClick={handleQuestionItemClick} />
    </div>
  );
};

export default GameBoard;
