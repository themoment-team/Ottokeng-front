import * as S from './style';
import * as I from 'assets/svgs';
import * as C from '../index';

interface props {
  imgList: any;
  onRemove: Function;
}

const IMGModal = ({ imgList, onRemove }: props) => {
  return (
    <S.IMGModal>
      <S.DashedBox htmlFor="fileInput">
        <img src={I.FileIcon} alt="" />
      </S.DashedBox>
      <S.TotalIMGBox>
        {imgList.map((img: File, id: string) => {
          let isLast = true;
          if (id === imgList.length) isLast = false;
          return (
            <C.IMGBox
              picture={img}
              title={img.name}
              key={id}
              id={id}
              onRemove={onRemove}
              isLast={isLast}
            />
          );
        })}
      </S.TotalIMGBox>
      <form method="dialog">
        <S.SubmitBTN>등록하기</S.SubmitBTN>
      </form>
    </S.IMGModal>
  );
};

export default IMGModal;
