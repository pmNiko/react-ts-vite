import React, { useEffect, useState } from "react"
import Spinner from "../basics/Spinner"

interface IPhotos {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const Photos = () => {
  const [photos, setPhotos] = useState<IPhotos[]>([])
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const getPhotos = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/photos")
  //     const data = await res.json()
  //     setPhotos(data)
  //   }
  //   getPhotos()
  // }, [])

  useEffect(() => {
    ;(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos")
      const data = await res.json()
      setPhotos(data)
      setLoading(false)
    })()
  }, [])

  return (
    <div>
      <h1>Photos</h1>
      {loading && <Spinner />}
      {photos.map((photo) => (
        <div
          style={{
            width: "250",
            height: "250",
            border: "1px solid #000",
            display: "inline-block",
            margin: "10px",
          }}
        >
          <h4
            style={{
              width: "200px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {photo.title}
          </h4>
          <img src={photo.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Photos
