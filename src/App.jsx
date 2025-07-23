import { Route, Routes } from 'react-router-dom'
import style from './App.module.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Shirts from './pages/Shirts'
import Pants from './pages/Pants'
import Outers from './pages/Outers'

function App() {

  return (
    <>
      <div className={style.container}>
      <Header />

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/shirts' element={<Shirts />} />
        <Route path='/pants' element={<Pants />} />
        <Route path='/outers' element={<Outers />} />
      </Routes>
      </div>
    </>
  )
}

export default App
