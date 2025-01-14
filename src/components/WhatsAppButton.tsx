import styled from 'styled-components';

const WhatsAppContainer = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
  }
`;

const WhatsAppIcon = styled.span`
  font-size: 2.2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
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
      <WhatsAppIcon>💬</WhatsAppIcon>
    </WhatsAppContainer>
  );
};

export default WhatsAppButton; 