import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const ServicesContainer = styled.div`
  padding: 6rem 2rem;
  margin-top: 60px;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    margin-top: 50px;
  }
`

const ServicesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`

const ServiceCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const ServiceContent = styled.div`
  padding: 1.5rem;
`

const ServiceTitle = styled.h3`
  color: #1a76d2;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #1a76d2;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #1557a0;
    transform: translateY(-2px);
  }
`

const PageTitle = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const PageDescription = styled.p`
  text-align: center;
  color: #666;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`

const Services: React.FC = () => {
  const { t } = useLanguage()

  const services = [
    {
      title: t('dhi_technique'),
      description: t('dhi_desc'),
      image: '/images/dhi-hair.jpg',
      link: '/iletisim'
    },
    {
      title: t('fue_technique'),
      description: t('fue_desc'),
      image: '/images/fue-hair.jpg',
      link: '/iletisim'
    },
    {
      title: t('no_shave'),
      description: t('no_shave_desc'),
      image: '/images/no-shave.jpg',
      link: '/iletisim'
    },
    {
      title: t('beard_transplant'),
      description: t('beard_transplant_desc'),
      image: '/images/beard_transplant.png',
      link: '/iletisim'
    },
    {
      title: t('eyebrow_transplant'),
      description: t('eyebrow_transplant_desc'),
      image: '/images/eyebrow_transplant.jpg',
      link: '/iletisim'
    },
    {
      title: t('prp_treatment'),
      description: t('prp_desc'),
      image: '/images/prp-treatment.jpg',
      link: '/iletisim'
    }
  ]

  return (
    <ServicesContainer>
      <PageTitle>{t('services_title')}</PageTitle>
      <PageDescription>{t('services_description')}</PageDescription>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <CTAButton to={service.link}>{t('detailed_info')}</CTAButton>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  )
}

export default Services 