import React from 'react'
import { useParams } from 'react-router-dom'
import GenreData from '../components/GenreData'

const Genre = () => {
    const {name} = useParams()
    const genre = GenreData.find((genre) => genre.name === name)
  return (
    <div><h1>{genre.name}</h1></div>
  )
}

export default Genre