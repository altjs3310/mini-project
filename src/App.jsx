import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Shirts from './pages/Shirts'
import Pants from './pages/Pants'
import Outers from './pages/Outers'
import Cart from './pages/Cart'
import Detail from './pages/Detail'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [shirtData, setShirtData] = useState([]);
  const [pantsData, setPantsData] = useState([]);
  const [outerData, setOuterData] = useState([]);

  useEffect(() => {
  axios.get("https://raw.githubusercontent.com/altjs3310/project_api/refs/heads/main/clothes.json")
    .then((response) => {
      setCardsData([...response.data]);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  useEffect(() => {
  axios.get("https://raw.githubusercontent.com/altjs3310/project_api/refs/heads/main/shirt.json")
    .then((response) => {
      setShirtData([...response.data]);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  useEffect(() => {
  axios.get("https://raw.githubusercontent.com/altjs3310/project_api/refs/heads/main/pants.json")
    .then((response) => {
      setPantsData([...response.data]);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  useEffect(() => {
  axios.get("https://raw.githubusercontent.com/altjs3310/project_api/refs/heads/main/outer.json")
    .then((response) => {
      setOuterData([...response.data]);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])


  return (
    <>
       <Header />
      <div style={{paddingTop: '56px'}}>
   

      <Routes> 
        <Route path='/' element={<MainPage cardsData={cardsData} />} />
        <Route path='/shirts' element={<Shirts shirtData={shirtData}/>} />
        <Route path='/pants' element={<Pants pantsData={pantsData}/>} />
        <Route path='/outers' element={<Outers outerData={outerData}/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detail/:id' element={<Detail 
        cardsData={cardsData}
        shirtData={shirtData}
        pantsData={pantsData}
        outerData={outerData}/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
