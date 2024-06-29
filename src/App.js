// import logo from './logo.svg';
import './App.css';
import Lecture4 from './Lexture4';
import Lecture7 from './Lecture7';
import ClassComponent from './Lecture8-class-component';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Lecture4 />
      <Lecture7/>
      <ClassComponent />
    </div>
  );
}

export default App;
