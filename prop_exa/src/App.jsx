import './App.css'
import One from './one'
import Two from './two'
import Three from './three'
import { DataProvider } from './DataContext'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <div className="container">
          <One />
          <Two />
          <Three />
        </div>
      </DataProvider>
    </div>
  )
}

export default App