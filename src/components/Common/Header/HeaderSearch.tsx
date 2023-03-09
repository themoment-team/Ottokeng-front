/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as I from 'assets/svgs';
import * as S from './style';
import { useState } from 'react';
export const HeaderSearch = () => {
  const [search, setSearch] = useState<string>('');

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
