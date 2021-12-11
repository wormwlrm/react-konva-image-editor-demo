import "./App.css";
import { Editor } from "konva-image-editor";

function App() {
  return (
    <div
      style={{
        boxShadow: "0px 8px 15px 5px #c1c1c1",
        borderRadius: "10px",
        overflow: "hidden",
        width: "100vw",
        maxWidth: "1000px",
        margin: "50px auto",
      }}
    >
      <Editor responsive aspectRatio={0.7} />
    </div>
  );
}

export default App;
