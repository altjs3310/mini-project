import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addCount, minusCount, removeItem } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  return (
    <div style={{height:'1000px',marginLeft: '100px', marginRight: '100px',paddingTop: '20px'}}>
    <Table>
      <thead style={{textAlign:'center', fontSize: 'large', background: 'black', borderBottom: '2px solid black'}}>
        <tr>
          <th style={{background: 'rgba(236, 202, 158, 0.5)'}}>상품명</th>
          <th style={{background: 'rgba(236, 202, 158, 0.5)'}}>수량</th>
          <th style={{background: 'rgba(236, 202, 158, 0.5)'}}>가격</th>
          <th style={{background: 'rgba(236, 202, 158, 0.5)'}}></th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((item, i)=>{
            return (
              <tr key={i} style={{textAlign:'center', fontSize:'large'}}>
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
    </div>
  )
}

export default Cart