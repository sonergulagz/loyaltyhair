import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../types/language';

const LanguageContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`

const LanguageButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 12px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
  overflow: hidden;
`

const LanguageOption = styled.button`
  display: block;
  width: 100%;
  padding: 10px 20px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f5f5f5;
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