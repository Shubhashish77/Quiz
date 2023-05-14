import React from 'react'
import styled from 'styled-components'
import Chip from '@mui/material/Chip';

import winner from '../image/winner.png';
import loose from '../image/loose.png';

import { EmojiEvents, EmojiEventsOutlined, EmojiEventsSharp } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    aligh-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: ${props => props.bgC};
`;
const Wrapper = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;  
`;
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 235px;
    height: 235px;
    border: 2px solid white;
    border-radius: 50%;
    background: ${props => props.bgC ? props.bgC : "teal"};
    margin: 30px auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const Image = styled.img`
    width: 200px;
    height: 200px;
`;
const Title = styled.div`
   height: 5%;
   padding: 10px;
   font-size: 20px;
   font-weight: bold;
   color: black;
`;
const Desc = styled.div`
    height: 15%; 
    padding: 10px;
    font-size: 15px;
    font-weight: bold;
    color: gray;
`;
const NavLinkButton = styled(NavLink)`
  display: flex;
  aligh-items: center;
  justify-content: center;
  background-color: green;
  border: none;
  width: 5rem;
  height: 5%;
  margin: auto;
  padding: 10px;
  color: white;
  border-radius: 20px;
  text-decoration: none;
`;

const Result = ({score, total}) => {
    return (
        <Container bgC={score >= total / 2 ? "#7001AF" : "pink"}>
            {score >= total/2 ? (
                <Wrapper>
                    <ImageContainer>
                        <Image src={winner} />
                    </ImageContainer>
                    <Chip
                        avatar={<EmojiEventsSharp style={{ color: "yellow", size: "40px" }} />}
                        label={`${score * 10} Karma points earned`}
                        color="success"
                        sx={{
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            margin: "20px",
                        }}
                    />
                </Wrapper>
            ) : (
                    <Wrapper>
                        <ImageContainer bgC="#f1f1f1">
                            <Image src={loose} />
                        </ImageContainer>
                        <Chip
                            avatar={<EmojiEventsSharp style={{ color: "yellow", size: "40px" }} />}
                            label={`${score * 10} Karma points earned`}
                            color="error"
                            sx={{
                                fontWeight: "bold",
                                letterSpacing: "1px",
                            }}
                        />
                    </Wrapper>
            ) }
            <Title>
                What are karma points?
            </Title>
            <Desc>
                Karma points are awarded for various actions like attempting quizzes and watching videos, allowing you to move up the leaderboards and unlock new features.
            </Desc>
            <NavLinkButton to="/">Start Quiz</NavLinkButton>

        </Container>
    )
}

export default Result