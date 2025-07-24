import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function Cards({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
  

      <Card key={data.id} style={{ width: '18em', margin: '1em' }} onClick={() => {
      navigate('/detail/' + data.id)
      }}>
      <CardImg variant="top" src={`https://raw.githubusercontent.com/altjs3310/project_api/refs/heads/main/public${data.img}`} />
      <CardBody>
        <CardTitle >{data.name}</CardTitle>
        <CardText>{data.price}원</CardText>
        <Button variant="light" onClick={(e) => {
          e.stopPropagation();
          const item = {
            id: data.id,
            name: data.name,
            count: 1,
            price: data.price
          }
          dispatch( addItem(item))
          window.alert(`${data.name}을 장바구니에 담았습니다`)
        }}>장바구니에 담기</Button>
      </CardBody>
      </Card>
  

    
    </>
  )
}

export default Cards