import './App.css'
import { Header } from './components/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Users } from './routes/Users'
import { UserInfo } from './routes/UserInfo'

function App() {

  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={ <Users baseURL={ baseURL } /> }
          />
          <Route
            path='/:name'
            element={ <UserInfo baseURL={ baseURL } /> }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
