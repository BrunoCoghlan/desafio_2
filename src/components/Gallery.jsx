import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import IconHeart from './IconHeart'

const Gallery = () => {
  const { photos, liked } = useContext(DataContext)
  return (
    <div className='gallery grid-columns-5 p-3'>
      {photos?.map((e) => {
        return (
          <figure onClick={liked} key={e.id} className='photo'>
            <img id={e.id} src={e.src.tiny} alt={e.alt} />
            <IconHeart filled={e.liked} />
            <figcaption className='text-like'>{e.alt}</figcaption>
          </figure>
        )
      })}
    </div>
  )
}
export default Gallery
