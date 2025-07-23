import bg from "../bg.jpg"
import Cards from "../components/Card";

function MainPage() {
  return (
    <>
    <div className="Mainpage main-bg" style={{backgroundImage:`url(${bg})`, height:'300px'}}></div>

    <div>
     <Cards />
    </div>
    </>
  )
}

export default MainPage;