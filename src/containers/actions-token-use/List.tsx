import React from 'react';
import styled from 'styled-components';

import { Item } from './Item';

import { ReactComponent as ActionIcon1 } from '../../assets/svg/action_5.svg';
import { ReactComponent as ActionIcon2 } from '../../assets/svg/action_6.svg';
import { ReactComponent as ActionIcon3 } from '../../assets/svg/action_7.svg';
import { ReactComponent as ActionIcon4 } from '../../assets/svg/action_8.svg';

export const List = () => (
  <Container>
    <Item id={5} icon={ActionIcon1} />
    <Item id={6} icon={ActionIcon2} />
    <Item id={7} icon={ActionIcon3} />
    <Item id={8} icon={ActionIcon4} />
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 62px;
`;
