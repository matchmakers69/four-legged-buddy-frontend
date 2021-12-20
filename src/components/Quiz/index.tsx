/* eslint-disable react/no-array-index-key */
import { FC, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import FormGroup from "src/components/common/FormElement/FormGroup";
import { getMaxIdByKey } from "src/services/getMaxId";
import { TextField } from "src/styles/components/MuiTextField.styled";
import * as S from "styles/components/Form";
import * as Styled from "./Quiz.styled";

interface FormValues {
  title: string;
  answer: string;
  question: Record<number, string>;
}

interface IQuestion {
  id: number;
  content: string;
  points: number;
}

type Questions = {
  id: number;
  content: string;
  answers: IQuestion[];
};

const initialQuestion: Questions = {
  id: 1,
  content: "",
  answers: [
    { id: 1, content: "", points: 0 },
    { id: 2, content: "", points: 4 },
    { id: 3, content: "", points: 0 },
    { id: 4, content: "", points: 0 },
  ],
};

const Quiz: FC = function () {
  const [questions, setQuestions] = useState<Questions[]>([initialQuestion]);

  const addQuestion = () => {
    const maxId = getMaxIdByKey("id", questions);
    setQuestions([
      ...questions,
      {
        ...initialQuestion,
        id: maxId + 1,
      },
    ]);
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

  // const { fields: questions, append, remove } = useFieldArray<FormValues>

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
                {...register(`${question.id}`)}
                placeholder={`Question ${q + 1}`}
                type="text"
                // name={`question[${q}].content`}
              />
              {question.answers.map((answer, a) => {
                return (
                  <Styled.Answer key={`answer${a}`}>
                    <input
                      type="text"
                      placeholder={`Answer ${a + 1}`}
                      // {...register(`question[${q}].answer[${a}]`)}
                      {...register(`question[${q}].answer[${a}]`)}
                      // {...register(`${question.id}.answer.id`)}
                      // name={`question[${q}].answer[${a}].content`}
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
