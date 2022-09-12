import "./App.css";

function App() {
  return (
    <main className='App'>
      <label htmlFor='capture'>Capture Photo</label>
      <div>
        <input type='file' id='capture' accept='image/*' capture />
      </div>
      <div>
        <img src='' id='img' alt='from phone' />
      </div>
    </main>
  );
}

export default App;
