import { useState } from 'react'
import Hippo from './assets/hippo.jpg'
import WaterMelon from './assets/watermelon.jpg'
import Pumpkin from './assets/pumpkin.jpg'
import Grass from './assets/grass.jpg'
import Human from './assets/img-human1.jpg'
import './App.css'

function App() {
  const [level, setLevel] = useState(0);
  const [currentImage, setCurrentImage] = useState(Hippo);

  if (level >= 100 && currentImage !== Human) {
    setCurrentImage(Human);
  }
  return (
    <>
      <div>
        <h1>Level is {level}</h1>
      </div>
      <div className='HippoPart'>
        <img src={currentImage} className="Hippo" alt="Hippo" width={level + 300} height={level + 175} />
      </div>
      <div className='card'>
        <div className="card">
          <button onClick={() => setLevel((level) => level + 5)}>
            <img src={WaterMelon} className="gameimg" alt="gameimg" />
          </button>
        </div>
        <div className="card">
          <button onClick={() => setLevel((level) => level + 10)}>
            <img src={Pumpkin} className="gameimg" alt="gameimg" />
          </button>
        </div>
        <div className="card">
          <button onClick={() => setLevel((level) => level + 20)}>
            <img src={Grass} className="gameimg" alt="gameimg" />
          </button>
        </div>
      </div>

    </>
  )
}

export default App
