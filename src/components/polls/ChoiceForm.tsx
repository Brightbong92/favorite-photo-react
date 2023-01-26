import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import styled from 'styled-components';
import { PhotoType } from '../../constants/photo';
import ImageList from './ImageIList';
import { CustomImg } from './ImageItem';

interface ChoiceFormProps {
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  photos: PhotoType[];
}

const ChoiceForm = ({
  round,
  count,
  photos,
  setCount,
  setRound,
}: ChoiceFormProps) => {
  const [result, setResult] = useState<PhotoType>();
  const [eightArr, setEightArr] = useState<PhotoType[]>([]);
  const [fourArr, setFourArr] = useState<PhotoType[]>([]);
  const [finalList, setFinalList] = useState<PhotoType[]>([]);

  const onClickImage = (v: PhotoType) => {
    console.log(count);

    if (count <= 8) {
      // 방금선택한 사진은 맨뒤로
      if (count === 8) setEightArr((prev) => [...prev, v]);
      else setEightArr((prev) => [v, ...prev]);
    } else if (count > 8 && count < 13) {
      if (count === 12) setFourArr((prev) => [...prev, v]);
      else setFourArr((prev) => [v, ...prev]);
    } else if (count >= 13 && count < 15) setFinalList((prev) => [...prev, v]);

    if (count === 8 && round !== 8) setRound(8);
    if (count === 12 && round !== 4) setRound(4);
    if (count === 14 && round !== 2) setRound(2);
    if (count === 15 && round !== 1) setRound(1);

    if (count !== 15) setCount(count + 1);
    else {
      // TODO: create photo API
      setResult(v);
    }
  };

  // TODO: 리렌더링 방지하기위해 로직 변경필요
  const sixteenList = useMemo(() => {
    if (count === 1) {
      return photos.slice(0, 2);
    } else if (count === 2) {
      return photos.slice(2, 4);
    } else if (count === 3) {
      return photos.slice(4, 6);
    } else if (count === 4) {
      return photos.slice(6, 8);
    } else if (count === 5) {
      return photos.slice(8, 10);
    } else if (count === 6) {
      return photos.slice(10, 12);
    } else if (count === 7) {
      return photos.slice(12, 14);
    } else if (count === 8) {
      return photos.slice(14, 16);
    } else return [];
  }, [count, photos]);

  const eightList = useMemo(() => {
    if (count === 9) {
      return eightArr.slice(0, 2);
    } else if (count === 10) {
      return eightArr.slice(2, 4);
    } else if (count === 11) {
      return eightArr.slice(4, 6);
    } else if (count === 12) {
      return eightArr.slice(6, 8);
    } else return [];
  }, [count]);

  const fourList = useMemo(() => {
    if (count === 13) {
      return fourArr.slice(0, 2);
    } else if (count === 14) {
      return fourArr.slice(2, 4);
    } else return [];
  }, [count]);

  return (
    <Wrapper>
      {round === 16 && (
        <ImageList list={sixteenList} onClickImage={onClickImage} />
      )}
      {round === 8 && (
        <ImageList list={eightList} onClickImage={onClickImage} />
      )}
      {round === 4 && <ImageList list={fourList} onClickImage={onClickImage} />}
      {round === 2 && (
        <ImageList list={finalList} onClickImage={onClickImage} />
      )}
      {round === 1 && (
        <CustomImg
          decoding="async"
          src={result?.img}
          width={500}
          height={600}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default ChoiceForm;
