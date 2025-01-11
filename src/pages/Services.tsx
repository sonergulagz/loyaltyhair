import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ServicesContainer = styled.div`
  padding: 6rem 0;
`

const ServicesHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/services-hero.jpg') center/cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
`

const ServicesTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const ServiceCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &:nth-child(even) {
    direction: rtl;
    
    .content {
      direction: ltr;
    }
  }
`

const ServiceImage = styled.div`
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`

const ServiceContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ServiceTitle = styled.h2`
  color: #1a76d2;
  margin-bottom: 1rem;
  font-size: 2rem;
`

const ServiceDescription = styled.p`
  margin-bottom: 2rem;
  color: #666;
  line-height: 1.8;
`

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;

  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: "✓";
      color: #1a76d2;
      font-weight: bold;
    }
  }
`

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #1a76d2;
  color: white;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #1557a0;
  }
`

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <ServicesHero>
        <div>
          <ServicesTitle>Hizmetlerimiz</ServicesTitle>
          <p>Size özel saç ekimi çözümleri</p>
        </div>
      </ServicesHero>

      <ServicesContent>
        <ServiceCard>
          <ServiceImage style={{ backgroundImage: 'url("/images/fue-hair.jpg")' }} />
          <ServiceContent className="content">
            <ServiceTitle>FUE Saç Ekimi</ServiceTitle>
            <ServiceDescription>
              FUE (Follicular Unit Extraction) tekniği ile doğal ve kalıcı sonuçlar elde edin.
              Minimal invaziv bu yöntem ile hızlı iyileşme süreci ve maksimum başarı sağlıyoruz.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Lokal anestezi ile ağrısız işlem</li>
              <li>Doğal görünümlü sonuçlar</li>
              <li>Hızlı iyileşme süreci</li>
              <li>Kalıcı çözüm</li>
            </ServiceFeatures>
            <CTAButton to="/iletisim">Randevu Al</CTAButton>
          </ServiceContent>
        </ServiceCard>

        <ServiceCard>
          <ServiceImage style={{ backgroundImage: 'url("/images/dhi-hair.jpg")' }} />
          <ServiceContent className="content">
            <ServiceTitle>DHI Saç Ekimi</ServiceTitle>
            <ServiceDescription>
              DHI (Direct Hair Implantation) tekniği ile kanal açma işlemi olmadan, özel Choi kalemleri
              ile direkt ekim yaparak daha hızlı ve konforlu bir deneyim sunuyoruz.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Kanal açma işlemi yok</li>
              <li>Daha hızlı iyileşme</li>
              <li>Minimum travma</li>
              <li>Maksimum yoğunluk</li>
            </ServiceFeatures>
            <CTAButton to="/iletisim">Randevu Al</CTAButton>
          </ServiceContent>
        </ServiceCard>

        <ServiceCard>
          <ServiceImage style={{ backgroundImage: 'url("/images/prp-treatment.jpg")' }} />
          <ServiceContent className="content">
            <ServiceTitle>PRP Tedavisi</ServiceTitle>
            <ServiceDescription>
              Kendi kanınızdan elde edilen trombositten zengin plazma ile saç köklerinizi
              güçlendiriyor ve yeni saç çıkışını stimüle ediyoruz.
            </ServiceDescription>
            <ServiceFeatures>
              <li>%100 doğal yöntem</li>
              <li>Saç dökülmesini durdurma</li>
              <li>Yeni saç çıkışını uyarma</li>
              <li>Mevcut saçları güçlendirme</li>
            </ServiceFeatures>
            <CTAButton to="/iletisim">Randevu Al</CTAButton>
          </ServiceContent>
        </ServiceCard>
      </ServicesContent>
    </ServicesContainer>
  )
}

export default Services 