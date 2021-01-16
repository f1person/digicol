import styled from 'styled-components';

import { Title as TitleUI } from '../../components';

import { List } from './List';

export const AdvantagesHomeView = () => (
  <Container>
    <Content>
      <Title tid="CONTENT.ADVANTAGES.HOME.TITLE" />
      <List />
    </Content>
  </Container>
);

const Container = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;

const Content = styled.div`
  width: 972px;
  display: grid;
  grid-gap: 22px;
  padding: 62px 0;
`;

const Title = styled(TitleUI)`
  text-align: center;
  margin-bottom: 32px;
`;
