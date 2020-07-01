import React, { useState } from 'react';
import sasaImg from '../../../assets/sasa.png';
import styled from 'styled-components';
import { TanzakuContainer } from './TanzakuContainer';
import { ScrolledArea } from './ScrolledArea';
import { colorsData } from '../data/constants';
import { AfterPrayingMordal } from './AfterPrayingMordal';

export const Top = () => {
  const [afterPraying, setAfterPraying] = useState(false);
  const [prayedText, setPrayedText] = useState('test');

  return (
    <Wrapper>
      <NightBg />
      <SasaBg style={{ backgroundImage: `url(${sasaImg})` }} />
      <TanzakuContainer />
      <ScrolledArea
        handlePrayedText={setPrayedText}
        handleAfterPraying={setAfterPraying}
      />
      <AfterPrayingMordal
        prayedText={prayedText}
        show={afterPraying}
        handleAfterPraying={setAfterPraying}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 4rem;
  color: ${colorsData.blue.hex};
`;

const NightBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #2d0047;
  z-index: -9999;
`;

const SasaBg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -9998;
  opacity: 0.6;
  filter: blur(0.2rem);
`;
