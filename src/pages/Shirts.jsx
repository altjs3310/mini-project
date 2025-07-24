import Cards from "../components/Cards"

function Shirts({shirtData}) {
  return (
    <>
    <div>
      {
        shirtData.map((data, i) => {
          return(
          <Cards data={data} key={i}/>
          )
        }) 
      }
    </div>
    </>
  )
}

export default Shirts