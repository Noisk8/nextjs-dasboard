

import { CartCounter } from "@/app/shopping-cart";



export const metadata = {
  title: ' contador',
  description:'contador en nextjs',
};


export default function CounterPage() {



  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
     <span> Carrito de shop </span>
     <CartCounter  value={ 7 } />
    
    </div>


  );
}