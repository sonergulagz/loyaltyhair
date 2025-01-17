import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'
import ScrollAnimation from '../components/ScrollAnimation'
import FAQ from '../components/FAQ'

interface Testimonial {
  id: number;
  content: string;
  author: string;
  location: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

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
  margin-bottom: 1rem;
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

const BlogSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const BlogCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const BlogExcerpt = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

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

  const services: Service[] = [
    {
      title: t('dhi_technique'),
      description: t('dhi_desc'),
      image: '/images/dhi-hair.jpg',
      link: '/hizmetler'
    },
    {
      title: t('fue_technique'),
      description: t('fue_desc'),
      image: '/images/fue-hair.jpg',
      link: '/hizmetler'
    },
    {
      title: t('no_shave'),
      description: t('no_shave_desc'),
      image: '/images/no-shave.jpg',
      link: '/hizmetler'
    },
    {
      title: t('beard_transplant'),
      description: t('beard_transplant_desc'),
      image: '/images/beard_transplant.png',
      link: '/hizmetler'
    },
    {
      title: t('eyebrow_transplant'),
      description: t('eyebrow_transplant_desc'),
      image: '/images/eyebrow_transplant.jpg',
      link: '/hizmetler'
    },
    {
      title: t('prp_treatment'),
      description: t('prp_desc'),
      image: '/images/prp-treatment.jpg',
      link: '/hizmetler'
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Saç Ekimi Hakkında Bilmeniz Gerekenler',
      excerpt: 'Saç ekimi operasyonu öncesinde bilmeniz gereken önemli noktalar...',
      image: '/images/hair-transplant.jpg',
      slug: 'sac-ekimi-nasil-yapilir'
    },
    {
      id: 2,
      title: 'DHI ve FUE Teknikleri Arasındaki Farklar',
      excerpt: 'İki popüler saç ekimi tekniğinin karşılaştırmalı analizi...',
      image: '/images/dhi-technique.jpg',
      slug: 'dhi-teknigi-nedir'
    },
    {
      id: 3,
      title: 'Saç Ekimi Sonrası Bakım',
      excerpt: 'Operasyon sonrası iyileşme sürecini hızlandırmak için öneriler...',
      image: '/images/post-care.jpg',
      slug: 'sac-ekimi-sonrasi-bakim'
    }
  ];

  return (
    <>
      <LanguageSwitcher />
      <HeroSection>
        <ScrollAnimation>
          <HeroContent>
            <HeroTitle>{t('hero_title')}</HeroTitle>
            <HeroDescription>
              {t('hero_description')}
            </HeroDescription>
            <CTAButton to="/iletisim">{t('free_consultation')}</CTAButton>
          </HeroContent>
        </ScrollAnimation>
      </HeroSection>

      <ScrollAnimation className="delay-1">
        <ServicesSection>
          <SectionTitle>{t('nav_services')}</SectionTitle>
          <ServicesGrid>
            {services.map((service, index) => (
              <ScrollAnimation key={index} className={`delay-${index + 1}`}>
                <ServiceCard>
                  <ServiceImage style={{ backgroundImage: `url("${service.image}")` }} />
                  <ServiceContent>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <CTAButton to={service.link}>{t('detailed_info')}</CTAButton>
                  </ServiceContent>
                </ServiceCard>
              </ScrollAnimation>
            ))}
          </ServicesGrid>
        </ServicesSection>
      </ScrollAnimation>

      <ScrollAnimation className="delay-2">
        <BlogSection>
          <SectionTitle>{t('nav_blog')}</SectionTitle>
          <BlogGrid>
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={post.id} className={`delay-${index + 1}`}>
                <BlogCard>
                  <BlogImage style={{ backgroundImage: `url("${post.image}")` }} />
                  <BlogContent>
                    <BlogTitle>{post.title}</BlogTitle>
                    <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                    <CTAButton to={`/blog/${post.slug}`}>{t('read_more')}</CTAButton>
                  </BlogContent>
                </BlogCard>
              </ScrollAnimation>
            ))}
          </BlogGrid>
        </BlogSection>
      </ScrollAnimation>

      <ScrollAnimation className="delay-3">
        <TestimonialsSection>
          <SectionTitle>{t('testimonials_title')}</SectionTitle>
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.id} className={`delay-${index + 1}`}>
                <TestimonialCard>
                  <TestimonialContent>{testimonial.content}</TestimonialContent>
                  <TestimonialAuthor>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorLocation>{testimonial.location}</AuthorLocation>
                  </TestimonialAuthor>
                </TestimonialCard>
              </ScrollAnimation>
            ))}
          </TestimonialsGrid>
        </TestimonialsSection>
      </ScrollAnimation>

      <ScrollAnimation className="delay-4">
        <FAQ />
      </ScrollAnimation>
    </>
  )
}

export default Home 