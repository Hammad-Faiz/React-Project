import React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchdetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  useEffect(() => {
    fetchdetails();

  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt=''/>
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div `
margin-top: 10;
margin-bottom: 5rem;
display: flex;
.active{
  background: #e4ebf5;
}

img {
  margin-left: 1rem;
}

h2 {
  margin-bottom: 2rem;
}

li {
  font-size: 1.2rem;
  line-height: 2.5rem
}

ul {
  margin-top: 2rem
}
`

const Button = styled.button`
  padding: 1rem 1rem;
  color: #5b0eeb;
  border-radius: 15px;
  background: #e4ebf5;
  box-shadow: inset 0 0 5px #a0a5ac;
  border: none;
  margin-right: 2rem;
  font-weight: 500;
`
const Info = styled.div` 
  margin-left: 10rem;
`

export default Recipe
