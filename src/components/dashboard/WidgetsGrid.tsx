'use client';

import { useAppSelector } from "@/store";
import { SimpleWidget } from './SimpleWidget'
import { FcBiohazard } from "react-icons/fc";


export const WidgetsGrid = ()  => {

const isCart = useAppSelector(state => state.counter.count);

  return (
    <div className='flex flex-wrap p-2  items-center  justify-center'>
     <SimpleWidget 
   
     subTitle="Mera vuelta pai"
     title={ `${isCart}` }
     label="contador"
href="/counter"
icon={<FcBiohazard size={70} />}
     />
    </div>
  )
}

