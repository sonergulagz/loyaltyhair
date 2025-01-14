import React from 'react';
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
`;

const LogoText = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
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
    font-size: 0.9rem;
  }
`;

const Navbar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <NavContainer>
      <NavContent>
        <Logo>
          <LogoImage src="/images/logo.png.png" alt="LoyaltyHair Logo" />
          <LogoText to="/">Loyalty Hair</LogoText>
        </Logo>
        <LanguageSwitcher />
        <NavLinks>
          <NavLink to="/">{t('nav_home')}</NavLink>
          <NavLink to="/hakkimizda">{t('nav_about')}</NavLink>
          <NavLink to="/hizmetler">{t('nav_services')}</NavLink>
          <NavLink to="/blog">{t('nav_blog')}</NavLink>
          <NavLink to="/iletisim">{t('nav_contact')}</NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar; 