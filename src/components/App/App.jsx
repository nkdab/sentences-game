import React from "react";
import "./App.scss";
import GameBoard from "../GameBoard/GameBoard";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { gameReducer } from "../../reducers/gameReducer";

const store = createStore(gameReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GameBoard />
      </div>
    </Provider>
  );
}

export default App;
