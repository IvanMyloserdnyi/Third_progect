import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';

const DetailedQuest = (props) => {
  const questsCatalogData = props.questsCatalogData;
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const onBookingBtnClick = (action) => {
    if (action === 'close') {
      setIsBookingModalOpened(false);
    }
    else {
      setIsBookingModalOpened(true);
    }
  };
  const {id} = useParams()
  const quest = questsCatalogData.find(obg => obg.id === parseInt(id))
  return (
    <MainLayout>
        <S.Main>
          <S.PageImage
            src={quest.coverImg}
            alt={`Квест ${quest.title}`}
            width='1366'
            height='768'
          />
          <S.PageContentWrapper>
            <S.PageHeading>
              <S.PageTitle>{quest.title}</S.PageTitle>
              <S.PageSubtitle>{quest.type}</S.PageSubtitle>
            </S.PageHeading>

            <S.PageDescription>
              <S.Features>
                <S.FeaturesItem>
                  <IconClock width='20' height='20' />
                  <S.FeatureTitle>{`${quest.duration} хвилин`}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPerson width='19' height='24' />
                  <S.FeatureTitle>{`${quest.peopleCount[0]}–${quest.peopleCount[1]} осіб`}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPuzzle width='24' height='24' />
                  <S.FeatureTitle>{quest.level}</S.FeatureTitle>
                </S.FeaturesItem>
              </S.Features>

              <S.QuestDescription>
                {quest.description}
              </S.QuestDescription>

              <S.QuestBookingBtn onClick={onBookingBtnClick}>
                Забронировать
              </S.QuestBookingBtn>
            </S.PageDescription>
          </S.PageContentWrapper>

          {isBookingModalOpened && <BookingModal onBookingBtnClick = {onBookingBtnClick}/>}
        </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
