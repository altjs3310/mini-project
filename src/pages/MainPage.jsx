import { useEffect, useMemo, useState } from "react";
import bg1 from "../bg1.jpg";
import bg2 from "../bg2.jpg";
import bg3 from "../bg3.jpg";
import Cards from "../components/Cards";
import './MainPage.css';

function MainPage({ cardsData }) {
  const bgList = [bg1, bg2, bg3];
  const [bgIndex, setBgIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

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
      border:'1px solid black',
      marginTop:'20px', 
      height:'85px',
      marginLeft: '100px', 
      marginRight: '100px',
      background: 'rgba(21, 20, 27, 1)',
      borderBottom:'1px solid white'
      }}>aa</div>
    <div style={{
      marginLeft: '100px', 
      marginRight: '100px',
      background: 'rgba(21, 20, 27, 1)',
      border:'2px solid rgba(0, 0, 0, 0.5)',
      height: 'auto',
      }}>
      <div className="Mainpage main-bg" style={{
        backgroundImage:`url(${bgList[bgIndex]})`, 
        height:'500px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginBottom: '20px',
        borderBottom:'1px solid black'
      }}>
        {showPopup && (
          <div style={{
            border:'1px solid black', 
            zIndex:'9999', 
            width:'500px',
            height:'300px',
            marginLeft:'200px',
            background:'white'
          }}>
            <div style={{marginTop:'10px', padding:'10px'}}>
            <h2 style={{fontWeight:'bold'}}>오픈 세일 진행중</h2>
            <h3>7만원이상 구매시 배송비 무료</h3>
            <h3>10만원이상 구매시 5% 할인쿠폰 지급</h3>
            <h3>15만원이상 구매시 10% 할인쿠폰 지급</h3>
            </div>
            <button onClick={() => setShowPopup(false)} 
            style={{
            marginTop:'30px', 
            marginLeft:'85%',
            padding:'5px 10px',
            border:'none',
            background:'#333',
            color:'white',
            }}>닫기</button>
          </div> 
        )}    
      </div>
      <div style={{
        fontSize: '25px', 
        textAlign: 'center',
        padding: '10px',
        fontWeight: 'bold',
        marginTop: '-20px',
        borderBottom:'1px solid white',
        borderTop:'1px solid white'
        }}>
        <p style={{
          marginLeft: '30px',
          marginRight: '30px', 
          marginTop: '5px', 
          color: 'yellow',
          fontFamily:'Playfair Display'}}>★ B E S T 상품 ★</p>
      </div>
      <div style={{marginTop:'-30px'}} className="card-grid">
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