import { useState } from "react";
import { Image, Capture } from "./components";

import "./App.css";

function App() {
  const [file, setFile] = useState(null);

  return (
    <main className='App'>
      <Capture setFile={setFile} />
      {file ? <Image file={file} /> : null}
    </main>
  );
}

export default App;
