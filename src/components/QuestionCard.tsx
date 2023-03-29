import React from 'react'
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper} from '../QuestionCard.style';



type props = {
    question: string;
    answer: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNR: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<props> = ({
    question,
    answer,
    callback,
    userAnswer,
    questionNR,
    totalQuestions,
}) =>
(
    <Wrapper>
        <div>
            <p className="number">
                Question: {questionNR}/ {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
        </div>
        <div >
            {answer.map((answer => (
                <ButtonWrapper 
                key={answer}
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}>
                    <button disabled={!!userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            )))}
        </div>
    </Wrapper>
)
 

export default QuestionCard;