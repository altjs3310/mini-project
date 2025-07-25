import { useSelector } from 'react-redux'
import './WatchedProduct.css'
import { useNavigate } from 'react-router-dom'

function WatchedProduct({cardsData}) {
  const watched = useSelector(state => state.watched)
  const navigate = useNavigate();

  function clickHandler(id) {
    navigate(`/detail/${id}`)
  }

  return (
    <>
    <div className="WatchedProduct">
      <div className='cards'>
        <p>최근 본 상품</p>
        {
          watched.map((id, i) => {
            const item = cardsData.find(item => item.id === id);
            return (
              <div className="card" key={i} onClick={() => clickHandler(id)}>
                <img src={`https://raw.githubusercontent.com/altjs3310/project_api/refs/heads/main/public${item.img}.jpg`} alt="" />
                <p>{item.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default WatchedProduct