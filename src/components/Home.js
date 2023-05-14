import React, { useState } from 'react'
import styled from 'styled-components'
import quizGirl from '../image/quizGirl.jpg';
import user1 from '../image/user-1.jpg';
import user2 from '../image/user-2.jpg';
import user3 from '../image/user-3.jpg';
import user4 from '../image/user-4.jpg';
import user5 from '../image/user-5.jpg';
import { AccessTimeOutlined, BookmarksOutlined, ChatBubbleOutline, EditNoteOutlined, FeedOutlined, Help, HelpOutline, QuizOutlined, StarRate, Timeline, WorkspacePremiumOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const Wrapper = styled.div`
   display: flex;
   padding-left: 10px;
   padding-right:10px;
   ${'' /* flex-direction: row; */}
`;
const Box = styled.div`
   display: flex;
   flex-direction: column;
   width:  ${props => props.width ? `${props.width}` : "100%"};
   ${'' /* flex-direction: end; */}
   ${'' /* align-items: center; */}
   justify-content: center;
   ${'' /* margin-top: 10px; */}
   margin-right: 5px;
`;
const Title = styled.div`
   font-size: ${ props => props.size ? `${props.size}` : "30px"};
   font-weight: 600;
   color: ${props => props.color ? `${props.color}` : "#7001AF"};
   flex-wrap: wrap;
   padding-left:15px;
   padding-right: 15px;
   margin-bottom: ${props => props.btm};
`;

const Bold = styled.b`
   color: green;
`;
const Image = styled.img`
  width: 50%;
`;
const Desc = styled.div`
  margin: 5px 2px;
  display: flex;
  color: gray;
  font-weight: 600;
  padding-left:5px;
  padding-left: ${(props => props.left)};
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: gray;
`;
const MenuItem = styled.div`
  font-weight: 600;
  margin-left: 4px;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const ContImage = styled.img`
  border: 2px solid white; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: ${props => props.zindex ? props.zindex : 0};
  transform: ${ props => props.translate ? `translate(-${props.translate})` : "0"};
`;

const NavLinkButton = styled(NavLink)`
  background-color: #7001AF;
  border: none;
  margin:  auto;
  margin-top: ${props => props.mtb};
  margin-bottom: ${props => props.mtb};
  width: 5rem;
  padding: 10px;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  &:hover{
    background: green;
  }
`;

const DialogContainer = styled.div` 
   position: relative;
   bottom: ${props => props.show ? "43vh" : "150vh"};
   background-color: #fff;
   width: 100%;
   height: 50%;  
   padding-top:10px;
   box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
   ${'' /* right: 0; */}
   transition: all 1s ease-out;
   z-index: 10;
   border-radius: 20px;
   background: #FDFD96;
`;

const Close = styled.button`
   cursor: pointer;
   position: absolute;
   top: 16px;
   right: 10px;
   background-color: transparent;
   border: 0;
   font-size: 18px;
`;

const Home = () => {
  
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Wrapper>
                <Box>
                    <Title>The <Bold>Daily</Bold> MS</Title>
                    <Title> <Bold>Excel</Bold> Quiz</Title>
                </Box>
                <Image src={quizGirl}/>
            </Wrapper>
            <Title color="#393951" size="20px">The Daily MS Excel Quiz</Title>
            <Wrapper>
                <Box width="85em">
                    <Menu>
                        <MenuItem> <ChatBubbleOutline/> </MenuItem>
                        <MenuItem> Leave a comment </MenuItem>
                    </Menu> 
                    <Menu>
                        <MenuItem> <BookmarksOutlined/> </MenuItem>
                        <MenuItem> Save Quiz </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem> <QuizOutlined /> </MenuItem>
                        <MenuItem> Challenge Friend </MenuItem>
                    </Menu> 
                </Box>
                <Box width="10em">
                    <ImageContainer>
                        <ContImage src={user5} zindex={0}/>
                        <ContImage src={user1} zindex={2} translate={"20px"}/>
                        <ContImage src={user2} zindex={2} translate={"40px"}/>
                        <ContImage src={user3} zindex={2} translate={"60px"} />
                        <ContImage src={user4} zindex={2} translate={"80px"} />
                    </ImageContainer>
                    <Desc>People enrolled</Desc>
                    
                    <ImageContainer>
                        <StarRate style={{color: "yellow"}}/>
                        <StarRate style={{ color: "yellow" }} />
                        <StarRate style={{ color: "yellow" }} />
                        <StarRate style={{ color: "yellow" }} />
                        <StarRate style={{ color: "yellow" }} />
                    </ImageContainer>
                    <Desc>3 Rating (5.0)</Desc>
                </Box>
            </Wrapper>
            <Wrapper>
                <Desc>
                    This Microsoft Excel Proficiency Test is designed to evaluate an individual's knowledge and skills in using Microsoft Excel. Itt covers a wide range of topics, including ... 
                </Desc>
            </Wrapper>
            <Title color="#393951" size="20px" > This Quiz Includes</Title>
            <Wrapper>
            <Box>
                <Menu>
                    <MenuItem> <FeedOutlined/> </MenuItem>
                    <MenuItem> 50% Passing Percentage  </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem> <QuizOutlined/> </MenuItem>
                    <MenuItem> 5 Questions  </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem> <AccessTimeOutlined/> </MenuItem>
                    <MenuItem> 10 Mins  </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem> <EditNoteOutlined/> </MenuItem>
                    <MenuItem> 1 Attempt Daily  </MenuItem>
                </Menu> 
                <NavLinkButton onClick={()=> setOpen(!open)}> Take Quiz </NavLinkButton>
            </Box>
            </Wrapper>
            {open ?
                <DialogContainer show={open}>
                    <Close onClick={()=>setOpen(!open)}>X</Close>
                    <Title btm="15px;">Quiz Rule</Title>
                    <Wrapper>
                        <Box width= "15%">
                            <AccessTimeOutlined style={{ fontSize: '40px' }} />
                        </Box>
                        <Box width= "85%">
                            <Title size="20px" color="#393951"> Title </Title>
                            <Desc left="15px">Keep in mind it's a time-bound quiz</Desc>
                        </Box>    
                    </Wrapper>
                    <Wrapper>
                        <Box width="15%">
                            <HelpOutline style={{ fontSize: '40px' }} />
                        </Box>
                        <Box width="85%">
                            <Title size="20px" color="#393951"> Title </Title>
                            <Desc left="15px">We believe that you will ace it!</Desc>
                        </Box>
                    </Wrapper>
                    <Wrapper>
                        <Box width="15%">
                            <WorkspacePremiumOutlined
                             style={{ fontSize: '40px' }} />
                        </Box>
                        <Box width="85%">
                            <Title size="20px" color="#393951"> Title </Title>
                            <Desc left="15px">All the best see you on the other side</Desc>
                        </Box>
                    </Wrapper>
                    <Wrapper>
                        <NavLinkButton mtb="15px" to="/Quiz">Start Quiz</NavLinkButton>
                    </Wrapper>
                </DialogContainer>
                : ""
            }
        </Container>
  )
}

export default Home