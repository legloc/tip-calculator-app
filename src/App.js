import Calculator from './components/Calculator'
import Logo from './images/logo.svg'
import './App.sass'

const App = () => {
  return (
    <>
      <img src={ Logo } alt="SPLITTER" />
      <Calculator />
    </>
  )
}

export default App