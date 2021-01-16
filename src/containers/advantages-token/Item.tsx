import styled from 'styled-components';

import { Text as TextUi } from '../../components';

type Props = { id: number | string; icon: React.ComponentType };

export const Item = ({ id, icon: Icon }: Props) => (
  <Container>
    <IconBlock>
      <Icon />
    </IconBlock>
    <Title tid={`CONTENT.ADVANTAGES.TOKEN.${id}.TITLE`} />
    <div>
      <SubWords tid={`CONTENT.ADVANTAGES.TOKEN.${id}.SUB_WORDS`} />
      <Text tid={`CONTENT.ADVANTAGES.TOKEN.${id}.INFO`} />
    </div>
  </Container>
);

const Text = styled(TextUi)`
  font-weight: 600;
  font-size: 13px;
  line-height: 22px;
  text-align: center;
  color: rgba(34, 33, 61, 0.5);
`;

const Title = styled(TextUi)`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #1a2df3;
`;

const SubWords = styled(TextUi)`
  font-weight: 600;
  font-size: 13px;
  line-height: 22px;
  text-align: center;
  color: #22213d;
`;

const IconBlock = styled.div`
  background-color: #f2f9ff;
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

const Container = styled.div`
  display: flex;
  grid-gap: 12px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
