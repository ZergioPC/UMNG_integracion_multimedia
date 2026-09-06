import './App.css'

import { HomeScene } from './scenes/HomeScene'
import { SelectCuentoScene } from './scenes/SelectCuentoScene'
import { MapScene } from './scenes/MapScene'

// Transiciones
import { Transition01 } from './utils/Transitions/Transition01'

function App() {

  return (
    <>
      <Transition01 />

      <HomeScene />
      <SelectCuentoScene />
      <MapScene />
    </>
  )
}

export default App
