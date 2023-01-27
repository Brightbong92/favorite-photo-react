import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import ChoiceForm from '../../components/polls/ChoiceForm';
import HaerinPolls from '../../components/polls/HaerinPolls';
import { PHOTOS, PhotoType } from '../../constants/photo';

const PollsPage = () => {
  const [round, setRound] = useState<number>(16);
  const [count, setCount] = useState<number>(1);
  const [photos, setPhotos] = useState<PhotoType[]>([]);

  const roundTitle = useMemo(() => {
    if (round === 2) {
      return '결승';
    } else if (round === 1) {
      return '우승';
    } else return round + '강';
  }, [round]);

  useEffect(() => {
    const copyPhotos = Array.from(PHOTOS);
    copyPhotos.sort(() => Math.random() - 0.5);
    setPhotos(copyPhotos);
  }, []);

  return (
    <Wrapper>
      <HaerinPolls />
      {/* <Header1>{roundTitle}</Header1> */}
      {/* <ChoiceForm {...{ round, setRound, count, setCount, photos }} /> */}
    </Wrapper>
  );
};

const Header1 = styled.h1`
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1280px;
  padding: 0 20px;
`;

export default PollsPage;
