import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { useQuery } from 'react-query';
/*const questsCatalogData = {
  questsTypes: ["Все квесты","Приключения","Ужасы","Мистика","Детектив","Sci-fi"],
  questList: [
    {
      id: 1,
      questLink: '/quest',
      src: "img/preview-sklep.jpg",
      alt: "квест Склеп",
      title: "Склеп",
      personCount: "2–5 чел",
      difficulty: "сложный",
      type: "horror"
    },
    {
      id: 2,
      questLink: '/quest',
      src: "img/preview-maniac.jpg",
      alt: "квест Маньяк",
      title: "Маньяк",
      personCount: "3–6 чел",
      difficulty: "средний",
      type: "horror"
    },
    {
      id: 3,
      questLink: '/quest',
      src: "img/preview-ritual.jpg",
      alt: "квест Ритуал",
      title: "Ритуал",
      personCount: "3–5 чел",
      difficulty: "легкий",
      type: "horror"
    },
    {
      id: 4,
      questLink: '/quest',
      src: "img/preview-old-ceil.jpg",
      alt: "квест История призраков",
      title: "История призраков",
      personCount: "5–6 чел",
      difficulty: "легкий",
      type: "horror"
    },
    {
      id: 5,
      questLink: '/quest',
      src: "img/preview-final-frontier.jpg",
      alt: "квест Тайны старого особняка",
      title: "Тайны старого особняка",
      personCount: "2–3 чел",
      difficulty: "легкий",
      type: "horror"
    },
    {
      id: 6,
      questLink: '/quest',
      src: "img/preview-house-in-the-woods.jpg",
      alt: "квест Хижина в лесу",
      title: "Хижина в лесу",
      personCount: "4–7 чел",
      difficulty: "средний",
      type: "horror"
    }
  ]
}*/

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
  /*<Route exact path={`/quest / ${quest.id}`}> !!д?*/
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
            <Route exact path='/quest_:id'>
              <DetailedQuest questsCatalogData = {questsCatalogData}/>
            </Route>
          <Route exact path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/'>
            <Home questsCatalogData={questsCatalogData}/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
