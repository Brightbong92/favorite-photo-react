import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled, { keyframes } from 'styled-components';
import { HAERINS, PhotoType } from '../../constants/photo';

const ARR = [1, 2, 3, 4, 5, 6];

interface FormType {
  name: string;
}

const HaerinPolls = () => {
  const {
    register,
    formState: { isValid },
  } = useFormContext<FormType>();

  const [step, setStep] = useState(0);
  const [photos, setPhotos] = useState<PhotoType[]>(HAERINS);
  const [count, setCount] = useState(0);
  const [round2, setRound2] = useState<PhotoType[]>([]);
  const [finalRound, setFinalRound] = useState([]);

  const onClickItem = (value: PhotoType) => {
    if (count !== 6) {
      setRound2((prev) => [...round2, value]);
      setCount(count + 2);
    } else alert(value.img);
  };

  useLayoutEffect(() => {
    const shuffleArr = HAERINS.sort(() => Math.random() - 0.5);
    setPhotos(shuffleArr);
  }, []);

  useEffect(() => {
    document.getElementById('input')?.focus();
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
          count: {count}
          <ListWrap>
            {photos.slice(count, count + 2).map((ele) => {
              return (
                <ListItem key={ele.id}>
                  <ImgItem src={ele.img} onClick={() => onClickItem(ele)} />
                </ListItem>
              );
            })}
          </ListWrap>
        </>
      )}
    </>
  );
};

export default HaerinPolls;

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
