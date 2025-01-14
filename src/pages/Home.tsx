import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'

interface Testimonial {
  id: number;
  content: string;
  author: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Saç ekimi deneyimim mükemmeldi. Ekip çok profesyoneldi ve sonuçlardan çok memnunum. Özellikle doktorumuzun ilgisi ve bilgilendirmesi çok iyiydi.",
    author: "Ahmet Y.",
    location: "İstanbul"
  },
  {
    id: 2,
    content: "6 ay önce yaptırdığım saç ekimi operasyonundan çok memnunum. Doğal ve sık bir görünüm elde ettim. Tüm ekibe teşekkürler!",
    author: "Mehmet K.",
    location: "Ankara"
  },
  {
    id: 3,
    content: "DHI tekniği ile yapılan saç ekimim çok başarılı geçti. İyileşme süreci hızlı ve konforluydu. Sonuçlar beklediğimden çok daha iyi.",
    author: "Burak S.",
    location: "İzmir"
  }
];

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 50px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: #1a76d2;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #1565c0;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: #f5f5f5;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`;

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: white;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TestimonialCard = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TestimonialContent = styled.p`
  font-style: italic;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  color: #333;
  margin-bottom: 0.25rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AuthorLocation = styled.p`
  color: #666;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const simpleTestimonials = [
  {
    id: 4,
    content: 'Ekibin profesyonelligi ve islemin her asamasindaki detayli bilgilendirme sayesinde cok rahat bir deneyim yasadim.',
    author: 'Ahmet K.',
    location: 'Bursa'
  },
  {
    id: 5,
    content: 'Sonuclar bekledigimden cok daha iyi. Artik kendime guvenle bakabiliyorum.',
    author: 'Murat S.',
    location: 'Antalya'
  },
  {
    id: 6,
    content: 'Fiyat/performans acisindan kesinlikle en iyi tercih. Tesekkurler LoyaltyHair!',
    author: 'Kemal D.',
    location: 'Eskisehir'
  }
]

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  return (
    <>
      <LanguageSwitcher />
      <HeroSection>
        <HeroContent>
          <HeroTitle>{t('hero_title')}</HeroTitle>
          <HeroDescription>
            {t('hero_description')}
          </HeroDescription>
          <CTAButton to="/iletisim">{t('free_consultation')}</CTAButton>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionTitle>{t('nav_services')}</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceImage style={{ backgroundImage: 'url("/images/hair-transplant.jpg")' }} />
            <ServiceContent>
              <ServiceTitle>{t('hair_transplant')}</ServiceTitle>
              <ServiceDescription>
                {t('hair_transplant_desc')}
              </ServiceDescription>
              <CTAButton to="/blog/sac-ekimi-nasil-yapilir">{t('detailed_info')}</CTAButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage style={{ backgroundImage: 'url("/images/dhi-technique.jpg")' }} />
            <ServiceContent>
              <ServiceTitle>{t('dhi_technique')}</ServiceTitle>
              <ServiceDescription>
                {t('dhi_desc')}
              </ServiceDescription>
              <CTAButton to="/blog/dhi-teknigi-nedir">{t('detailed_info')}</CTAButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage style={{ backgroundImage: 'url("/images/prp-treatment.jpg")' }} />
            <ServiceContent>
              <ServiceTitle>{t('prp_treatment')}</ServiceTitle>
              <ServiceDescription>
                {t('prp_desc')}
              </ServiceDescription>
              <CTAButton to="/blog/prp-tedavisi-ve-faydalari">{t('detailed_info')}</CTAButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage style={{ backgroundImage: 'url("/images/no-shave.jpg")' }} />
            <ServiceContent>
              <ServiceTitle>{t('no_shave')}</ServiceTitle>
              <ServiceDescription>
                {t('no_shave_desc')}
              </ServiceDescription>
              <CTAButton to="/blog/tirassiz-sac-ekimi">{t('detailed_info')}</CTAButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage style={{ backgroundImage: 'url("/images/fue-technique.jpg")' }} />
            <ServiceContent>
              <ServiceTitle>{t('fue_technique')}</ServiceTitle>
              <ServiceDescription>
                {t('fue_desc')}
              </ServiceDescription>
              <CTAButton to="/blog/fue-teknigi-ile-sac-ekimi">{t('detailed_info')}</CTAButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage style={{ backgroundImage: 'url("/images/aftercare.jpg")' }} />
            <ServiceContent>
              <ServiceTitle>{t('aftercare')}</ServiceTitle>
              <ServiceDescription>
                {t('aftercare_desc')}
              </ServiceDescription>
              <CTAButton to="/blog/sac-ekimi-sonrasi-bakim">{t('detailed_info')}</CTAButton>
            </ServiceContent>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <TestimonialsSection>
        <SectionTitle>{t('testimonials_title')}</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialContent>{testimonial.content}</TestimonialContent>
              <TestimonialAuthor>
                <AuthorName>{testimonial.author}</AuthorName>
                <AuthorLocation>{testimonial.location}</AuthorLocation>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>
    </>
  )
}

export default Home 