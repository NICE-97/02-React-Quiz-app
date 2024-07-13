import { useContext, useEffect, useState } from "react"
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App";

const Quiz = ()=>{
    const [current,setCurrent] = useState(0);
    const [selectchoice,setSelectChoice] = useState('');
    const {score,setScore,setAppState} = useContext(DataContext);

    const nextQuestion=()=>{
        setSelectChoice('');
        if(current === QuestionsData.length-1){
            setAppState('score');
        }else{
            setCurrent(current+1);
        }
    }

    useEffect(()=>{
        checkAnswer();
        // eslint-disable-next-line
    },[selectchoice])

    const checkAnswer = ()=>{
        if(selectchoice !== ""){
            if(selectchoice === QuestionsData[current].answer){
                setScore(score+1);
                nextQuestion();
            }else{
                nextQuestion();
            }
        }
    }

    return(
        <div className="Quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChoice('A')}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoice('B')}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoice('C')}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoice('D')}>{QuestionsData[current].D}</button>
            </div>
            <h4 style={{color:"white"}}>{`${current+1} / ${QuestionsData.length}`}</h4>
        </div>
    )
}
export default Quiz