import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
  // DECLARACION DE ESTADOS
  const [photos, setphotos] = useState([])
  // BUSQUEDA DE photo
  const fetchData = async () => {
    try {
      const response = await fetch('../../public/photos.json')
      const api = await response.json()
      setphotos(api.photos)
    } catch (error) {
      console.error('Error síncrono dentro de useEffect:', error)
    }
  }
  // INVOCANDO A LA API
  useEffect(() => {
    fetchData()
  }, [])
  // FUNCION PARA LIKE
  const liked = (e) => {
    const index = photos.findIndex((photo) => {
      return photo.id === +e.target.id
    })
    const newphotos = photos
    newphotos[index].liked = !newphotos[index].liked
    setphotos([...newphotos])
  }
  // DECLARION DE ESTADO GLOBAL
  const globalData = {
    photos,
    liked
  }
  return (
    <DataContext.Provider value={globalData}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider
