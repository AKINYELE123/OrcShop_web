import React from 'react'
import {useSelector } from "react-redux"
import {useDispatch} from "react-redux"
import { addCart, deleteCart} from '../redux/action';

const Cart =() => {
const state = useSelector((state)=> state.addCart)
const dispatch = useDispatch()

const handleClose = (item) => {
  dispatch(deleteCart(item))
}


const cartItems = (cartItem) => {
 return (
  <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
    <div className="container">
      <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
       <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={cartItem.img} alt={cartItem.title}  height="200px" width="180px"/>
          <div className="col-md-4">
            <h3>{cartItem.title}</h3>
            <p className="lead fw-bold">
              ${cartItem.price}
            </p>
          </div>
        </div>
      </div>
    </div> 
 </div>
 )
 }




  return (
     <>
   {state.length !==0 && state.map(cartItems)}
    <h2>Come</h2>
     </>
 )
 }




export default Cart;
