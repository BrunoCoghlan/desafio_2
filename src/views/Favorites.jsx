import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Favorites = () => {
  const { photos } = useContext(DataContext)
  return (
    <div className='App'>
      <h1>Fotos favoritas</h1>
      <div className='p-3 gallery grid-columns-4'>
        {photos?.map((e) => {
          if (!e.liked) return null
          return (
            <img key={e.id} src={e.src.tiny} alt={e.alt} className='photo' />
          )
        })}
      </div>
    </div>
  )
}
export default Favorites
