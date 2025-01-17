import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../context/LanguageContext'
import { FaUserMd, FaHospital, FaAward, FaHandHoldingMedical, FaUserCheck, FaHeartbeat } from 'react-icons/fa'

const AboutContainer = styled.div`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`

const AboutDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #1a76d2;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #bbdefb 0%, #90caf9 100%);
    transform: rotate(360deg);
  }
`

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
  text-align: center;
`

const About: React.FC = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: <FaUserMd />,
      title: t('expert_team'),
      description: t('expert_team_desc')
    },
    {
      icon: <FaHospital />,
      title: t('modern_facilities'),
      description: t('modern_facilities_desc')
    },
    {
      icon: <FaAward />,
      title: t('quality_service'),
      description: t('quality_service_desc')
    },
    {
      icon: <FaHandHoldingMedical />,
      title: t('personalized_care'),
      description: t('personalized_care_desc')
    },
    {
      icon: <FaUserCheck />,
      title: t('patient_satisfaction'),
      description: t('patient_satisfaction_desc')
    },
    {
      icon: <FaHeartbeat />,
      title: t('lifetime_support'),
      description: t('lifetime_support_desc')
    }
  ]

  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>{t('about_title')}</AboutTitle>
        <AboutDescription>{t('about_description')}</AboutDescription>
      </AboutHeader>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper>
              {feature.icon}
            </IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </AboutContainer>
  )
}

export default About 