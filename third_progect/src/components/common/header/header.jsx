import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { useLocation } from 'react-router-dom';
const navData = [
  {
    content: 'Квести',
    path: '/'
  },
  {
    content: 'Новачкам',
    path: '/beginner'
  },
  {
    content: 'Відгуки',
    path: '/reviews'
  },
  {
    content: 'Акції',
    path: '/promotions'
  },
  {
    content: 'Контакти',
    path: '/contacts'
  }
]
const Header = () => {
  const location = useLocation();
  const isCurrentPath = (path) => {
    return location.pathname === path ? 'active-link' : ''
  }
  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          {navData.map((obg) => (
            <S.LinkItem key = {obg.path}>
              <S.Link $isActiveLink = {isCurrentPath(obg.path)} to={obg.path}>
                {obg.content}
              </S.Link>
            </S.LinkItem>
          ))}

        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">+38 (091) 228-14-88</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
)};

export default Header;
