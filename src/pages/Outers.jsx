import Cards from "../components/Cards"

function Outers({outerData}) {
  return (
    <>
    <div style={{
      height: 'auto',
      background: 'rgba(24, 67, 99, 0.5)',
      textAlign: 'center',
      paddingTop: '50px'
    }}>
      <h1 style={{borderBottom: '1px solid black'}}>OUTERS</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '1rem',
      }}>
        {
          outerData.map((data, i) => {
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

export default Outers