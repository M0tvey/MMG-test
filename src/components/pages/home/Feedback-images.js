import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FeedbackImages(props) {
  const [feedbackImages, setFeedbackImages] = useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/photos?_limit=3').then(jsonImages => setFeedbackImages(jsonImages.data))
  }, [])

  return (
    <div className="home_feedback_images">
      <div className="home_feedback_images_wrap">
        {feedbackImages.length && (
          feedbackImages.map((image, index) => (
            <div className={'home_feedback_images_item home_feedback_images_item-' + (index + 1)} key={image.id}>
              <img className="home_feedback_images_image" src={image.url} alt={image.title} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}