"use client"
import './globals.css';  
import { Navbar } from './components/navbar';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider, useCart } from './CartContext';

const LayoutWithNavbar = ({ children }) => {
  const { cart } = useCart(); 

  return (
    <>
      <Navbar cartLength={cart.length} />
      <div className='my-3'>
        {children}
      </div>
    </>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <LayoutWithNavbar>{children}</LayoutWithNavbar>
        </CartProvider>
      </body>
    </html>
  );
}
