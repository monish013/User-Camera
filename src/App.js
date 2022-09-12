import { useState } from "react";
import { Image, Capture } from "./components";

import "./App.css";

function App() {
  const [file, setFile] = useState(null);

  return (
    <main className='App'>
      <Capture setFile={setFile} />
      <Image file={file} />
    </main>
  );
}

export default App;
