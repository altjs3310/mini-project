import bg from "../bg.jpg"
import Cards from "../components/Cards";


function MainPage({ cardsData }) {
  return (
    <>
    <div className="Mainpage main-bg" style={{backgroundImage:`url(${bg})`, height:'300px'}}></div>

     <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '2rem',
      }}>
      {
        cardsData.map((data, i) => {
          return(
          <Cards data={data} key={i}/>
          )
        }) 
       

      }   
    </div>
    </>
  )
}

export default MainPage;