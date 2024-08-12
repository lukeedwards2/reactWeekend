import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from './GalleryItem';

const GalleryList = () => {
  const [galleryItems, setGalleryItems] = useState([])

  useEffect(() => {
    axios.get('/api/gallery')
      .then(response => {
        setGalleryItems(response.data)
      })
      .catch(error => {
        console.log('ERROR', error)
      })
  }, [])

  return (
    <div data-testid="galleryList">
      {galleryItems.map(item => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
  
}

export default GalleryList;