import React from 'react';
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';

export const Cart = ({cartItems, removeCart}) => {
    console.log("ITEMS--->",cartItems);

    const checkOut = () => {
        alert("thancks for buyng")
    };

    return (
        <>
        <div>
            {
                cartItems.length === 0 ? <div className='cart cart-header'>Cart is emptey</div> :
                <div className='cart cart-header'>You Have {cartItems.length} in the cart {" "}</div>
            }
        </div>
        <div>
            <div className='cart'>
                <ul className='cart-items' key={cartItems}>
                    {
                        cartItems.map( item => (
                            <Fade left cascade>
                                <li key={item}>
                                    <div>
                                        <img 
                                            src={item.image}
                                            alt={item.title} 
                                        />
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        
                                        <div className='right'>
                                            {formatCurrency(item.price)} x {item.count}{" "}
                                            <button className='button remove' onClick={ () => removeCart(item)}>Remove</button>
                                        </div>
                                        
                                    </div>
        
                                </li>
                            </Fade>
                        ))  
                    }
                </ul>
            </div>
            {cartItems.length !== 0 && (
                <div className='cart'>
                    <div className='total'>
                        <div key={cartItems.id}>Total : {" "}
                            {
                                formatCurrency(cartItems.reduce( (a, c) => a + c.price * c.count, 0))
                            }
                        </div>
                        <button onClick={checkOut} className='button secondary'>Proceed</button>
                    </div>
                </div>
            )}
            
        </div>
        
        </>
    )
};

export default Cart;
