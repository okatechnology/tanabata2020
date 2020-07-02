import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tanzaku } from './Tanzaku';
import { TANZAKU_HEIGHT, TANZAKU_WIDTH } from '../data/constants';
import { getTanzaku } from '../utils/accessToApi';

interface TanzakuContainerProps {
  afterPraying: boolean;
}

export const TanzakuContainer = ({ afterPraying }: TanzakuContainerProps) => {
  const [tanzakuData, setTanzakuData] = useState<Tanzaku[]>(null as any);
  useEffect(() => {
    (async () => {
      if (afterPraying) return;
      const { data } = await getTanzaku();
      setTanzakuData(data);
    })();
  }, [afterPraying]);

  return (
    <Wrapper>
      <AppearArea>
        {tanzakuData && tanzakuData.map((datas) => <Tanzaku key={datas.id} {...datas} />)}
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
