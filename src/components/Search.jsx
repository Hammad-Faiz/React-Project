import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'


function Search() {

  const [input, setInput] = useState("")
  const navigate = useNavigate();
 
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <input onChange={(e) => setInput(e.target.value)} type='text' value={input}/>
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  margin-top: 35px;
  position: relative;
  width: 100px;

  input{
    position: relative;
    right: px;
     border: none;
     background: #E4EBF5;
     box-shadow: inset 0 0 5px #a0a5ac;
     font-size: 1.5rem;
     color: #5b0eeb;
     padding: .5rem 3rem;
     border: none;
     border-radius: 1rem;
     outline: none;
  width: 600%;
  margin-left: 9rem;
  }

  div {
    margin-left: 240px;
    width: 100%;
    position: relative
  }

  svg {
    position: relative;
    top: 42px;
    left: 182px;
    transform: translate(100%, -50%);
    color: #5b0eeb;
    z-index: 4;
  }
`;

export default Search