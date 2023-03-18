import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
