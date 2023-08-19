import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useState } from 'react';
const QuestsCatalog = (props) => {
  const questsCatalogData = props.questsCatalogData
  const [questType, setQuestType] = useState('');
  const filteredQuests = questType === ''?
    questsCatalogData : questsCatalogData.filter((quest) => quest.type === questType);
  function setActive(type) {
    return questType === type? 'active-link':''
  }
  return (
    <>
      <S.Tabs>
        <S.TabItem onClick = {() =>setQuestType('')}>
          <S.TabBtn isActive ={setActive('')}>
            <IconAllQuests />
            <S.TabTitle>Всі квести</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
        <S.TabItem onClick = {() =>setQuestType('Пригодницьке')}>
          <S.TabBtn isActive ={setActive('Пригодницьке')} >
            <IconAdventures />
            <S.TabTitle>Пригодницьке</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick = {() =>setQuestType('Хоррор')}>
          <S.TabBtn isActive ={setActive('Хоррор')}>
            <IconHorrors />
            <S.TabTitle>Хоррор</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick = {() =>setQuestType('Містика')}>
          <S.TabBtn isActive ={setActive('Містика')}>
            <IconMystic />
            <S.TabTitle>Містика</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick = {() =>setQuestType('Детектив')}>
          <S.TabBtn isActive ={setActive('Детектив')}>
            <IconDetective />
            <S.TabTitle>Детектив</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick = {() =>setQuestType('Sci-Fi')}>
          <S.TabBtn isActive ={setActive('Sci-Fi')}>
            <IconScifi />
            <S.TabTitle>Sci-fi</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <S.QuestsList>
        {filteredQuests.map((quest) => (
          <S.QuestItem key={quest.id}>
            <S.QuestItemLink to={`/quest_${quest.id}`}>
              <S.Quest>
                <S.QuestImage
                  src={quest.previewImg}
                  width='344'
                  height='232'
                  alt={`квест ${quest.title}`}
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {quest.level}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        ))}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
