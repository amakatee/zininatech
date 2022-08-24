import React from 'react'
import DashboardLayout from './DashboardLayout'

const Shop = () => {
  return (
    <div className='shopPage'>
      <div className='shop-main'>
        
       <p className='shop-title'>Максуэлл Мольц: Психокибернетика</p>
      
        <div className='shop-img'>
          <img src='assets/book.jpeg' alt=""></img>
        </div>

      </div>
      <div className='shop-desc'>
        <p className='shop-price'>819 ₽</p>
        <p className='shop-product'>  ствованиязахватывающего и интересного повествованиязахватывающего и интересного повествования</p>
        <button className='shop-addToCart'>Add to Cart</button>
      </div>
     

    </div>
 
  )
}

export default Shop