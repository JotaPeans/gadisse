import { useState } from 'react'
import reactLogo from './assets/react.svg';
import gif from "./assets/gif/a0a9f7e8-b4ba-4b0a-ad97-1edda2f9595d.gif"

function App() {
  const [style, setStyle] = useState(null);
  const [yes, setYes] = useState(false);
  
    function handleChange() {
      console.log(window.screen.width)
      const randomPositonX = Math.random() * (window.screen.width - 200);
      const randomPositonY = Math.random() * (window.screen.height - 200);
        setStyle({
          position: "absolute",
          top: randomPositonY,
          left: randomPositonX
        });
    }

    return (
      <div className="flex justify-center items-center bg-slate-400 w-screen h-screen">
        <img className={`${yes ? "absolute" : "hidden"}`} src={gif} alt="" />
          <div className=' w-3/4 md:w-96 h-96 rounded-xl flex flex-col items-center justify-around bg-white shadow-xl p-5'>
              <h2 className='font-medium text-xl md:text-2xl'>Quer namorar comigo??</h2>
              <div className='flex justify-center items-center gap-4 w-[50%]'>
                  <button onClick={() => {setYes(true)}} className=' bg-green-500 hover:bg-green-600 transition-all p-2 rounded-lg text-white shadow-lg'>SIMM!!</button>
                  <button onClick={handleChange} onMouseEnter={handleChange} style={style} className="bg-red-500 hover:bg-red-600 transition-all p-2 rounded-lg text-white shadow-lg">NAMM</button>
              </div>
          </div>
      </div>
  )
}

export default App
