import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect, useState } from 'react'


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()




type debonuncedProps={
    searchQuery:string,
    delay:number
}
// useDebonunced hooks use in the project 
export const useDebonunced=({searchQuery,delay}:debonuncedProps)=>{
     const [debonuncedValue,setDebonuncedValue]=useState<string>(searchQuery)
     useEffect(()=>{
      const hander=setTimeout(()=>{
        setDebonuncedValue(searchQuery)
      },delay)
    return ()=>  clearTimeout(hander)
     },[searchQuery,delay])
    return debonuncedValue
}