import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router, PageTitle,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { useQuery } from 'react-query';
import MainLayout from '../common/main-layout/main-layout';

const App = () => {
  const { data: questsCatalogData, isLoading, error } = useQuery('questsCatalogData', async () => {
    const response = await fetch('http://localhost:3001/quests');
    return response.json();
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/quest_:id'>
            <DetailedQuest questsCatalogData={questsCatalogData} />
          </Route>
          <Route exact path='/contacts'>
            <Contacts />
          </Route>
          <Route exact path='/beginner'>
            <Error />
          </Route>
          <Route exact path='/reviews'>
            <Error />
          </Route>
          <Route exact path='/promotions'>
            <Error />
          </Route>
          <Route path='/*'>
            <Home questsCatalogData={questsCatalogData} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
const Error = () => {
  return (
    <MainLayout>
      <div style={{
        marginTop: '120px',
        marginBottom: '120px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <PageTitle>Сторінка не знайдена</PageTitle>
      </div>
    </MainLayout>
  );
};

export default App;
