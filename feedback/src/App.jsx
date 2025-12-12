import './App.css'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { DataProvider } from './DataContext'

function App() {
  return (
    <DataProvider>
      <div>
        <h1>Feedback App</h1>
        <Search />
        <hr />
        <AddPost />
        <Home />
      </div>
    </DataProvider>
  )
}

export default App