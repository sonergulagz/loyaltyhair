import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BlogContainer = styled.div`
  padding: 6rem 0;
`

const BlogHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/blog-hero.jpg') center/cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
`

const BlogTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const BlogContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`

const BlogCard = styled(Link)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

    img {
      transform: scale(1.1);
    }
  }
`

const BlogImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
`

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`

const BlogCardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
`

const BlogCardTitle = styled.h3`
  color: #1a76d2;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.3;
  
  &:hover {
    color: #1557a0;
  }
`

const BlogCardDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
`

const BlogCardMeta = styled.div`
  color: #999;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`

const blogPosts = [
  {
    id: 1,
    title: 'Saç Ekimi Nasıl Yapılır?',
    description: 'Saç ekimi operasyonunun aşamaları, dikkat edilmesi gerekenler ve iyileşme süreci hakkında detaylı bilgi.',
    image: '/images/hair-transplant.jpg',
    date: '10 Ocak 2024',
    readTime: '8 dk okuma',
    slug: 'sac-ekimi-nasil-yapilir'
  },
  {
    id: 2,
    title: 'DHI Tekniği Nedir?',
    description: 'DHI (Direct Hair Implantation) tekniğinin avantajları, uygulama şekli ve geleneksel yöntemlerden farkları.',
    image: '/images/dhi-technique.jpg',
    date: '8 Ocak 2024',
    readTime: '6 dk okuma',
    slug: 'dhi-teknigi-nedir'
  },
  {
    id: 3,
    title: 'FUE Tekniği ile Saç Ekimi',
    description: 'FUE tekniğinin detaylı anlatımı, avantajları ve operasyon sonrası süreç hakkında bilmeniz gerekenler.',
    image: '/images/fue-technique.jpg',
    date: '6 Ocak 2024',
    readTime: '7 dk okuma',
    slug: 'fue-teknigi-ile-sac-ekimi'
  },
  {
    id: 4,
    title: 'PRP Tedavisi ve Faydaları',
    description: 'PRP tedavisinin saç dökülmesine etkileri, uygulama süreci ve bilimsel çalışmalarla kanıtlanmış sonuçları.',
    image: '/images/prp-treatment.jpg',
    date: '4 Ocak 2024',
    readTime: '5 dk okuma',
    slug: 'prp-tedavisi-ve-faydalari'
  },
  {
    id: 5,
    title: 'Tıraşsız Saç Ekimi',
    description: 'Tıraşsız saç ekimi teknikleri, kimlere uygulanabilir ve operasyon süreci hakkında detaylı bilgiler.',
    image: '/images/no-shave.jpg',
    date: '2 Ocak 2024',
    readTime: '6 dk okuma',
    slug: 'tirassiz-sac-ekimi'
  },
  {
    id: 6,
    title: 'Saç Ekimi Sonrası Bakım',
    description: 'Saç ekimi sonrası dikkat edilmesi gerekenler, öneriler ve en sık sorulan soruların yanıtları.',
    image: '/images/post-care.jpg',
    date: '1 Ocak 2024',
    readTime: '7 dk okuma',
    slug: 'sac-ekimi-sonrasi-bakim'
  }
]

const Blog: React.FC = () => {
  return (
    <BlogContainer>
      <BlogHero>
        <div>
          <BlogTitle>Blog</BlogTitle>
          <p>Saç ekimi hakkında merak ettiğiniz her şey</p>
        </div>
      </BlogHero>

      <BlogContent>
        <BlogGrid>
          {blogPosts.map(post => (
            <BlogCard key={post.id} to={`/blog/${post.slug}`}>
              <BlogImageWrapper>
                <BlogImage src={post.image} alt={post.title} />
              </BlogImageWrapper>
              <BlogCardContent>
                <BlogCardTitle>{post.title}</BlogCardTitle>
                <BlogCardDescription>{post.description}</BlogCardDescription>
                <BlogCardMeta>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </BlogCardMeta>
              </BlogCardContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogContent>
    </BlogContainer>
  )
}

export default Blog 