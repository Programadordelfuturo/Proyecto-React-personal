import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import AboutLink from './components/AboutLink'

function App() {
  const [ input, setInput ] = useState('')

  const handlerInput = (e) => {
    setInput(e.target.value)
  }

  const [ text, setText ] = useState('')

  const handlerClick = () => {
    setText(input)
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            exact
            path='/'
            element={
                <Form handlerClick={handlerClick} handlerInput={handlerInput} text={text}/>
            }></Route>
          <Route path='/#/About' element={<About />}></Route>
        </Routes>
        <AboutLink/>
      </div>
    </Router>
  )
}

export default App
