import Cards from "../components/Cards"

function Pants({pantsData}) {
  return (
    <>
    <div style={{
      height: '1500px',
      background: 'rgba(24, 67, 99, 0.5)',
      textAlign: 'center',
      paddingTop: '50px'
    }}>
      <h1 style={{borderBottom: '1px solid black'}}>PANTS</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '1rem',
      }}>
        {
          pantsData.map((data, i) => {
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

export default Pants