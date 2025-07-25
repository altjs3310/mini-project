import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addCount, minusCount, removeItem } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  return (
    <Table>
      <thead>
        <tr style={{textAlign:'center'}}>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((item, i)=>{
            return (
              <tr key={i} style={{textAlign:'center'}}>
                <td>{item.name}</td>
                <td>{item.count} <button style={{marginLeft:'10px'}} onClick={() => {
                  dispatch(addCount(i))
                }}>+</button><button style={{marginLeft:'10px'}} onClick={() => {
                  dispatch(minusCount(i))
                }}>-</button></td>
                <td>{item.price * item.count}원</td>
                <td><button style={{color: 'red'}} onClick={() => {
                  dispatch(removeItem(i))
                }}>x</button></td>
              </tr>  
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default Cart