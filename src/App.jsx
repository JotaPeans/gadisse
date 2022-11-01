import { useState } from 'react'
import reactLogo from './assets/react.svg';
import gif from "./assets/gif/a0a9f7e8-b4ba-4b0a-ad97-1edda2f9595d.gif"

function App() {
  const [style, setStyle] = useState(null);
  const [yes, setYes] = useState(false);
  var [count, setCount] = useState(0);
  const [show, setShow] = useState(false)
  
    function handleChange() {
      setCount(count += 1);
      const randomPositonX = Math.random() * (window.screen.width - 200);
      const randomPositonY = Math.random() * (window.screen.height - 200);
      setStyle({
        position: "absolute",
        top: randomPositonY,
        left: randomPositonX
      });
    }

    return (
      <>
        {count > 10 && count < 20 ? (
          <div className='absolute w-screen h-screen flex justify-center items-center'>
            <div className='absolute w-screen h-screen bg-black opacity-50'></div>
            <div className='w-[500px] h-80 z-30 bg-white rounded-xl p-2 flex flex-col justify-around items-center'>
              <h1 className='font-medium text-2xl'>Bora minha filha, aceite logo</h1>
              <button className='bg-red-500 text-white p-2 rounded-lg' onClick={() => setCount(0)}>Fechar</button>
            </div>
          </div>
        ) : count >= 20 ? (
          <div className='bg-black absolute w-screen h-screen flex justify-center items-center z-50'>
            <h2 className='font-bold text-9xl text-white'>OK ENTÃO, ENTENDI JÁ</h2>
          </div>
        ) : null}
        

        <div className="flex justify-center items-center bg-slate-400 w-screen h-screen">
          <img className={`${yes ? "absolute" : "hidden"}`} src={gif} alt="" />
            <div className=' w-3/4 md:w-96 h-96 rounded-xl flex flex-col items-center justify-around bg-white shadow-xl p-5'>
                <h2 className='font-medium text-xl md:text-2xl'>Quer namorar comigo??</h2>
                <div className='flex justify-center items-center gap-4 w-[50%]'>
                    <button onClick={() => {setYes(true)}} className=' bg-green-500 hover:bg-green-600 transition-all p-2 rounded-lg text-white shadow-lg'>SIMM!!</button>
                    <button onClick={handleChange} onMouseEnter={handleChange} style={style} className="bg-red-500 hover:bg-red-600 transition-all p-2 rounded-lg text-white shadow-lg z-40">NAMM</button>
                </div>
            </div>
        </div>
      </>
  )
}

export default App
