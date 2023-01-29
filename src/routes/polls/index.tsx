import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import YeonkyungPolls from '../../components/polls/YeonkyungPolls';
import HaerinPolls from '../../components/polls/HaerinPolls';

const PollsPage = () => {
  const [round, setRound] = useState<number>(16);

  const roundTitle = useMemo(() => {
    if (round === 2) {
      return '결승';
    } else if (round === 1) {
      return '우승';
    } else return round + '강';
  }, [round]);

  return (
    <Wrapper>
      <HaerinPolls />
      {/* <YeonkyungPolls /> */}
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
