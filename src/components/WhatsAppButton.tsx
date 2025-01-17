import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppContainer = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    background-color: #1da856;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const WhatsAppIcon = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const WhatsAppButton = () => {
  return (
    <WhatsAppContainer 
      href="https://wa.me/905342326376"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <WhatsAppIcon>
        <FaWhatsapp />
      </WhatsAppIcon>
      <ButtonText>Bize Ulaşın</ButtonText>
    </WhatsAppContainer>
  );
};

export default WhatsAppButton; 