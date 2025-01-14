import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../types/language';

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 2rem;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`

const LanguageButton = styled.button`
  background: transparent;
  border: 1px solid #1a76d2;
  padding: 6px 12px;
  color: #1a76d2;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 14px;

  &:hover {
    background: #1a76d2;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`

const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
  overflow: hidden;
  min-width: 120px;
  z-index: 1001;
`

const LanguageOption = styled.button`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.3s ease;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  &:hover {
    background: #f5f5f5;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`

const languages: Language[] = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = (language: typeof languages[0]) => {
    setLanguage(language);
    setIsOpen(false);
  };

  return (
    <LanguageContainer>
      <LanguageButton onClick={() => setIsOpen(!isOpen)}>
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
      </LanguageButton>
      <LanguageDropdown isOpen={isOpen}>
        {languages.map((language) => (
          <LanguageOption
            key={language.code}
            onClick={() => handleLanguageChange(language)}
          >
            {language.flag} {language.name}
          </LanguageOption>
        ))}
      </LanguageDropdown>
    </LanguageContainer>
  );
};

export default LanguageSwitcher; 