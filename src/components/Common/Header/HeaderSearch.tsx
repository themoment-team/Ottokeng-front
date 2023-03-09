/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as I from 'assets/svgs';
import * as S from './style';
import { useState } from 'react';
import axios from 'axios';
export const HeaderSearch = () => {
  const [search, setSearch] = useState<string>('');

  const getSearch = async () => {
    const { data } = await axios({
      url: `http://10.82.20.148:8080/post/writing/search/${search}`,
      method: 'get',
    });
    console.log(data);
  };

  return (
    <>
      <div
        css={css`
          width: 28.75rem;
          height: 2.75rem;
          position: relative;

          display: flex;
          align-items: center;
        `}
      >
        <S.SearchBox
          type="text"
          placeholder="잃어버린 분실물을 찾아보세요!"
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        <div
          css={css`
            position: absolute;
            right: 1rem;
          `}
        >
          <I.SearchIcon />
        </div>
      </div>
    </>
  );
};
