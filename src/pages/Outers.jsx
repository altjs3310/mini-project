import Cards from "../components/Cards"

function Outers({outerData}) {
  return (
    <>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '1rem'
    }}>
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