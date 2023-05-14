import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';

import { QuizData } from '../Data/quizData'
import { Radio } from '@mui/material';
import Result from './Result';

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;
const Wrapper = styled.div`
    padding: 10px;
`;
const Top = styled(Stack)`
    display: flex;
    justify-content: space-between;
`;
const Box = styled.div`
    display: flex;
    height: 80vh;;
    ${'' /* background-color: orange; */}
    ${'' /* position: absolute; */}
    flex-direction:column;
    justify-content: space-between;
`;
const Question = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 40%;
    font-weight: bold;
`;
const Options = styled.button`
    ${'' /* position: absolute; */}
    width: 100%;
    height: 50%;
    flex: 1;
    bottom: 150px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border: none;
    background: #fff;
`;

const Option = styled.div`
    margin-top: 10px; 
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${'' /* justify-content: space-between; */}
    align-items: center;
    box-shadow: 0px 0px 4px 1px rgb(128, 123, 123);
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
`;

const Text = styled.span`
    font-weight: 600;
`;

const Tag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border-radius: 5px;
    border: 2px solid black;
    color: black;
    background-color: ${props => props.bgC};
    border: ${props => props.bgC ? "2px solid green" : ""};
    color: ${props => props.bgC ? "white": ""};
`;

const RadioBox = styled.div`
    width: 15px;
    height: 15px;
    border: 2px solid black;
    border-radius: 50px;
    margin-right: 10px;
    margin: 10px;
    ${'' /* color: ${props => props.bgC ? props.bgC : "info"}; */}
    background-color: ${props => props.bgC};
    border: ${props => props.bgC ? "2px solid green" : ""};
`;

const Button = styled.button`
    margin: auto;
    height: 10%;
    border-radius: 20px;
    margin-bottom: 20px;
    width: 40%;
    background-color: #7001AF;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;



const Quiz = () => {
    const [time, setTime] = useState({
        min: 10,
        sec: 0
    })
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [SelectedOption, setSelectedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const updateQuestion = () => {
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            if(SelectedOption == QuizData[currentQuestion].answer)
                setScore(score+1);
            setSelectedOption(0);
            console.log(score);
        } else {
            if (SelectedOption === QuizData[currentQuestion].answer)
                setScore(score + 1);
            console.log(score);
            setShowResult(true)
        }
    }
    
    useEffect(()=>{
        setTimeout(() => {
            if (time.sec > 0) {
                setTime({ ...time, sec: time.sec - 1 })
            }
            if (time.sec === 0) {
                if (time.min === 0) {
                    setTime({ min: 0, sec: 0 });
                    setShowResult(true);
                } else {
                    setTime({
                        ...time,
                        min: time.min - 1,
                        sec: 59
                    })
                }
            } 
        },1000)
    })
    return (
        <Container>
                {showResult ? <Result score={score} total={QuizData.length} /> : 
                    <Wrapper> 
                        <Box>
                            <Top direction="row">
                                <Chip
                                    color="success"
                                    label={`${currentQuestion + 1}/${QuizData.length}`}
                                    sx={{
                                        fontWeight: "bold",
                                        letterSpacing: "2px"
                                    }}
                                />
                                <Chip 
                                    color="error" 
                                    label={`${time.min} : ${time.sec}`} 
                                    sx={{
                                        fontWeight: "bold",
                                        letterSpacing: "2px"
                                    }}
                                />
                            </Top>
                            <Question>
                                {QuizData[currentQuestion].question}
                            </Question>
                            <Options>
                                {QuizData[currentQuestion].options.map((option, i) => (
                                    <Option key={i} onClick={()=>{setSelectedOption(i+1)
                                    }}>
                                        <Tag bgC={SelectedOption == i+1 ? "green" : ""}>{i+1}</Tag> 
                                        <Text>{option}</Text>
                                        <RadioBox
                                            bgC={SelectedOption == i + 1 ? "green" : ""} />
                                    </Option>
                                ))}
                            </Options>
                            <Button
                              onClick={updateQuestion} 
                            >
                                {QuizData.length-1 == currentQuestion ? "Submit" : "Next"}
                            </Button>
                        </Box>
                    </Wrapper>      
                }
              
        </Container>
  )
}

export default Quiz