// importing dependencies
import { Link } from 'react-router-dom';
import { FiRss, FiUsers, FiSliders } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';

// importing images
import profile from '../../assets/images/profile.jpg';

// importing styles
import {
  MenuContainer,
  MenuContent,
  MenuIcon,
  MenuProfile,
  UserName,
  MenuNav,
  NavItem,
  Text,
} from './elements';

export function Menu({ menuIsOpen, setMenuOpen }) {
  return (
    <>
      <MenuContainer active={menuIsOpen}>
        <MenuIcon active={menuIsOpen} onClick={() => setMenuOpen(false)}>
          <FaTimes/>
        </MenuIcon>
        <MenuContent>
          <MenuProfile>
            <img src={profile} alt="" />
            <UserName>Matheus Germano</UserName>
          </MenuProfile>
          <MenuNav>
            <NavItem>
              <Link to="/feed">
                <FiRss />
                {' '}
                Meu feed
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/my-clubs">
                <FiUsers />
                {' '}
                Meus Clubes
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/profile">
                <FiSliders />
                {' '}
                Meu Perfil
              </Link>
            </NavItem>
          </MenuNav>
        </MenuContent>
        <Text>
          Algum problema?
          {' '}
          <span>Entre em contato.</span>
        </Text>
      </MenuContainer>
    </>
  );
}
