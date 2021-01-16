import React from 'react';
import styled from 'styled-components';

import { Item } from './Item';

export const List = () => (
  <Container>
    <ItemBlock>
      <Item id={1} />
    </ItemBlock>
    <ItemBlock>
      <Item id={2} />
    </ItemBlock>
    <ItemBlock>
      <Item id={3} />
    </ItemBlock>
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
`;

const ItemBlock = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`;
