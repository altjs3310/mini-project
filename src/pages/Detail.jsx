import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import TabContent from "../components/TabContent";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { setWatched } from "../redux/watchedSlice";

function Detail( {cardsData,shirtData,pantsData,outerData} ) {
  const { id } = useParams();
  const [tabNumber, setTabNumber] = useState(0);
  const dispatch = useDispatch();
  const allData = [...cardsData, ...shirtData, ...pantsData, ...outerData];

  if(allData.length === 0) {
    return <div>로딩중...</div>;
  }
  const item = allData.find(item => String(item.id) === id);
 
  useEffect(() => {
  let watched = localStorage.getItem('watched');
  watched = JSON.parse(watched);

  if(watched.length === 3 && !watched.includes(id))
    watched.pop();
  watched = [id, ...watched]

  watched = new Set(watched);
  watched = Array.from(watched);
  localStorage.setItem('watched', JSON.stringify(watched));
  dispatch( setWatched(watched))
  }, [])

  return (
    <>
    <div style={{background: 'rgba(14, 9, 82, 0.1)', font: 'bold'}}>
      <div style={{textAlign:'center'}}>  
        <img style={{marginTop: '10px', border: '1px solid black'}} src={`https://raw.githubusercontent.com/altjs3310/project_api/refs/heads/main/public${item.img}`} alt="" width={'25%'}/> 
      </div>
      <div style={{padding: '30px', margin: '20px', background: 'white', borderRadius: '5px'}}>
       <h2 style={{marginBottom: '20px'}}>{item.name}</h2>
        <h4 style={{marginBottom: '20px'}}>{item.price}원</h4>
        <button onClick={() => {
          const cartItem = {
            id: item.id,
            name: item.name,
            count: 1,
            price: item.price,
            img: item.img
          }
          dispatch( addItem(cartItem))
          window.alert('장바구니에 추가되었습니다')
       }} style={{borderRadius: '5px', background: 'rgba(227, 230, 100, 0.3)'}}>장바구니에 담기</button>
      </div>

      <Nav style={{outline:'1px solid black'}} className="mt-4" variant="tabs" justify defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => {
            setTabNumber(0);
          }}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => {
            setTabNumber(1);
          }}>리뷰</Nav.Link>
        </Nav.Item> 
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => {
            setTabNumber(2);
          }}>교환 및 문의사항</Nav.Link>
        </Nav.Item>   
      </Nav>   
          
      <TabContent tabNumber={tabNumber} info={item.info}/>
    </div>      
    </>
    
  )
}

export default Detail