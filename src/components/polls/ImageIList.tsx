import React from 'react';
import { PhotoType } from '../../constants/photo';
import { uniqueId } from 'lodash';
import ImageItem from './ImageItem';

interface ImageListProps {
  list: PhotoType[];
  onClickImage: (v: PhotoType) => void;
}
const ImageList = ({ list, onClickImage }: ImageListProps) => {
  return (
    <>
      {list.map((ele, _index) => {
        return (
          <ImageItem key={uniqueId()} ele={ele} onClickImage={onClickImage} />
        );
      })}
    </>
  );
};

export default ImageList;
