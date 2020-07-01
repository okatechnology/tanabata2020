import React from 'react';
import styled from 'styled-components';
import { Tanzaku } from './Tanzaku';
import { TANZAKU_HEIGHT, TANZAKU_WIDTH } from '../data/constants';

const karidata: Tanzaku[] = [
  {
    id: 1,
    contents: 'うんちしたい',
    name: 'oka',
    color: 'pink',
  },
  {
    id: 2,
    contents: 'ラーメン食いたい',
    name: 'zoe',
    color: 'green',
  },
  {
    id: 3,
    contents: 'うんちしたい',
    name: 'oka',
    color: 'pink',
  },
  {
    id: 4,
    contents: 'ラーメン食いたい',
    name: 'zoe',
    color: 'green',
  },
  {
    id: 5,
    contents: 'うんちしたい',
    name: 'oka',
    color: 'pink',
  },
  {
    id: 6,
    contents: 'ラーメン食いたい',
    name: 'zoe',
    color: 'green',
  },
  {
    id: 7,
    contents: 'うんちしたい',
    name: 'oka',
    color: 'pink',
  },
  {
    id: 8,
    contents: 'ラーメン食いたい',
    name: 'zoe',
    color: 'green',
  },
  {
    id: 9,
    contents: 'うんちしたい',
    name: 'oka',
    color: 'pink',
  },
  {
    id: 10,
    contents: 'ラーメン食いたい',
    name: 'zoe',
    color: 'green',
  },
  {
    id: 11,
    contents: 'うんちしたい',
    name: 'oka',
    color: 'lightBlue',
  },
  {
    id: 12,
    contents: 'ラーメン食いたい',
    name: 'zoe',
    color: 'green',
  },
  {
    id: 13,
    contents: 'うんちしたい',
    name: 'oka',
    color: 'pink',
  },
  {
    id: 14,
    contents: 'ラーメン食いたい',
    name: 'zoe',
    color: 'green',
  },
];

export const TanzakuContainer = () => {
  return (
    <Wrapper>
      <AppearArea>
        {karidata.map((datas) => (
          <Tanzaku key={datas.id} {...datas} />
        ))}
      </AppearArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${TANZAKU_HEIGHT / 2}px ${TANZAKU_WIDTH + TANZAKU_WIDTH}px
    ${TANZAKU_HEIGHT / 2 + TANZAKU_HEIGHT}px ${TANZAKU_WIDTH}px;
`;

const AppearArea = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
