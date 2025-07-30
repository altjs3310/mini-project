import { useSelector } from 'react-redux'
import './WatchedProduct.css'
import { useNavigate } from 'react-router-dom'

function WatchedProduct({cardsData}) {
  const watched = useSelector(state => state.watched) || [];
  const navigate = useNavigate();

  function clickHandler(id) {
    navigate(`/detail/${id}`)
  }

  return (
    <>
    <div className="WatchedProduct">
      <div className='cards'>
        <p style={{borderBottom: '1px solid black'}}>최근 본 상품</p>
        {
          watched.map((id, i) => {
            const currentItem = cardsData.find(item => item.id === Number(id));
            if (!currentItem) return null;
            return (
              <div className="card" key={i} onClick={() => clickHandler(id)}>
                <img src={`https://raw.githubusercontent.com/altjs3310/project_api/refs/heads/main/public${currentItem.img}`} alt="" width='100%' />
                <p>{currentItem.name}</p>
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