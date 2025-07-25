import { useEffect, useState } from "react";
import bg1 from "../bg1.jpg";
import bg2 from "../bg2.jpg";
import bg3 from "../bg3.jpg";
import Cards from "../components/Cards";


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

  return (
    <>
    <div>
      <div className="Mainpage main-bg" style={{
        backgroundImage:`url(${bgList[bgIndex]})`, 
        height:'500px',
        margin: '10px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        }}>
          
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        padding: '2rem',
        border: '2px dotted black',
        borderRadius: '10px'
        }}>
        {
          cardsData.map((data, i) => {
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