import Cards from "../components/Cards"

function Outers({outerData}) {
  return (
    <>
    <div>
      {
        outerData.map((data, i) => {
          return(
          <Cards data={data} key={i}/>
          )
        }) 
      }
    </div>
    </>
  )
}

export default Outers