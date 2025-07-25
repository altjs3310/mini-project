import Cards from "../components/Cards"

function Pants({pantsData}) {
  return (
    <>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '1rem'
    }}>
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