import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../context/LanguageContext'

const ContactContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: #1a76d2;
  margin-bottom: 1.5rem;
`

const ContactDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: #e3f2fd;
  }
`

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
`

const InfoContent = styled.div`
  flex: 1;
`

const InfoLabel = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.25rem;
`

const InfoText = styled.p`
  color: #666;
  font-size: 1rem;
`

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #1a76d2;
  margin-bottom: 1.5rem;
`

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a76d2;
    box-shadow: 0 0 0 3px rgba(26, 118, 210, 0.1);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a76d2;
    box-shadow: 0 0 0 3px rgba(26, 118, 210, 0.1);
  }
`

const SubmitButton = styled.button`
  background: #1a76d2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: #1557a0;
    transform: translateY(-2px);
  }
`

const MapContainer = styled.div`
  margin-top: 4rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: 400px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`

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
              <InfoLabel>{t('address')}</InfoLabel>
              <InfoText>Büyükdere cad. Torun Center, Mecidiyeköy/İstanbul</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>📞</InfoIcon>
            <InfoContent>
              <InfoLabel>{t('phone')}</InfoLabel>
              <InfoText>+90 (535) 680 04 34</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>📧</InfoIcon>
            <InfoContent>
              <InfoLabel>{t('email')}</InfoLabel>
              <InfoText>info@loyaltyhair.com</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>⏰</InfoIcon>
            <InfoContent>
              <InfoLabel>{t('working_hours')}</InfoLabel>
              <InfoText>{t('working_hours_detail')}</InfoText>
            </InfoContent>
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>{t('contact_form_title')}</FormTitle>
          
          <InputGroup>
            <Label>{t('name')}</Label>
            <Input type="text" required />
          </InputGroup>

          <InputGroup>
            <Label>{t('email_address')}</Label>
            <Input type="email" required />
          </InputGroup>

          <InputGroup>
            <Label>{t('phone_number')}</Label>
            <Input type="tel" required />
          </InputGroup>

          <InputGroup>
            <Label>{t('message')}</Label>
            <TextArea required />
          </InputGroup>

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