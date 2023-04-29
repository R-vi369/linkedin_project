import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/'  element={<Login />} ></Route>

          <Route path='/Header' element={<Header/> }/>
          <Route path='/home' element={<Home/> }  />
            
        </Routes>
      </Router >

    </>
  )
}

export default App