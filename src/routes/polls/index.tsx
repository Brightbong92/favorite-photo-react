import React, { useState } from 'react';
import styled from 'styled-components';
import ChoiceForm from '../../components/polls/ChoiceForm';

export const PHOTOS = [
  {
    id: 0,
    img: '/images/yk1.jpeg',
  },
  {
    id: 1,
    img: '/images/yk2.jpeg',
  },
  {
    id: 2,
    img: '/images/yk3.jpeg',
  },
  {
    id: 3,
    img: '/images/yk4.jpeg',
  },
  {
    id: 4,
    img: '/images/yk5.jpeg',
  },
  {
    id: 5,
    img: '/images/yk6.jpeg',
  },
  {
    id: 6,
    img: '/images/yk6.jpeg',
  },
  {
    id: 7,
    img: '/images/yk7.jpeg',
  },
  {
    id: 8,
    img: '/images/yk8.jpeg',
  },
  {
    id: 9,
    img: '/images/yk9.jpeg',
  },
  {
    id: 10,
    img: '/images/yk10.jpeg',
  },
  {
    id: 11,
    img: '/images/yk11.jpeg',
  },
  {
    id: 12,
    img: '/images/yk12.jpeg',
  },
  {
    id: 13,
    img: '/images/yk13.jpeg',
  },
  {
    id: 14,
    img: '/images/yk14.jpeg',
  },
  {
    id: 15,
    img: '/images/yk15.jpeg',
  },
  {
    id: 16,
    img: '/images/yk16.jpeg',
  },
];

const PollsPage = () => {
  const [round, setRound] = useState<number>(16);

  return (
    <Wrapper>
      <Header1>최애 사진 고르기 {round}강</Header1>
      <ChoiceForm {...{ round, setRound }} />
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
