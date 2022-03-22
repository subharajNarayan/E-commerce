import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { delItem } from '../redux/ActionCreators';

const Cart = () => {

  const state = useSelector((state) => state.addItem)
  alert(state)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delItem(item))
  }

  const cartItems = (cartItem) => {
    return (
      <div className='px-4 bg-light rounded-3' key={cartItem.id}>
        <div className='container py-5'>
          <Button className='btn-close float-right' aria-label='Close' onClick={()=> handleClose(cartItem)}>
            <i className='fa fa-close'></i>
            </Button>
          <div className='row justify-content-center'>
            <div className='col-md-4'>
              <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px"/>
            </div>
            <div className='col-md-4'>
              <h3>{cartItem.title}</h3>
              <p className='lead fw-bold'>$ {cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return(
      <div className='px-4 my-5 bg-light rounded-3 py-5'>
        <div className='container py-4'>
          <div className='row'>
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    )
  }
 
  return (
    <>
    {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </>
  )
}

export default Cart;