import './App.css'
import { Header } from './components/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Users } from './routes/Users'
import { UserInfo } from './routes/UserInfo'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={ <Users /> }
          />
          <Route
            path='/:name'
            element={ <UserInfo /> }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
