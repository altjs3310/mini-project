import Cards from "../components/Cards"

function Pants({pantsData}) {
  return (
    <>
    <div>
      {
        pantsData.map((data, i) => {
          return(
          <Cards data={data} key={i}/>
          )
        }) 
      }
    </div>
    </>
  )
}

export default Pants