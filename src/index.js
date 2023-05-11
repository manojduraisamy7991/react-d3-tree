import React from "react";
import ReactDOM from "react-dom";
import OrganizationBoard from './view/container/OrganizationBoard';

function App() {
  return (
    <div className="App">
      <OrganizationBoard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
