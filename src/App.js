import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";


//COMPONENT
import Home from "./components/Home";
import Quiz from "./components/Quiz";

//STYLE
const Container = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const Wrapper = styled.div`
  width: 400px;
  height: 85vh;
  background-color: #ffffff;
  border-radius: 20px;
  ${'' /* padding: 15px; */}
  margin-top: 20px;
  margin-bottom: auto; 
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Quiz" element={<Quiz />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </Container>
  );
}

export default App;
