import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import TabContent from "../components/TabContent";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function Detail( {cardsData,shirtData,pantsData,outerData} ) {
  const { id } = useParams();
  const index = Number(id);
  const [tabNumber, setTabNumber] = useState(0);
  const dispatch = useDispatch();

  if(!cardsData[index]) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <div style={{textAlign:'center'}}>  
        <img src={`https://raw.githubusercontent.com/altjs3310/project_api/refs/heads/main/public${cardsData[id].img}`} alt="" width={'50%'}/> 
      </div>
      <div style={{padding: '30px', margin: '20px'}}>
       <h2 style={{marginBottom: '20px'}}>{cardsData[id].name}</h2>
        <h4 style={{marginBottom: '20px'}}>{cardsData[id].price}</h4>
        <button onClick={() => {
          const item = {
            id: id,
            name: cardsData[id].name,
            count: 1,
            price: cardsData[id].price
          }
          dispatch( addItem(item))
          window.alert('장바구니에 추가되었습니다')
       }} style={{borderRadius: '5px', background: 'rgba(227, 230, 100, 0.3)'}}>장바구니에 담기</button>
      </div>

      <Nav className="mt-4" variant="tabs" justify defaultActiveKey="link-0">
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
          
      <TabContent tabNumber={tabNumber}/>    
    </>
    
  )
}

export default Detail