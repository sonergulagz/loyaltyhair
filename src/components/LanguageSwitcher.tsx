import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../types/language';

const LanguageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`

const LanguageButton = styled.button`
  background: rgba(26, 118, 210, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 24px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  font-size: 16px;

  &:hover {
    background: rgba(26, 118, 210, 1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
  overflow: hidden;
  min-width: 150px;
`

const LanguageOption = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 24px;
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