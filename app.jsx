import { useState } from 'react';

function App() {
  const [color, setColor] = useState('violet'); // fixed spelling from "voilet" to "violet"

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color, height: '1000vh',width:'1000vh' }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          {' '}
          {/* fixed "bottom-30" to "bottom-10" */}
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "red" }}
            >Red</button>

            <button
              onClick={() => setColor("blue")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "blue" }}
            >Blue</button>

            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "green" }}
            >Green</button>

            <button
              onClick={() => setColor("grey")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "grey" }}
            >Grey</button>

            <button
              onClick={() => setColor("yellow")}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
              style={{ backgroundColor: "yellow" }}
            >Yellow</button>

            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "black" }}
            >Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
