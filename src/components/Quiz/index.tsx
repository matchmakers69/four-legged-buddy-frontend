/* eslint-disable react/no-array-index-key */
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "src/components/common/FormElement/FormGroup";
import { TextField } from "src/styles/components/MuiTextField.styled";
import * as S from "styles/components/Form";
import * as Styled from "./Quiz.styled";

interface FormValues {
  title: string;
  question: string;
  answer: string;
}

interface IQuestion {
  content: string;
  points: number;
}

interface IQuestions {
  content: string;
  answers: IQuestion[];
}

const initialQuestion = {
  content: "What is KC?",
  answers: [
    { content: "Dont know", points: 0 },
    { content: "Something nice", points: 4 },
    { content: "", points: 0 },
    { content: "", points: 0 },
  ],
};

const Quiz: FC = function () {
  const [questions, setQuestions] = useState<IQuestions[]>([initialQuestion]);

  const addQuestion = () => {
    setQuestions([...questions, initialQuestion]);
  };

  const removeQuestion = () => {
    const newQuestionsArr = [...questions];
    newQuestionsArr.splice(questions.length - 1, 1);
    setQuestions(newQuestionsArr);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onQuizFormSubmit = async (data) => {
    console.log(data);
  };

  return (
    <Styled.FormContainer>
      <S.Form onSubmit={handleSubmit(onQuizFormSubmit)}>
        <FormGroup>
          <TextField
            placeholder="Quiz title"
            {...register("title")}
            type="text"
            variant="outlined"
            label="What is your dog's name?"
          />
        </FormGroup>
        {questions.map((question, q) => {
          return (
            <Styled.Question key={`question${q}`}>
              <input
                {...register("question")}
                defaultValue={question.content}
                placeholder={`Question ${q + 1}`}
                type="text"
                name={`question[${q}].content`}
              />
              {question.answers.map((answer, a) => {
                return (
                  <Styled.Answer key={`answer${a}`}>
                    <input
                      defaultValue={answer.content}
                      type="text"
                      placeholder={`Answer ${a + 1}`}
                      name={`question[${q}].answer[${a}].content`}
                    />
                    <Styled.Points name={`question[${q}].answer[${a}].points`} type="number" defaultValue={0} />
                  </Styled.Answer>
                );
              })}
            </Styled.Question>
          );
        })}
        <FormGroup>
          <button type="submit">Start quiz</button>
        </FormGroup>
      </S.Form>
      <Styled.Controls>
        <button onClick={addQuestion}>Add</button>
        <button onClick={removeQuestion}>Remove question</button>
      </Styled.Controls>
    </Styled.FormContainer>
  );
};

export default Quiz;
