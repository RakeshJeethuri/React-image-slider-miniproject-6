
import { useState } from 'react';
import './Imageslider.css'

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
export default function Imageslider({data}) {
    const [slide,setslide] = useState(0);
    const nextslide =()=>{
        setslide(slide===data.length-1?0:slide+1);
    }
    const prevslide=()=>{
        setslide(slide===0?data.length-1:slide-1);
    }

    console.log(data);
    return (
    
    <div className='imageslide'>
        <FaChevronLeft className='arrow arrow-left' onClick={prevslide}/>
        {data.map((item,idx)=>{
        return (<img src={item.src} alt={item.alt} key={idx} className={slide===idx?'slider':'slider slider-hidden'}/>)
    })}
    <FaChevronRight className='arrow arrow-right' onClick={nextslide}/>
    <span className='indicators'>
        {data.map((_,idx)=>{
            return <button key={idx} onClick={()=>{setslide(idx)}} className={slide===idx?'indicator':'indicator indicator-inactive'}></button>

        })}
    </span>
    </div>
  )
}
