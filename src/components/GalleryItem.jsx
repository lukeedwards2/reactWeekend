import React, { useState } from 'react';
import axios from 'axios';

const GalleryItem = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false)
  const [likes, setLikes] = useState(item.likes)

  const toggleFunction = () => {
    setShowDescription(!showDescription)
  }

  const likeFunction = () => {
    axios.put(`/api/gallery/like/${item.id}`)
      .then(() => {
        setLikes(likes + 1)
      })
      .catch(error => {
        console.log('ERROR', error)
      });
  }

  if (showDescription) {
  }

  return (
    <div data-testid="galleryItem" className="gallery-item">
      <div onClick={toggleFunction} data-testid="toggle">
        {showDescription ? (
          <p>{item.description}</p>
        ) : (
          <img src={item.url} alt={item.description}  />
        )}
      </div>
      <p>{item.title}</p>
      <button onClick={likeFunction} data-testid="like">Like</button>
      <p>{likes} Likes</p>
    </div>
  )
}

export default GalleryItem;