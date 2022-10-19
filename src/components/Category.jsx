import {FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import {GiNoodles} from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

import React from 'react'

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink >
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      {/* <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink> */}
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction; column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: #E4EBF5;
  box-shadow: inset 0 0 5px #a0a5ac;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

   h4 {
     color: #5b0eeb;
     font-size: 0.8rem;
   }

  svg{
    color: #5b0eeb;
     font-size: 1.5rem
  }

  &.active{
    background: #5b0eeb;

    svg{
     color: orange;
   }
   h4{
    color: #E4EBF5;
   }
  }
   

`;

export default Category








// {/* <List>
//       <NavLink to={'/cuisine/Italian'}>
//         <FaPizzaSlice />
//         <h4>Italian</h4>
//       </NavLink>
//       <NavLink to={'/cuisine/American'}>
//         <FaHamburger />
//         <h4>American</h4>
//       </NavLink>
//       <NavLink to={'/cuisine/Thai'}>
//         <GiNoodles />
//         <h4>Thai</h4>
//       </NavLink>
//       <NavLink to={'/cuisine/Japanese'}>
//         <GiChopsticks />
//         <h4>Japanese</h4>
//       </NavLink>
//     </List> */}