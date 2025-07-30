import { useEffect, useMemo, useState } from "react";
import bg1 from "../bg1.jpg";
import bg2 from "../bg2.jpg";
import bg3 from "../bg3.jpg";
import Cards from "../components/Cards";
import './MainPage.css';

function MainPage({ cardsData }) {
  const bgList = [bg1, bg2, bg3];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((index) => {
       if(index >= bgList.length -1) {
         return 0;
      } else return index + 1 ;
    })
  }, 5000);
  return () => clearInterval(timer);
  }, []);

  const sortedCards = useMemo(() => {
    const clickCounts = JSON.parse(localStorage.getItem("clickCounts")) || {};
    const updated = cardsData.map((item) => ({
      ...item,
      clickCount: clickCounts[item.id] || 0,
  }));
    return updated.sort((a,b) => b.clickCount - a.clickCount);
  }, [cardsData]);

  return (
    <>
    <div style={{
      marginLeft: '100px', 
      marginRight: '100px',
      background: 'rgba(24, 67, 99, 0.5)',
      border:'2px solid rgba(0, 0, 0, 0.5)',
      height: '3000px',
      }}>
      <div className="Mainpage main-bg" style={{
        backgroundImage:`url(${bgList[bgIndex]})`, 
        height:'500px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginBottom: '20px'
        }}>
          
      </div>
      <div style={{
        fontSize: '25px', 
        borderRadius: '5px',
        textAlign: 'center',
        padding: '10px',
        fontWeight: 'bold',
        background: 'rgba(12, 12, 34, 0.81)'
        }}>
        <p style={{
          marginLeft: '30px',
          marginRight: '30px', 
          marginTop: '5px', 
          color: 'yellow'}}>★ BEST 상품 ★</p>
      </div>
      <div className="card-grid">
        {
          sortedCards.map((data, i) => {
             return(
            <Cards data={data} key={i}/>
            )
          }) 
        }
      </div>   
    </div>  
    </>
  )
}

export default MainPage;