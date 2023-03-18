/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as I from 'assets/svgs';
import * as S from './style';
import { User, UserBtn } from 'components';
import { useState } from 'react';


const UserPage = () => {
  const [select, isSelect] = useState<Boolean>(false);
  const title = ['내가 쓴글', '내가 답변한 글'];

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <User imageUrl=""></User>
        {title.map((elm, index) => {
          return <UserBtn title={title[index]} key={index}></UserBtn>;
        })}
      </div>
    </>
  );
};

export default UserPage;
