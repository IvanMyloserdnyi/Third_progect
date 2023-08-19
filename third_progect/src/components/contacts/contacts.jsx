import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from './contacts.styled';

const Contacts = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Контакти</PageTitle>
          <PageSubtext>Квести в Одесі</PageSubtext>
        </S.PageHeading>

        <S.Contacts>
          <S.ContactsList>
            <S.ContactTitle>Адреса</S.ContactTitle>
            <S.ContactValue>
              <S.ContactAddress>
                м. Одеса,
                <br />
                вул. Незалежної України буд. 24
              </S.ContactAddress>
            </S.ContactValue>

            <S.ContactTitle>Графік роботи</S.ContactTitle>
            <S.ContactValue>Кожний день, з 9:00 до 20:00</S.ContactValue>

            <S.ContactTitle>Телефон</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="tel:8 (800) 333-55-99">
                +38 (091) 228-14-88
              </S.ContactLink>
            </S.ContactValue>

            <S.ContactTitle>E-mail</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="mailto:info@escape-room.ru">
                info@escape-room.ua
              </S.ContactLink>
            </S.ContactValue>
          </S.ContactsList>

          <S.ContactsMap>
            <S.ContactsMapImage
              src={contactsMap}
              alt="ми знаходимось по адресі м. Київ вул. Незалежної України буд. 24"
              width="649"
              height="336"
            />
          </S.ContactsMap>
        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default Contacts;
