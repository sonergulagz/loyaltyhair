import React from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'

const BlogPostContainer = styled.div`
  padding: 6rem 0;
`

const BlogPostContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a76d2;
  margin-bottom: 2rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const PostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 2rem;
`

const PostTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`

const PostMeta = styled.div`
  color: #666;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  gap: 1rem;
`

const PostContent = styled.div`
  line-height: 1.8;
  color: #444;

  h2 {
    font-size: 1.8rem;
    color: #1a76d2;
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`

const blogPostsContent = {
  'sac-ekimi-nasil-yapilir': {
    title: 'Saç Ekimi Nasıl Yapılır?',
    date: '10 Ocak 2024',
    readTime: '8 dk okuma',
    image: '/images/hair-transplant.jpg',
    content: `
      <h2>Saç Ekimi Öncesi Hazırlık</h2>
      <p>Saç ekimi operasyonu öncesinde detaylı bir konsültasyon yapılır. Bu aşamada saç dökülme paterni, donör bölgenin durumu ve hasta beklentileri değerlendirilir. Operasyon günü belirlendikten sonra hastaya bazı önerilerde bulunulur:</p>
      <ul>
        <li>Operasyondan 1 hafta önce kan sulandırıcı ilaçlar bırakılmalıdır</li>
        <li>Alkol ve sigara kullanımı en az 24 saat öncesinden kesilmelidir</li>
        <li>Operasyon sabahı aç gelinmemelidir</li>
      </ul>

      <h2>Operasyon Süreci</h2>
      <p>Saç ekimi operasyonu genellikle şu aşamalardan oluşur:</p>
      <ul>
        <li>Saçlı derinin dezenfeksiyonu ve lokal anestezi uygulaması</li>
        <li>Donör bölgeden greftlerin alınması</li>
        <li>Greftlerin uygun solüsyonda bekletilmesi</li>
        <li>Alıcı bölgeye kanal açılması</li>
        <li>Greftlerin yerleştirilmesi</li>
      </ul>

      <h2>Operasyon Sonrası</h2>
      <p>Operasyon sonrası ilk 15 gün kritik önem taşır. Bu süreçte:</p>
      <ul>
        <li>İlk 3 gün yüzüstü yatılmamalıdır</li>
        <li>Ekim yapılan bölgeye direkt su teması 3 gün sonra başlamalıdır</li>
        <li>Şapka ve bere kullanımı 15 gün sonra başlamalıdır</li>
        <li>Ağır sporlar 1 ay sonra yapılmalıdır</li>
      </ul>
    `
  },
  'dhi-teknigi-nedir': {
    title: 'DHI Tekniği Nedir?',
    date: '8 Ocak 2024',
    readTime: '6 dk okuma',
    image: '/images/dhi-technique.jpg',
    content: `
      <h2>DHI Tekniği Nedir?</h2>
      <p>DHI (Direct Hair Implantation) tekniği, saç ekiminde kullanılan modern yöntemlerden biridir. Bu teknikte özel bir kalem (Choi kalemi) kullanılarak greftler direkt olarak alıcı bölgeye yerleştirilir.</p>

      <h2>DHI Tekniğinin Avantajları</h2>
      <ul>
        <li>Kanal açma işlemi gerektirmez</li>
        <li>Daha hızlı iyileşme süreci</li>
        <li>Minimal travma</li>
        <li>Daha yüksek tutunma oranı</li>
        <li>Daha doğal açılanma</li>
      </ul>

      <h2>Kimler İçin Uygundur?</h2>
      <p>DHI tekniği özellikle şu durumlarda tercih edilir:</p>
      <ul>
        <li>Sık saç ekimi isteyenler</li>
        <li>Hızlı iyileşme sürecine ihtiyaç duyanlar</li>
        <li>Ön saç çizgisi tasarımı yapılacaklar</li>
        <li>Minimal skar izi isteyenler</li>
      </ul>
    `
  },
  'fue-teknigi-ile-sac-ekimi': {
    title: 'FUE Tekniği ile Saç Ekimi',
    date: '6 Ocak 2024',
    readTime: '7 dk okuma',
    image: '/images/fue-technique.jpg',
    content: `
      <h2>FUE Tekniği Nedir?</h2>
      <p>FUE (Follicular Unit Extraction) tekniği, saç köklerinin tek tek alınıp ekilmesine dayanan bir yöntemdir. Modern mikrocerrahi aletler kullanılarak yapılır.</p>

      <h2>FUE Tekniğinin Aşamaları</h2>
      <ul>
        <li>Donör bölgenin tıraşlanması</li>
        <li>Lokal anestezi uygulaması</li>
        <li>Greftlerin tek tek çıkarılması</li>
        <li>Kanalların açılması</li>
        <li>Greftlerin yerleştirilmesi</li>
      </ul>

      <h2>FUE'nin Avantajları</h2>
      <p>FUE tekniğinin başlıca avantajları şunlardır:</p>
      <ul>
        <li>Minimal invaziv bir yöntemdir</li>
        <li>İz bırakmaz</li>
        <li>Hızlı iyileşme süreci</li>
        <li>Doğal sonuçlar</li>
      </ul>
    `
  },
  'prp-tedavisi-ve-faydalari': {
    title: 'PRP Tedavisi ve Faydaları',
    date: '4 Ocak 2024',
    readTime: '5 dk okuma',
    image: '/images/prp-treatment.jpg',
    content: `
      <h2>PRP Nedir?</h2>
      <p>PRP (Platelet Rich Plasma), kişinin kendi kanından elde edilen trombositten zengin plazmadır. Saç köklerini besleyerek yeni saç çıkışını stimüle eder.</p>

      <h2>PRP Nasıl Uygulanır?</h2>
      <ul>
        <li>Hastadan kan alınır</li>
        <li>Özel santrifüj cihazında plazma ayrıştırılır</li>
        <li>Elde edilen PRP saçlı deriye enjekte edilir</li>
      </ul>

      <h2>PRP'nin Faydaları</h2>
      <p>PRP tedavisinin saç sağlığına olan faydaları:</p>
      <ul>
        <li>Saç dökülmesini yavaşlatır</li>
        <li>Yeni saç çıkışını uyarır</li>
        <li>Mevcut saçları güçlendirir</li>
        <li>Saç kalitesini artırır</li>
      </ul>
    `
  },
  'tirassiz-sac-ekimi': {
    title: 'Tıraşsız Saç Ekimi',
    date: '2 Ocak 2024',
    readTime: '6 dk okuma',
    image: '/images/no-shave.jpg',
    content: `
      <h2>Tıraşsız Saç Ekimi Nedir?</h2>
      <p>Tıraşsız saç ekimi, donör bölgenin tıraş edilmeden yapılan saç ekimi yöntemidir. Özellikle sosyal yaşamı aksatmak istemeyen kişiler için idealdir.</p>

      <h2>Kimlere Uygundur?</h2>
      <ul>
        <li>Az miktarda saç ekimi yaptıracaklar</li>
        <li>Sosyal yaşamı aksatmak istemeyenler</li>
        <li>Saçlarının tıraş edilmesini istemeyenler</li>
      </ul>

      <h2>Avantaj ve Dezavantajları</h2>
      <p>Tıraşsız saç ekiminin avantajları ve dezavantajları:</p>
      <ul>
        <li>Sosyal yaşam kesintiye uğramaz</li>
        <li>İyileşme süreci daha konforludur</li>
        <li>Operasyon süresi daha uzundur</li>
        <li>Maliyet biraz daha yüksektir</li>
      </ul>
    `
  },
  'sac-ekimi-sonrasi-bakim': {
    title: 'Saç Ekimi Sonrası Bakım',
    date: '1 Ocak 2024',
    readTime: '7 dk okuma',
    image: '/images/post-care.jpg',
    content: `
      <h2>İlk 24 Saat</h2>
      <p>Saç ekimi sonrası ilk 24 saat en kritik dönemdir. Bu süreçte dikkat edilmesi gerekenler:</p>
      <ul>
        <li>Özel boyun yastığı kullanarak yarı oturur pozisyonda uyunmalıdır</li>
        <li>Ekim yapılan bölgeye kesinlikle dokunulmamalıdır</li>
        <li>Verilen ağrı kesiciler düzenli kullanılmalıdır</li>
        <li>Ödem için buz uygulaması yapılabilir (direkt temas olmadan)</li>
      </ul>

      <h2>İlk Hafta</h2>
      <p>İlk hafta boyunca uyulması gereken bakım kuralları:</p>
      <ul>
        <li>3. günden itibaren özel şampuan ile nazikçe yıkama yapılmalıdır</li>
        <li>Yıkama sırasında su basıncı düşük tutulmalıdır</li>
        <li>Ekim bölgesine direkt güneş ışığı alınmamalıdır</li>
        <li>Sigara ve alkol tüketiminden kaçınılmalıdır</li>
        <li>Ağır egzersiz ve spor aktiviteleri yapılmamalıdır</li>
      </ul>

      <h2>İlk Ay</h2>
      <p>İlk ay boyunca dikkat edilmesi gereken hususlar:</p>
      <ul>
        <li>15. günden sonra normal şampuan kullanımına geçilebilir</li>
        <li>Kabuklanma dökülene kadar kaşıma yapılmamalıdır</li>
        <li>Havuz ve denize girmekten kaçınılmalıdır</li>
        <li>Sauna ve hamam gibi ortamlardan uzak durulmalıdır</li>
        <li>Şapka ve bere kullanımı için doktorunuzdan onay alınmalıdır</li>
      </ul>

      <h2>Uzun Vadeli Bakım</h2>
      <p>Kalıcı sonuçlar için uzun vadede dikkat edilmesi gerekenler:</p>
      <ul>
        <li>Düzenli saç bakımı yapılmalıdır</li>
        <li>Saç derisinin nemli kalması sağlanmalıdır</li>
        <li>Sağlıklı ve dengeli beslenmeye özen gösterilmelidir</li>
        <li>Stres yönetimi yapılmalıdır</li>
        <li>Düzenli kontrollere gidilmelidir</li>
      </ul>

      <h2>Sık Görülen Durumlar</h2>
      <p>Saç ekimi sonrası karşılaşılabilecek normal durumlar:</p>
      <ul>
        <li>2-3 hafta içinde şok dökülme başlayabilir (normaldir)</li>
        <li>İlk birkaç gün ödem ve kızarıklık görülebilir</li>
        <li>3-4 ay sonra yeni saçlar çıkmaya başlar</li>
        <li>Tam sonuç 12-18 ay içinde görülür</li>
      </ul>

      <h2>Ne Zaman Doktora Başvurmalı?</h2>
      <p>Aşağıdaki durumlarda mutlaka doktorunuza başvurun:</p>
      <ul>
        <li>Şiddetli ağrı ve kanama olursa</li>
        <li>Yüksek ateş görülürse</li>
        <li>Ekim bölgesinde anormal şişlik ve kızarıklık olursa</li>
        <li>Beklenmeyen bir durum ile karşılaşırsanız</li>
      </ul>
    `
  }
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? blogPostsContent[slug as keyof typeof blogPostsContent] : null

  if (!post) {
    return <div>Yazı bulunamadı.</div>
  }

  return (
    <BlogPostContainer>
      <BlogPostContent>
        <BackButton to="/blog">← Blog'a Dön</BackButton>
        <PostImage src={post.image} alt={post.title} />
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </PostMeta>
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </BlogPostContent>
    </BlogPostContainer>
  )
}

export default BlogPost 