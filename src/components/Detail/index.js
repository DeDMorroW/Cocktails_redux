import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './main.css'

export default function Detail() {
    const cocktails =useSelector ((state)=> state.list_cocktails)

   let {id} = useParams()

   const [element , setElement] = useState(null)

useEffect(()=>{
    cocktails.map((el)=>
        el.idDrink === id && setElement(el)
    )
},[id])

console.log(element);
  return (
    <div>
        <div className='content'>
            <img  src={element?.strDrinkThumb} widht="300px" height="200px"/>
            <p>{element?.strDrink}</p>
            <p>{element?.strIngredient1}</p>
            <p>{element?.strIngredient2}</p>
            <p>{element?.strIngredient3}</p>
            <p>{element?.strIngredient4}</p>
            <p>{element?.strMeasure1}</p>
            <p>{element?.strMeasure2}</p>
            <p>{element?.strMeasure3}</p>
            <p>{element?.strMeasure4}</p>
            <Link to='/'><button>go back</button></Link>
  
        </div>
    </div>
  )
}
