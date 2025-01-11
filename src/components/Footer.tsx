import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const FooterContainer = styled.footer`
  background: #1a76d2;
  color: white;
  padding: 4rem 2rem;
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;

  &:hover {
    color: white;
  }
`

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`

const ContactButton = styled(Link)`
  background: white;
  color: #1a76d2;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>LoyaltyHair</FooterTitle>
          <FooterText>
            Saç ekimi konusunda uzman kadromuzla yanınızdayız.
          </FooterText>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">📱</SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</SocialLink>
          </SocialLinks>
          <ContactButton to="/iletisim">
            Bize Ulaşın
          </ContactButton>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Hizmetlerimiz</FooterTitle>
          <FooterLink to="/blog/sac-ekimi-nasil-yapilir">Saç Ekimi</FooterLink>
          <FooterLink to="/blog/dhi-teknigi-nedir">DHI Tekniği</FooterLink>
          <FooterLink to="/blog/fue-teknigi-nedir">FUE Tekniği</FooterLink>
          <FooterLink to="/blog/prp-tedavisi-ve-faydalari">PRP Tedavisi</FooterLink>
          <FooterLink to="/blog/tirassiz-sac-ekimi">Tıraşsız Saç Ekimi</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Kurumsal</FooterTitle>
          <FooterLink to="/hakkimizda">Hakkımızda</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/iletisim">İletişim</FooterLink>
          <FooterLink to="/gizlilik-politikasi">Gizlilik Politikası</FooterLink>
          <FooterLink to="/kullanim-kosullari">Kullanım Koşulları</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>İletişim</FooterTitle>
          <FooterText>
            Büyükdere cad. Torun Center,
            <br />
            Mecidiyeköy/İstanbul
          </FooterText>
          <FooterText>
            Tel: +90 (535) 680 04 34
            <br />
            E-posta: info@loyaltyhair.com
          </FooterText>
          <FooterText>
            Pazartesi - Cumartesi: 09:00 - 18:00
            <br />
            Pazar: Kapalı
          </FooterText>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer 