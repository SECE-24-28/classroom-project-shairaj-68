import React, { useContext } from 'react'
import DataContext from './DataContext'

const Home = () => {
  const { searchresult } = useContext(DataContext)
  
  return (
    <div>
      {
      searchresult.map((post) => 
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.datetime}</p>
          -----------------------------------------------------------------------
        </div>
    ) 
  }
    </div>
  )
}

export default Home
