import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const NavContainer = styled.nav`
  background-color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const LogoText = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  padding: 0.5rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    gap: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid #eee;
    width: 100%;
    text-align: center;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
      <NavContainer>
        <NavContent>
          <Logo>
            <LogoImage src="/images/logo.png.png" alt="LoyaltyHair Logo" />
            <LogoText to="/">Loyalty Hair</LogoText>
          </Logo>
          <RightSection>
            <LanguageSwitcher />
            <MenuButton onClick={toggleMenu}>
              {isMenuOpen ? '✕' : '☰'}
            </MenuButton>
          </RightSection>
          <NavLinks isOpen={isMenuOpen}>
            <NavLink to="/" onClick={closeMenu}>{t('nav_home')}</NavLink>
            <NavLink to="/hakkimizda" onClick={closeMenu}>{t('nav_about')}</NavLink>
            <NavLink to="/hizmetler" onClick={closeMenu}>{t('nav_services')}</NavLink>
            <NavLink to="/blog" onClick={closeMenu}>{t('nav_blog')}</NavLink>
            <NavLink to="/iletisim" onClick={closeMenu}>{t('nav_contact')}</NavLink>
          </NavLinks>
        </NavContent>
      </NavContainer>
    </>
  );
};

export default Navbar; 