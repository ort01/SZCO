import './App.css'
import { Header } from "./Header"
import { Calculator } from './Calculator'

function App() {
  return (
    <div>
      <Header />
      <div className='calculator'>
        <Calculator />
      </div>
    </div>
  )
}

export default App
