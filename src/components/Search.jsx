import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import {FaSearch} from 'react-icons/fa'


function Search() {

  const [input, setInput] = useState('')
  const navigat = useNavigate();
 
  const submitHandler = (e) => {
    e.preventDefault();
    navigat('./searched/' + input)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        {/* <FaSearch></FaSearch> */}
        <input onChange={(e) => setInput(e.target.value)} type='text' value={input}/>
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  position: relative;
  width: 100px;
  input{
  //   border: none;
       background: linear-gradint(35deg, #494949, #313131);
  //   font-size: 1.5rem;
  //   color: white;
  //   padding: 1rem 3rem;
  //   border: none;
  //   border-radius: 1rem;
  //   outline: none;
  width: 250%;
  }

  div {
    width: 100%;
    position: relative
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search