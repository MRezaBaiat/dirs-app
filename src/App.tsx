import React from 'react';
import {Provider} from "react-redux";
import './App.css';
import store from "./redux/store";
import MainScreen from "./screens/main-screen/main.screen";

function App() {
  return (
      <Provider store={store}>
        <MainScreen/>
      </Provider>
  );
}

export default App;
