import React from 'react'
import Image from 'next/image';
import ArrowIcon from '@/img/ArrowIcon.png'
import Illustration1 from '@/img/Illustration1.png'

export interface CardProps {
    title?: string;
    description?: string;
    type?: "green" | "white" | "black";
}



export const Card = ({title, description, type}: CardProps) => {
  return ( // agregar condicional para classname
    <div className={
        type === "green" ? "card--component--green" :
        type === "white" ? "card--component--white" :
        type === "black" ? "card--component--black" :
        
        ""
    }>
        <div className='card--content'>
            <div className='card--title-container'>{<h2 className='card--title'>{title}</h2>}</div>
            <div className='card--info'>
                {<Image src={ArrowIcon} alt={title || 'Card icon'} width={30} height={30} className='card--icon' />}    
                {<h3 className='card--description'>{description}</h3>}
            </div>
        </div>
        <div className='card--image-container'>
            {<Image src={Illustration1} alt={title || 'Card image'} width={150} height={150} className='card--image' />}
        </div>
    </div>
  )
}
