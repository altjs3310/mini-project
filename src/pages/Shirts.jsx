import Cards from "../components/Cards"

function Shirts({shirtData}) {
  return (
    <>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '1rem'
    }}>
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