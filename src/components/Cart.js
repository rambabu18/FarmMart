import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length ==0 ? (
                <div className='cart cart-header' > Cart is Empty </div>
               ) : (
                    <div className='cart cart-header' >You have {cartItems.length} in the cart {" "} </div>
                )
            }

            <div>
            <div className='cart' >
            <ul className='cart-items' >
            {cartItems.map((item)=>(
                <li key={item.id} >
                    <div>
                        <img src={item.image} alt={item.title} />
                    </div> 
                    <div>
                     <div>{item.title}</div>

                     <div className='right'>
                         {item.price} {"Rs"} x {(item.count)} { " "}
                     <button className='button' onClick={()=> this.props.removeFromCart(item)} >Remove</button>
                     </div>
                    
                    </div>
                </li>
            ))}
            </ul>
            </div>
            </div>
            {cartItems.length !==0 && ( 
            <div className='cart' >
            <div className='total' >
            <div>
                Total : { " " }
                {(cartItems.reduce((a,c)=> a+ c.price * c.count, 0)) } {'Rs'}
            </div>
            <button className='button primary' >Proceed</button>
            </div>

         </div>
         )}
            

            </div>
        )
    }
}
