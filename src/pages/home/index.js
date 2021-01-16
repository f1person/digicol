import {
  SubsribeNews,
  AdvantagesHome,
  HeroHome,
  Faq,
  HeroToken,
  AdvantagesToken,
  ActionsTokenGet,
  ActionsTokenUse,
} from '../../containers';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HeroHome />
        <HeroToken />
        <AdvantagesHome />
        <AdvantagesToken />
        <ActionsTokenGet />
        <ActionsTokenUse />
        <Faq />
        <SubsribeNews />
      </div>
    );
  }
}

export default HomePage;
