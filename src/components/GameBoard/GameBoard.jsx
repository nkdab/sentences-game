import React from "react";
import PlayArea from "../PlayArea/PlayArea";
import { useSelector, useDispatch } from "react-redux";
import { moveToQuestion, moveToAnswer } from "../../actions/gameActions";
import "./GameBoard.scss";

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
  const handleAnswerButtonClick = () => {
    window.alert("Ну молодец, чо");
  };
  const handleExitButtonClick = () => {
    window.alert("Дверь показать?");
  };
  return (
    <div className="game-board">
      <PlayArea items={answerData} onItemClick={handleAnswerItemClick} />
      <PlayArea items={questionData} onItemClick={handleQuestionItemClick} />
      <div className="game-board__buttons_container">
        <button
          className="btn is-primary is-large"
          onClick={handleExitButtonClick}
        >
          Выход
        </button>
        <button
          className="btn is-primary is-large"
          onClick={handleAnswerButtonClick}
        >
          Ответить
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
