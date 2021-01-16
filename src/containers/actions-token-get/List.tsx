import React from 'react';
import styled from 'styled-components';

import { Item } from './Item';

import { ReactComponent as ActionIcon1 } from '../../assets/svg/action_1.svg';
import { ReactComponent as ActionIcon2 } from '../../assets/svg/action_2.svg';
import { ReactComponent as ActionIcon3 } from '../../assets/svg/action_3.svg';
import { ReactComponent as ActionIcon4 } from '../../assets/svg/action_4.svg';

export const List = () => (
  <Container>
    <Item id={1} icon={ActionIcon1} />
    <Item id={2} icon={ActionIcon2} />
    <Item id={3} icon={ActionIcon3} />
    <Item id={4} icon={ActionIcon4} />
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 62px;
`;
