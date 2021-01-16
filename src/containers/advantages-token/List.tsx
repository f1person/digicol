import React from 'react';
import styled, { css } from 'styled-components';

import { Item } from './Item';

import { ReactComponent as AdvantageIcon6 } from '../../assets/svg/advantage_6.svg';
import { ReactComponent as AdvantageIcon7 } from '../../assets/svg/advantage_7.svg';
import { ReactComponent as AdvantageIcon8 } from '../../assets/svg/advantage_8.svg';

export const List = () => (
  <Container>
    <ItemBlock>
      <Item id={6} icon={AdvantageIcon6} />
    </ItemBlock>
    <ItemBlock>
      <Item id={7} icon={AdvantageIcon7} />
    </ItemBlock>
    <ItemBlock>
      <Item id={8} icon={AdvantageIcon8} />
    </ItemBlock>
  </Container>
);

const ItemBlock = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 62px;
`;
