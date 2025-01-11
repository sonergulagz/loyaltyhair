import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../context/LanguageContext'

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(to bottom, #f5f5f5, #fff);

  @media (max-width: 768px) {
    padding: 5rem 1rem 1rem;
  }
`;

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #1a76d2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  display: block;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #1a76d2;
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #1a76d2;
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.9rem;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: #1a76d2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1565c0;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
  }
`;

const MapContainer = styled.div`
  margin-top: 3rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  iframe {
    width: 100%;
    height: 400px;
    border: 0;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;

    iframe {
      height: 300px;
    }
  }
`;

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
  };

  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactInfo>
          <ContactTitle>{t('contact_title')}</ContactTitle>
          <ContactDescription>
            {t('contact_description')}
          </ContactDescription>
          
          <InfoItem>
            <InfoIcon>📍</InfoIcon>
            <InfoContent>
              <InfoTitle>{t('address')}</InfoTitle>
              <InfoText>Büyükdere cad. Torun Center, Mecidiyeköy/İstanbul</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>📞</InfoIcon>
            <InfoContent>
              <InfoTitle>{t('phone')}</InfoTitle>
              <InfoText>+90 (535) 680 04 34</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>📧</InfoIcon>
            <InfoContent>
              <InfoTitle>{t('email')}</InfoTitle>
              <InfoText>info@loyaltyhair.com</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>⏰</InfoIcon>
            <InfoContent>
              <InfoTitle>{t('working_hours')}</InfoTitle>
              <InfoText>{t('working_hours_detail')}</InfoText>
            </InfoContent>
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>{t('contact_form_title')}</FormTitle>
          
          <FormGroup>
            <Label>{t('name')}</Label>
            <Input type="text" required />
          </FormGroup>

          <FormGroup>
            <Label>{t('email_address')}</Label>
            <Input type="email" required />
          </FormGroup>

          <FormGroup>
            <Label>{t('phone_number')}</Label>
            <Input type="tel" required />
          </FormGroup>

          <FormGroup>
            <Label>{t('message')}</Label>
            <Textarea required />
          </FormGroup>

          <SubmitButton type="submit">
            {t('send_message')}
          </SubmitButton>
        </ContactForm>
      </ContactWrapper>

      <MapContainer>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6911665361586!2d28.996448576332752!3d41.06601962639676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab71b4b2a6e8d%3A0x83e13dc7d2e3e57e!2sTorun%20Center!5e0!3m2!1str!2str!4v1704799847159!5m2!1str!2str"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapContainer>
    </ContactContainer>
  )
}

export default Contact 