import './App.css';
import React from 'react';
import AboutPages from "./pages/AboutPages/AboutPages";


function App() {
  const info = {
    title: "I am title",
    body: "Lorem inpsum bla bla bla"
  }
  return (
    <div className="App">
      <AboutPages info={info}/>
    </div>
  );
}

export default App;