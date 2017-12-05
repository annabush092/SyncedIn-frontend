import React from 'react'
import uuid from 'uuid'
import PostCard from '../postsContainer/PostCard.js'

export function sortPosts(postList) {
  let sorted = [...postList]
  sorted.sort((a, b)=>{
    if(a.time_published < b.time_published) {
      return 1
    }else if(a.time_published > b.time_published) {
      return -1
    }else{
      return 0
    }
  })
  return sorted.map(post=>(
    <PostCard key={uuid()} {...post}/>
  ))
}
