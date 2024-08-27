import Image from 'next/image'
import React from 'react'
const ShoppingCart=( {
cart
}
)=> {
return (
<div>

   <div className="mt-5">
      <h3>Shopping Cart</h3>
      {
      cart.length > 0 ? (
      <div className="row">
         {
         cart.map((cartItem)=> (<> 
         <div className="col-md-4 col-xl-3 col-sm-6"key= {
            cartItem.id
            }
            >
            <div className="card mb-3 py-2">
           <div className="d-flex justify-content-between align-items-center">
                <Image src="/item.png"width= {
               100
               }
               height= {
               100
               }
               alt="item"/> 
               <div className='rounded-circle p-4 quantity d-flex justify-content-center align-items-center'> {
                  cartItem.quantity
                  }
               </div>
           </div>

               <div className="card-body">
                  <h5 className="card-title"> {
                     cartItem.name
                     }
                  </h5>
                  <p className="card-text"> {
                     cartItem.description
                     }
                  </p>
                  <p>$ {
                     cartItem.price
                     }
                  </p>
               </div>
            </div>
         </div>
         </>))
         }
      </div>
      ) : (
      <p>Your cart is empty.</p>
      )
      }
   </div>
</div>
)
}
export default ShoppingCart
