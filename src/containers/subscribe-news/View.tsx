import styled from 'styled-components';

import {
  Title as TitleUI,
  Text as TextUI,
  TextField,
  ButtonPrimary,
  Line,
} from '../../components';

export const SubsribeNewsView = () => (
  <Container>
    <Line />
    <Content>
      <Title tid="CONTENT.NEWSLETTER.TITLE" />
      <Text tid="CONTENT.NEWSLETTER.DESCRIPTION" />
      <Form>
        <TextField tid="CONTENT.NEWSLETTER.FORM.EMAIL" />
        <ButtonPrimary tid="CONTENT.NEWSLETTER.FORM.BUTTON" />
      </Form>
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
  width: 520px;
  display: grid;
  grid-gap: 22px;
  padding: 62px 0;
`;

const Title = styled(TitleUI)`
  text-align: center;
`;

const Text = styled(TextUI)`
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 135px;
  grid-gap: 12px;
`;
