import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import IconHeart from './IconHeart'

const Gallery = () => {
  const { photos } = useContext(DataContext)
  return (
    <div className='gallery grid-columns-5 p-2'>
      {photos?.map((e) => {
        return (
          <div key={e.id} className='photo'>
            <img id={e.id} src={e.src.tiny} alt={e.alt} />
            <IconHeart filled={e.liked} id={e.id} />
            <p className='text-like'>{e.alt}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Gallery
