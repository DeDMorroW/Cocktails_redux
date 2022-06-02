import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Output() {
    const cocktails =useSelector((state)=> state.list_cocktails)
  return (
    <div>
    {cocktails?.length > 0 ? (
        cocktails?.map((el) => {
          return(
            <Link to={`/detail/${el.idDrink}`} key={el.idDrink}>
              <div className='content'>
              <img  src={el.strDrinkThumb} widht="300px" height="200px"/>
              <p>{el.strDrink}</p>
              </div>
            </Link >
          )
        })
      ) : (
        <h3>Empty</h3>
      )}
      </div>
  )
}



