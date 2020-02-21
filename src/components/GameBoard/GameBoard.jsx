import React from "react";
import PlayArea from "../PlayArea/PlayArea";
import { useSelector, useDispatch } from "react-redux";
import { moveToQuestion, moveToAnswer } from "../../actions/gameActions";

const GameBoard = () => {
  const answerData = useSelector(state => state.answerData);
  const questionData = useSelector(state => state.questionData);
  const dispatch = useDispatch();

  const handleAnswerItemClick = (e, id) => {
    e.preventDefault();
    dispatch(moveToQuestion(id));
  };
  const handleQuestionItemClick = (e, id) => {
    e.preventDefault();
    dispatch(moveToAnswer(id));
  };
  return (
    <div>
      <PlayArea items={answerData} onItemClick={handleAnswerItemClick} />
      <PlayArea items={questionData} onItemClick={handleQuestionItemClick} />
    </div>
  );
};

export default GameBoard;
