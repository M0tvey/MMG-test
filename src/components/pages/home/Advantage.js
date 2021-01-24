import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Advantage(props) {
  const [posts, setPosts] = useState([])
  const [postsImages, setPostsImages] = useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts?_limit=4').then(jsonPosts => setPosts(jsonPosts.data))
    axios('https://jsonplaceholder.typicode.com/photos?_limit=4').then(jsonImages => setPostsImages(jsonImages.data))
  }, [])

  return (
    <section className="home_advantage page_block">
      <div className="container">
        <h1 className="page_logo text-center-xl">Header</h1>

        <div className="home_advantage_wrap row">
          {postsImages.length &&
            posts.map((post, i) => (
              <div key={post.id} className="cell-xl-3 cell-md-6 cell-xs-12">
                <div className="home_advantage_item">
                  {postsImages[i].thumbnailUrl && (
                  <div className="home_advantage_iamge-wrap">
                    <img className="home_advantage_iamge" src={postsImages[i].thumbnailUrl} alt={post.title} />
                  </div>)}

                  <div className="home_advantage_content">
                    <h2 className="home_advantage_content_title">{post.title}</h2>

                    <p className="home_advantage_content_text">{post.body}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}