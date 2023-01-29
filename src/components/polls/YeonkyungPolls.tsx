import React, {
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useState,
} from 'react';
import { useFormContext } from 'react-hook-form';
import styled, { keyframes } from 'styled-components';
import { PhotoType, PHOTOS } from '../../constants/photo';

interface FormType {
  name: string;
}

const YeonkyungPolls = () => {
  const {
    register,
    formState: { isValid },
  } = useFormContext<FormType>();

  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [round2, setRound2] = useState<PhotoType[]>([]);
  const [round3, setRound3] = useState<PhotoType[]>([]);
  const [finalRound, setFinalRound] = useState<PhotoType[]>([]);
  const [roundCount, setRoundCount] = useState(0);

  const onClickItem = (value: PhotoType) => {
    setRoundCount(roundCount + 1);
    if (roundCount < 7) {
      setRound2((prev) => [...prev, value]);
      setCount(count + 2);
    } else if (roundCount === 7) {
      setPhotos([...round2, value]);
      setCount(0);
    } else if (roundCount > 7 && roundCount < 11) {
      setRound3((prev) => [...prev, value]);
      setCount(count + 2);
    } else if (roundCount === 11) {
      setPhotos([...round3, value]);
      setCount(0);
    } else if (roundCount > 11 && roundCount < 13) {
      setFinalRound((prev) => [...prev, value]);
      setCount(count + 2);
    } else if (roundCount === 13) {
      setPhotos([...finalRound, value]);
      setCount(0);
    } else {
      // TODO: api
      alert(JSON.stringify(value));
    }
  };

  useLayoutEffect(() => {
    setPhotos(PHOTOS.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
      {step === 0 && (
        <>
          <h1>설문조사</h1>
          <Input
            id="input"
            type="text"
            placeholder="이름을 입력해주세요"
            {...register('name', { required: true })}
          />
          <p>
            <button
              type="button"
              disabled={!isValid}
              onClick={() => setStep(1)}
            >
              시작하기
            </button>
          </p>
        </>
      )}
      {step === 1 && (
        <>
          roundCount: {roundCount}
          <br />
          count: {count}
          <ListWrap>
            {photos.slice(count, count + 2).map((ele) => {
              return (
                <ListItem key={ele.id}>
                  <CustomImg src={ele.img} onClick={() => onClickItem(ele)} />
                </ListItem>
              );
            })}
          </ListWrap>
        </>
      )}
    </>
  );
};

export const CustomImg = styled.img`
  cursor: pointer;
  border-radius: 5px;

  width: 300px;
  height: 400px;

  :hover {
    transform: scale(1.01);
    transition: all 0.1s ease-in-out;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 150px;
  height: 25px;
`;

const Text = styled.span`
  font-weight: 600;
  font-size: 22px;
  margin-right: 5px;
`;

const FadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const ImgItem = styled.img`
  width: 400px;
  height: 500px;
  cursor: pointer;
`;

const ListWrap = styled.div`
  span:first-child {
    margin-right: 10px;
  }
`;

const ListItem = styled.span`
  animation: ${FadeIn} 1s;
`;

export default YeonkyungPolls;
