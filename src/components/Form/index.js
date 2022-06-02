import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { search_by_name } from '../../actions/api_actions'


export default function Form() {
    const input = useRef(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        input.current.focus()
    },[])


    const search=(e)=>{
        e.preventDefault()
        let text = input.current.value
        dispatch(search_by_name(text))
        
    }

  return (
    <form onSubmit={search}>
        <input ref={input} type={'text'} />
        <button>Search</button>
    </form>
  )
}
