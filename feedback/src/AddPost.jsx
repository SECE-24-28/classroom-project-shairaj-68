import React, { useContext } from 'react'
import DataContext from './DataContext'

const AddPost = () => {
  const { title, setTitle, body, setBody, handleSubmit } = useContext(DataContext)
  
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
              <input type='text' placeholder='TITLE'
               value={title}
               onChange={(e)=>setTitle(e.target.value)}/>

              <textarea name='' id='' placeholder='Body'
               value={body}
               onChange={(e)=>setBody(e.target.value)}
              >

              </textarea>
              <button type='submit' >Save</button>
        </form>
    </div>
  )
}

export default AddPost
