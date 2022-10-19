import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'
import Search from "./components/Search";
import styled from 'styled-components'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Title>
        <h1 style={{marginLeft: "800px",}}>RECIPE GUIDE</h1>
      </Title>
       <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

const Title = styled.div`
  h1 {
    margin-right: 500
    margin-right: 540px;
  }
`