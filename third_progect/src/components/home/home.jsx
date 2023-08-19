import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

const HomePage = (props) => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Виберіть тематику</PageTitle>
        <PageSubtext>Квести в Одесі</PageSubtext>
      </PageHeading>
      <QuestsCatalog questsCatalogData = {props.questsCatalogData}/>
    </S.Main>
  </MainLayout>
);

export default HomePage;
