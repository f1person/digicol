import styled from 'styled-components';

import { Line, Title as TitleUI } from '../../components';

import { List } from './List';

export const FaqView = () => (
  <Container>
    <Line />
    <Content>
      <Title tid="CONTENT.FAQ.TITLE" />
      <ListBlock>
        <List />
      </ListBlock>
    </Content>
  </Container>
);

const Container = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListBlock = styled.div`
  margin-top: 32px;
  display: flex;
`;

const Content = styled.div`
  width: 615px;
  display: flex;
  flex-direction: column;
  padding: 62px 0;
`;

const Title = styled(TitleUI)`
  text-align: center;
`;
