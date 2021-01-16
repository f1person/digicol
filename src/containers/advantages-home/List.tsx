import React from 'react';
import styled from 'styled-components';

import { Item } from './Item';

import { ReactComponent as AdvantageIcon1 } from '../../assets/svg/advantage_1.svg';
import { ReactComponent as AdvantageIcon2 } from '../../assets/svg/advantage_2.svg';
import { ReactComponent as AdvantageIcon3 } from '../../assets/svg/advantage_3.svg';
import { ReactComponent as AdvantageIcon4 } from '../../assets/svg/advantage_4.svg';
import { ReactComponent as AdvantageIcon5 } from '../../assets/svg/advantage_5.svg';

export const List = () => (
  <Container>
    <div className="div1">
      <ItemBlock>
        <Item id={1} icon={AdvantageIcon1} />
      </ItemBlock>
    </div>
    <ItemBlock>
      <Item id={2} icon={AdvantageIcon2} />
    </ItemBlock>
    <ItemBlock>
      <Item id={3} icon={AdvantageIcon3} />
    </ItemBlock>
    <ItemBlock>
      <Item id={4} icon={AdvantageIcon4} />
    </ItemBlock>
    <ItemBlock>
      <Item id={5} icon={AdvantageIcon5} />
    </ItemBlock>
  </Container>
);

const ItemBlock = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 72px;
  grid-row-gap: 42px;

  & > *:nth-of-type(1) {
    grid-area: 1 / 1 / 2 / 4;
  }

  & > *:nth-of-type(2) {
    grid-area: 1 / 4 / 2 / 7;
  }

  & > *:nth-of-type(3) {
    grid-area: 2 / 1 / 3 / 3;
  }

  & > *:nth-of-type(4) {
    grid-area: 2 / 3 / 3 / 5;
  }

  & > *:nth-of-type(5) {
    grid-area: 2 / 5 / 3 / 7;
  }
`;
