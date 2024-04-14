import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import IconHeart from './IconHeart'

const Gallery = () => {
  const { photos, liked } = useContext(DataContext)
  return (
    <div className='gallery grid-columns-5 p-2'>
      {photos?.map((e) => {
        return (
          <div onClick={liked} key={e.id} className='photo'>
            <img id={e.id} src={e.src.tiny} alt={e.alt} />
            <IconHeart filled={e.liked} />
            <p className='text-like'>{e.alt}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Gallery
