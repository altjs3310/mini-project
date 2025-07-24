import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addCount, minusCount } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((item, i)=>{
            return (
              <tr key={i}>
                <td>{item.img}</td>
                <td>{item.name}</td>
                <td>{item.count} <button style={{marginLeft:'10px'}} onClick={() => {
                  dispatch(addCount(i))
                }}>+</button><button onClick={() => {
                  dispatch(minusCount(i))
                }}>-</button></td>
                <td>{item.price * item.count}원</td>
              </tr>  
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default Cart