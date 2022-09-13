import React, {useState, useRef, useEffect, useContext} from 'react'
import DashboardLayout from './DashboardLayout'
import gsap from 'gsap'
import TransitionContext from '../context/TransContext'

const Shop = () => {
  const {imgRef} = useContext(TransitionContext)

  const [shoppingCart, setShoppingCart] = useState([])
  const [cartActive, setCartActive] = useState(false)
  const [quant, setQuant] = useState(1)


  const shoppingCartRef = useRef()

  useEffect(() => {
    
    gsap.fromTo(shoppingCartRef.current, {y:-100} , {y: 0})
    gsap.set(imgRef.current, {y:-10, x: 10})
   
    gsap.fromTo(imgRef.current, { y:-10, x: 10,  transform: 'scale(1)'} , {y:30, x:-10,transition:'2s ease', transform: 'scale(1.5)', delay :.5, })

  }, [])

  const books = [
    {
      id:'1',
      name:'Морская глубина',
      price:'819'

    }
  ]

  const addToCart = (e, b) => {
    e.preventDefault()
    console.log(b)
     const existingItem = shoppingCart.find(c => c.id === b.id)
     existingItem ? setQuant(prev => prev + 1) : 
    setShoppingCart(prev => [...prev, b])
    setCartActive(true)
    

  }

  return (
    <>
    <div className='shopPage'>
      <div className='shop-cart'>
        <svg onClick={() => setCartActive(true)} id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="#1b2845" strokeMiterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path>
        </svg> <p className='small-text'>({shoppingCart.length})</p>
      </div>
      {books.map(b => (
        <div key={b.id}>
         <div className='shop-main'> 
          <p className='shop-title'>{b.name}</p>
          <div className='shop-img'>
           <img ref={imgRef} src='assets/rose.png' alt=""></img>
          </div>
        </div>
        <div className='shop-desc'>
          <p className='shop-price'>{b.price} ₽</p>
          <p className='shop-product'> Синяя роза. Высота - 60 см. Диаметр -  30-35 см</p>
          <button onClick={(e) => addToCart(e, b)} className='shop-addToCart'>В корзину</button>
        </div>
        </div>

      ))}
   
     

    </div>
    {cartActive && 
     <div  ref={shoppingCartRef} className='shopping-cart'>
     <div className='cart-header'>
       <div className='header-cart'>
     <svg   className="svg"  onClick={() => setCartActive(false)} stroke="#1b2845" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#1b2845" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
     </div>
     <p>В корзине</p>
     <div className='header-cart'>
     <svg className="svg" id="bag" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="#1b2845" strokeMiterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="currentColor" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path>
        </svg> <p className='small-text'>({shoppingCart.length})</p>
        </div>
     </div>
     <div className='cart-container'>
       {shoppingCart.map(c => (
          <div key={c.id} className='cart-product'>
          <div className='cart-prod-img'>
            <img width={50} src='./assets/rose.png'></img>
          </div>
          <div className='cart-prod-desc'>
            <p><span className='span-el'>{c.name}</span> </p>
            <p>Цена: <span className='span-el'>{c.price} ₽</span> </p>
            <p>Кол-во:  <span className='span-el'>{quant}</span>  </p>
          </div>
 
        </div>

       ))}
      
     </div>
   </div>}
   
    </>
 
  )
}

export default Shop