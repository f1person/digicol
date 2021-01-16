import styled from 'styled-components';

import { Text } from '../../components/Text';
import { ButtonPrimary, ButtonOutlined } from '../../components/Button';

export const HeroHomeView = () => (
  <Container>
    <Content>
      <Title tid="CONTENT.HERO.HOME.TITLE" />
      <Description tid="CONTENT.HERO.HOME.DESCRIPTION" />
      <ButtonBlock>
        <ButtonOutlined tid="CONTENT.HERO.HOME.CTA_SECONDARY" />
        <ButtonPrimary tid="CONTENT.HERO.HOME.CTA_PRIMARY" />
      </ButtonBlock>
    </Content>
  </Container>
);

const Container = styled.div`
  height: 844px;
  background-image: url('/static/image/hero_home.png');
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: 24px;
  padding: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  background: #ffffff;
  padding: 40px;
  max-width: 572px;
  display: grid;
  grid-gap: 15px;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 27px;
  line-height: 34px;
  color: #1a2df3;
`;

const Description = styled(Text)`
  font-size: 15px;
  line-height: 23px;
  color: #22213d;
`;

const ButtonBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 22px;
`;
