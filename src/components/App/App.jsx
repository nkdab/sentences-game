import React from "react";
import GameBoard from "../GameBoard/GameBoard";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { gameReducer } from "../../reducers/gameReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import NavBar from "../NavBar";
import { createEpicMiddleware } from "redux-observable";
import { checkAnswerEpic } from "../../epics/checkAnswerEpic";
import "./App.scss";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  gameReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(checkAnswerEpic);

function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <main className="App">
        <GameBoard/>
      </main>
    </Provider>
  );
}

export default App;
