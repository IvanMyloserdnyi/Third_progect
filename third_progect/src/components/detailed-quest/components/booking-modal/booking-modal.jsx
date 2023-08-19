import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const BookingModal = ({onBookingBtnClick}) => {
  const validationSchema = Yup.object().shape({
    'booking-name': Yup.string().required('Введіть ваше ім\'я')
      .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Ім\'я не повинно містити цифри та спеціальні символи'),
    'booking-phone': Yup.string().required('Введіть контактний телефон')
      .matches(/^\+?\d{10,}$/g, 'Некорректний формат телефону'),
    'booking-people': Yup.number()
      .max(8, 'Гравців не може бути більше 8')
      .typeError('Введіть число')
      .required('Введіть кількисть учасників')
      .integer('Введіть ціле число')
      .min(2, 'Мінімум два учасника'),
    'booking-legal': Yup.boolean().oneOf([true], 'Підтвердіть свою згоду на умови'),
  });
  const initialValues = {
    'booking-name': '',
    'booking-phone': '',
    'booking-people': '',
    'booking-legal': false,
  };
  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick ={() => onBookingBtnClick('close')}>
          <IconClose width='16' height='16' />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            onBookingBtnClick('close')
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <S.BookingField>
                <S.BookingLabel htmlFor='booking-name'>Ваше Ім'я</S.BookingLabel>
                <S.BookingInput
                  type='text'
                  id='booking-name'
                  name='booking-name'
                  placeholder="Ім'я"
                />
                <ErrorMessage name='booking-name' component='span' />
              </S.BookingField>

              <S.BookingField>
                <S.BookingLabel htmlFor='booking-phone'>Контактний телефон</S.BookingLabel>
                <S.BookingInput
                  type='tel'
                  id='booking-phone'
                  name='booking-phone'
                  placeholder='Телефон'
                />
                <ErrorMessage name='booking-phone' component='span' />
              </S.BookingField>

              <S.BookingField>
                <S.BookingLabel htmlFor='booking-people'>Кількість гравців</S.BookingLabel>
                <S.BookingInput
                  type='number'
                  id='booking-people'
                  name='booking-people'
                  placeholder='Кількість гравців'
                />
                <ErrorMessage name='booking-people' component='span' />
              </S.BookingField>

              <S.BookingCheckboxWrapper>
                <S.BookingCheckboxInput
                  type='checkbox'
                  id='booking-legal'
                  name='booking-legal'
                />
                <S.BookingCheckboxLabel
                  className='checkbox-label'
                  htmlFor='booking-legal'
                >
                  <S.BookingCheckboxText>
                    Я згоден з{' '}
                    <S.BookingLegalLink href='#'>
                      правилами обробки персональних данних і угодою користувача
                    </S.BookingLegalLink>
                  </S.BookingCheckboxText>
                </S.BookingCheckboxLabel>
                <ErrorMessage name='booking-legal' component='span' />
              </S.BookingCheckboxWrapper>

              <S.BookingSubmit type='submit' disabled={isSubmitting}>
                Відправити заявку
              </S.BookingSubmit>
            </Form>
          )}
        </Formik>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;

/*
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookingModal = () => {
  const validationSchema = Yup.object().shape({
    'booking-name': Yup.string().required('Введіть ваше ім\'я'),
    'booking-phone': Yup.number().required('Введіть контактний телефон'),
    'booking-people': Yup.number()
      .max(7, 'Игроков не может быть больше 7')
      .typeError('Введіть число')
      .required('Введіть кількість учасників')
      .integer('Введіть ціле число')
      .min(2, 'Мінімум 2 учасника'),
    'booking-legal': Yup.boolean().oneOf([true], 'Підтвердіть згоду з умовами'),
  });
  const initialValues = {
    'booking-name': '',
    'booking-phone': '',
    'booking-people': '',
    'booking-legal': false,
  };
  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn>
          <IconClose width='16' height='16' />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
                <S.BookingField
                  type='text'
                  id='booking-name'
                  name='booking-name'
                  placeholder='Имя'
                />
                <ErrorMessage name='booking-name' component='div' />

                <S.BookingField
                  type='tel'
                  id='booking-phone'
                  name='booking-phone'
                  placeholder='Контактный телефон'
                />
                <ErrorMessage name='booking-phone' component='div' />

                <S.BookingField
                  type='number'
                  id='booking-people'
                  name='booking-people'
                  placeholder='Количество участников'
                />
                <ErrorMessage name='booking-people' component='div' />

              <S.BookingCheckboxWrapper>
                <S.BookingCheckboxInput
                  type='checkbox'
                  id='booking-legal'
                  name='booking-legal'
                />
                <S.BookingCheckboxLabel
                  className='checkbox-label'
                  htmlFor='booking-legal'
                >
                  <S.BookingCheckboxText>
                    Я согласен с{' '}
                    <S.BookingLegalLink href='#'>
                      правилами обработки персональных данных и пользовательским
                      соглашением
                    </S.BookingLegalLink>
                  </S.BookingCheckboxText>
                </S.BookingCheckboxLabel>
                <ErrorMessage name='booking-legal' component='div' />
              </S.BookingCheckboxWrapper>

              <S.BookingSubmit type='submit' disabled={isSubmitting}>
                Отправить заявку
              </S.BookingSubmit>
            </Form>
          )}
        </Formik>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;

*/
