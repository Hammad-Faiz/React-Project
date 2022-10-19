import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components';

function PostForm() {

  const [jdata, setJdata] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");


  useEffect(() => {
    fetch('http://localhost:3000/blogs')
    .then(res => res.json())
    .then(data => setJdata(data))
  }, [])


const formSubmit = (e) => {
  e.preventDefault();

  const dish = {
    title: title,
    image: image
  }
  addNewBurger(dish)

}
const addNewBurger= (newBurger) => {
  fetch('http://localhost:3000/blogs', {
    method: 'POST',
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(newBurger)
})
.then (res => res.json())
.then (newData => setJdata([...jdata, newData]))
}

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input placeholder='Image_Url' value={image} onChange={(e) => setImage(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      {jdata.map((dish) => {
        return (
          <NewMeal key={dish.id}>
            <h3>{dish.title}</h3>
            <img src={dish.image} alt={dish.title}/>
          </NewMeal>
        );
      })}
    </div>
  )
}

const NewMeal = styled.div`

  input{
    position: relative;
    right: 60px;
     border: none;
     background: #E4EBF5;
     box-shadow: inset 0 0 5px #a0a5ac;
     font-size: 1.5rem;
     color: #5b0eeb;
     border: none;
     border-radius: 15px;
     outline: none;
  width: 600%;
  margin-left: 23rem;
  }
`



export default PostForm
