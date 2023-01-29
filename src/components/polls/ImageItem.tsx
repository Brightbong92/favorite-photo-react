import React, { memo } from 'react';
import { PhotoType } from '../../constants/photo';
import styled from 'styled-components';

interface ImageListProps {
  ele: PhotoType;
  onClickImage: (v: PhotoType) => void;
}
const ImageItem = ({ ele, onClickImage }: ImageListProps) => {
  return (
    <CustomImg
      decoding="async"
      src={ele.img}
      width={500}
      height={600}
      onClick={() => onClickImage(ele)}
    />
  );
};

export default memo(ImageItem);

export const CustomImg = styled.img`
  cursor: pointer;
  border-radius: 5px;

  :hover {
    transform: scale(1.01);
    transition: all 0.1s ease-in-out;
  }
`;
