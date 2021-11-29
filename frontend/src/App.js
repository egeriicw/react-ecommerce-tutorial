import './App.css';
import FileUpload from './components/UploadFiles';

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        <h3>bezkoder.com</h3>
        <h4>React Hooks File Upload</h4>
      </div>


        <FileUpload />
    </div>
  );
}

export default App;
