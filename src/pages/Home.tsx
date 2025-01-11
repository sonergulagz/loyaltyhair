import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/hero-bg.jpg') center/cover;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`

const ClinicText = styled.span`
  font-family: 'Dancing Script', cursive;
  font-size: 2.5rem;
  color: #e0e0e0;
  display: block;
  margin-bottom: 1.5rem;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
`

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #1a76d2;
  margin-bottom: 1rem;
`

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
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

const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
  text-align: center;
`

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a76d2;
  margin-bottom: 1rem;
  text-align: center;
`

const TestimonialsSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem;
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
`

const TestimonialContent = styled.p`
  color: #666;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '"';
    font-size: 3rem;
    color: #1a76d2;
    position: absolute;
    left: -0.5rem;
    top: -1rem;
    opacity: 0.2;
  }
`

const TestimonialAuthor = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const AuthorName = styled.span`
  font-weight: 600;
  color: #333;
`

const AuthorLocation = styled.span`
  color: #666;
  font-size: 0.9rem;
`

const SimpleTestimonialCard = styled(TestimonialCard)`
  margin-bottom: 1rem;
`

const testimonials = [
  {
    id: 1,
    content: 'LoyaltyHair ile saç ekimim harikaydı! Ekibin ilgisi ve işlerindeki ustalık sayesinde, beklediğimden çok daha iyi bir sonuç aldım. Saçlarım şimdi çok daha dolgun ve doğal görünüyor. Kesinlikle tavsiye ederim!',
    author: 'Mehmet Yılmaz'
  },
  {
    id: 2,
    content: 'Saç ekimi konusunda LoyaltyHair\'den daha iyisini düşünemiyorum. Tüm süreç boyunca mükemmel hizmet aldım ve sonuçlar tam istediğim gibi oldu. Profesyonel ve dost canlısı ekibe sahipler. Çok memnun kaldım!',
    author: 'Salih Demirel'
  },
  {
    id: 3,
    content: 'LoyaltyHair\'de yaptırdığım sakal ekimi, beklediğimden çok daha iyi sonuçlandı. Ekibin dikkatli çalışması ve hastalarına gösterdiği özen, gerçekten takdire şayan. Şimdi çok daha özgüvenli hissediyorum.',
    author: 'Hasan Kara'
  },
  {
    id: 4,
    content: 'LoyaltyHair\'deki deneyimim harika oldu! Saç ekimi sürecinde gösterdikleri profesyonellik ve ilgi, beklentilerimi aştı. Ekibin bilgisi ve destekleyici yaklaşımı sayesinde, hem süreç boyunca hem de sonrasında kendimi çok rahat hissettim.',
    author: 'Ahmet Dağ'
  },
  {
    id: 5,
    content: 'Tıraşsız saç ekimi yöntemiyle operasyon geçirdim. İşime ara vermeden, sosyal hayatım etkilenmeden süreç tamamlandı. Doğal ve sık görünen saçlarıma kavuştuğum için çok mutluyum. LoyaltyHair ekibine teşekkür ederim.',
    author: 'Serkan Yıldız'
  },
  {
    id: 6,
    content: 'DHI tekniği ile yapılan saç ekimim çok başarılı geçti. Ağrısız ve konforlu bir süreçti. Operasyon sonrası bakım sürecinde de ekip sürekli yanımdaydı. Artık aynada kendime bakmaktan keyif alıyorum.',
    author: 'Murat Özdemir'
  }
]

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
        <ServiceGrid>
          <ServiceCard>
            <ServiceIcon>💇</ServiceIcon>
            <ServiceTitle>{t('hair_transplant')}</ServiceTitle>
            <ServiceDescription>
              {t('hair_transplant_desc')}
            </ServiceDescription>
            <CTAButton to="/blog/sac-ekimi-nasil-yapilir">{t('detailed_info')}</CTAButton>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>👨‍⚕️</ServiceIcon>
            <ServiceTitle>{t('dhi_technique')}</ServiceTitle>
            <ServiceDescription>
              {t('dhi_desc')}
            </ServiceDescription>
            <CTAButton to="/blog/dhi-teknigi-nedir">{t('detailed_info')}</CTAButton>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>💉</ServiceIcon>
            <ServiceTitle>{t('prp_treatment')}</ServiceTitle>
            <ServiceDescription>
              {t('prp_desc')}
            </ServiceDescription>
            <CTAButton to="/blog/prp-tedavisi-ve-faydalari">{t('detailed_info')}</CTAButton>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>✂️</ServiceIcon>
            <ServiceTitle>{t('no_shave')}</ServiceTitle>
            <ServiceDescription>
              {t('no_shave_desc')}
            </ServiceDescription>
            <CTAButton to="/blog/tirassiz-sac-ekimi">{t('detailed_info')}</CTAButton>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🔬</ServiceIcon>
            <ServiceTitle>{t('fue_technique')}</ServiceTitle>
            <ServiceDescription>
              {t('fue_desc')}
            </ServiceDescription>
            <CTAButton to="/blog/fue-teknigi-ile-sac-ekimi">{t('detailed_info')}</CTAButton>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🏥</ServiceIcon>
            <ServiceTitle>{t('aftercare')}</ServiceTitle>
            <ServiceDescription>
              {t('aftercare_desc')}
            </ServiceDescription>
            <CTAButton to="/blog/sac-ekimi-sonrasi-bakim">{t('detailed_info')}</CTAButton>
          </ServiceCard>
        </ServiceGrid>
      </ServicesSection>

      <TestimonialsSection>
        <TestimonialsTitle>{t('testimonials_title')}</TestimonialsTitle>
        <TestimonialsSubtitle>
          {t('testimonials_subtitle')}
        </TestimonialsSubtitle>
        <TestimonialsGrid>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialContent>{testimonial.content}</TestimonialContent>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>
    </>
  )
}

export default Home 