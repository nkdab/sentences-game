import React from "react";
import "./App.scss";
import GameBoard from "../GameBoard/GameBoard";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { gameReducer } from "../../reducers/gameReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import NavBar from "../NavBar";

const store = createStore(gameReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <main className="App">
        <GameBoard />
      </main>
    </Provider>
  );
}

export default App;
