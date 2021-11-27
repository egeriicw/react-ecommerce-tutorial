import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Testing a React App
      </header>
      <FileUpload></FileUpload>
    </div>
  );
}

export default App;
