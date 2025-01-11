import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import type { Language } from '../types/language'

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a76d2;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #1a76d2;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #1a76d2;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LanguageButton = styled.button`
  background: transparent;
  border: 2px solid #1a76d2;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #1a76d2;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1a76d2;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: 0;
    box-shadow: none;
  }
`;

const LanguageOption = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #f0f0f0;
  }
`;

const Navbar: React.FC = () => {
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages: Language[] = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">
          <LogoIcon>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="#1a76d2" strokeWidth="2" fill="white"/>
              <path d="M30 70C40 40 60 40 70 70" stroke="#1a76d2" strokeWidth="2" fill="none"/>
              <path d="M40 30C40 30 50 60 60 30" stroke="#1a76d2" strokeWidth="2" fill="none"/>
            </svg>
          </LogoIcon>
          LoyaltyHair
        </Logo>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>{t('nav_home')}</NavLink>
          <NavLink to="/hakkimizda" onClick={() => setIsMenuOpen(false)}>{t('nav_about')}</NavLink>
          <NavLink to="/hizmetlerimiz" onClick={() => setIsMenuOpen(false)}>{t('nav_services')}</NavLink>
          <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>{t('nav_blog')}</NavLink>
          <NavLink to="/iletisim" onClick={() => setIsMenuOpen(false)}>{t('nav_contact')}</NavLink>
          <LanguageButton onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}>
            {currentLanguage.flag} {currentLanguage.name}
          </LanguageButton>
          <LanguageDropdown isOpen={isLanguageDropdownOpen}>
            {languages.map((language) => (
              <LanguageOption
                key={language.code}
                onClick={() => {
                  setLanguage(language);
                  setIsLanguageDropdownOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                {language.flag} {language.name}
              </LanguageOption>
            ))}
          </LanguageDropdown>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar; 