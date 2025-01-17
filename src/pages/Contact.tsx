import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../context/LanguageContext'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactContainer = styled.div`
  padding: 6rem 2rem;
  margin-top: 60px;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    margin-top: 50px;
  }
`;

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ContactDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
  }
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #1a76d2;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${InfoItem}:hover & {
    transform: scale(1.1);
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h4`
  color: #1a76d2;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const ContactForm = styled.form`
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a76d2;
    box-shadow: 0 0 0 2px rgba(26, 118, 210, 0.1);
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
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a76d2;
    box-shadow: 0 0 0 2px rgba(26, 118, 210, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1a76d2 0%, #1565c0 100%);
  color: white;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(26, 118, 210, 0.2);
  width: 100%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #1565c0 0%, #1a76d2 100%);
    box-shadow: 0 6px 20px rgba(26, 118, 210, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(26, 118, 210, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const FormContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
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
            <InfoIcon>
              <FaMapMarkerAlt />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>{t('address')}</InfoTitle>
              <InfoText>Büyükdere cad. Torun Center, Mecidiyeköy/İstanbul</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FaPhoneAlt />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>{t('phone')}</InfoTitle>
              <InfoText>
                +90 (535) 680 04 34
                <br />
                +90 (534) 232 63 76
              </InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FaEnvelope />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>{t('email')}</InfoTitle>
              <InfoText>info@loyaltyhair.com</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FaClock />
            </InfoIcon>
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

          <FormContainer>
            <SubmitButton type="submit">
              {t('send_message')}
            </SubmitButton>
          </FormContainer>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact 