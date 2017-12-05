import React from 'react'
import uuid from 'uuid'
import PostCard from '../postsContainer/PostCard.js'

export function sortPosts(postList) {
  let sorted = [...postList]
  sorted.sort((a, b)=>{
    return (b.time_published - a.time_published)
  })
  return sorted.map(post=>(
    <PostCard key={uuid()} {...post}/>
  ))
}
