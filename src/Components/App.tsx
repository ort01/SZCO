import './App.scss'
import { Header } from "./Header"
import { Calculator } from './Calculator'
import { Results } from './Results'

function App() {

  return (
    <div>
      <Header />
      <div className='calculator'>
        <Calculator />
      </div>
      <Results />
    </div>
  )
}

export default App
