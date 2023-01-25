import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { PHOTOS } from '../../routes/polls';

interface ChoiceFormProps {
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
}

const ChoiceForm = ({ round, setRound }: ChoiceFormProps) => {
  return (
    <Wrapper>
      {PHOTOS.slice(0, 2).map((ele) => {
        return <img key={ele.id} src={ele.img} width={400} height={500} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Container = styled.div``;

export default ChoiceForm;
