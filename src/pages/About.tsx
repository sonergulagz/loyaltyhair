import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  padding: 6rem 0;
`

const AboutHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/about-hero.jpg') center/cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
`

const AboutTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const Section = styled.section`
  margin-bottom: 4rem;
`

const SectionTitle = styled.h2`
  color: #1a76d2;
  margin-bottom: 2rem;
  font-size: 2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: #1a76d2;
  margin-bottom: 1rem;
`

const CardTitle = styled.h3`
  margin-bottom: 1rem;
`

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutHero>
        <div>
          <AboutTitle>Hakkımızda</AboutTitle>
          <p>Saç ekimi konusunda 15 yıllık tecrübe</p>
        </div>
      </AboutHero>

      <AboutContent>
        <Section>
          <SectionTitle>Biz Kimiz?</SectionTitle>
          <p>
            <b>LoyaltyHair</b> olarak, saç ekimi alanında uzun yıllara dayanan deneyimimizle, müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Türkiye'nin sağlık turizminde lider konumda olan şehirlerinden birinde yer alan merkezimiz, modern teknolojiler ve uluslararası standartlarda hijyen kuralları ile donatılmıştır.
          </p>
          <p>
            Ekibimiz, saç ekimi ve estetik çözümler konusunda uzmanlaşmış, alanında tecrübeli profesyonellerden oluşmaktadır. DHI (Direct Hair Implantation), FUE (Follicular Unit Extraction) ve diğer saç ekimi yöntemlerinde üstün başarı oranlarımızla, müşterilerimizin güvenini kazanmanın haklı gururunu yaşıyoruz.
          </p>
          <p>
            Her bireyin özel ve farklı ihtiyaçlara sahip olduğunu biliyoruz. Bu nedenle, kişiye özel tedavi planları oluşturarak, doğal ve estetik sonuçlar elde edilmesini sağlıyoruz. Amacımız, sadece fiziksel bir değişim sağlamak değil, aynı zamanda müşterilerimizin özgüvenini yeniden kazanmalarına yardımcı olmaktır.
          </p>
          <p>
            Başarılarımızı, müşteri memnuniyetini ön planda tutan yaklaşımımıza ve uluslararası hasta portföyümüzle sağladığımız güvene borçluyuz. Dünyanın dört bir yanından gelen müşterilerimizi en iyi şekilde ağırlamak için çok dilli destek hizmeti sunuyor ve sürecin her adımında yanlarında oluyoruz.
          </p>
          <p>
            LoyaltyHair ailesi olarak, sağlık ve estetik ihtiyaçlarınızı güvenle karşılamak için buradayız. Siz de profesyonel bir dokunuşla hayal ettiğiniz görünüme ulaşmak isterseniz, bizimle iletişime geçin.
          </p>
        </Section>

        <Section>
          <SectionTitle>Değerlerimiz</SectionTitle>
          <Grid>
            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Profesyonellik</CardTitle>
              <p>
                Alanında uzman doktorlarımız ve deneyimli ekibimizle profesyonel hizmet sunuyoruz.
              </p>
            </Card>

            <Card>
              <CardIcon>🤝</CardIcon>
              <CardTitle>Güven</CardTitle>
              <p>
                Hastalarımızla şeffaf ve güvene dayalı bir ilişki kuruyoruz.
              </p>
            </Card>

            <Card>
              <CardIcon>⭐</CardIcon>
              <CardTitle>Kalite</CardTitle>
              <p>
                En son teknoloji ve en kaliteli malzemeleri kullanarak hizmet veriyoruz.
              </p>
            </Card>
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Neden Biz?</SectionTitle>
          <Grid>
            <Card>
              <CardIcon>👨‍⚕️</CardIcon>
              <CardTitle>Uzman Kadro</CardTitle>
              <p>Deneyimli ve uzman doktor kadromuz</p>
            </Card>

            <Card>
              <CardIcon>🏥</CardIcon>
              <CardTitle>Modern Klinik</CardTitle>
              <p>Son teknoloji cihazlarla donatılmış kliniğimiz</p>
            </Card>

            <Card>
              <CardIcon>💯</CardIcon>
              <CardTitle>Başarı Oranı</CardTitle>
              <p>%98'in üzerinde hasta memnuniyeti</p>
            </Card>

            <Card>
              <CardIcon>🌍</CardIcon>
              <CardTitle>Uluslararası Standartlar</CardTitle>
              <p>Uluslararası kalite standartlarında hizmet</p>
            </Card>
          </Grid>
        </Section>
      </AboutContent>
    </AboutContainer>
  )
}

export default About 