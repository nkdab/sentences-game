import React, { useEffect } from "react";
import PlayArea from "../PlayArea/PlayArea";
import { useDispatch, useSelector } from "react-redux";
import { endValidateAnswer, moveToAnswer, moveToQuestion, startValidateAnsewr } from "../../actions/gameActions";
import "./GameBoard.scss";

const GameBoard = () => {
  const answerData = useSelector(state => state.answerData);
  const questionData = useSelector(state => state.questionData);
  const isValidating = useSelector(state => state.isValidating);
  const isMatched = useSelector(state => state.isMatched);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isValidating) {
      if (isMatched) {
        window.alert("Yep!");

      } else {
        window.alert("Nope!");
      }

      dispatch(endValidateAnswer());
    }
  });

  const handleAnswerItemClick = (e, id) => {
    e.preventDefault();
    dispatch(moveToQuestion(id));
  };
  const handleQuestionItemClick = (e, id) => {
    e.preventDefault();
    dispatch(moveToAnswer(id));
  };
  const handleAnswerButtonClick = () => {
    dispatch(startValidateAnsewr());
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
