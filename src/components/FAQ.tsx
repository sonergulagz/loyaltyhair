import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FAQTitle = styled.h2`
  text-align: center;
  color: #1a76d2;
  font-size: 2.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const FAQDescription = styled.p`
  text-align: center;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const FAQHeader = styled.div<{ isOpen: boolean }>`
  padding: 1.5rem;
  background: ${props => props.isOpen ? '#1a76d2' : '#fff'};
  color: ${props => props.isOpen ? '#fff' : '#333'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.isOpen ? '#1565c0' : '#f8f9fa'};
  }
`;

const Question = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  flex: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  padding: ${props => props.isOpen ? '1.5rem' : '0 1.5rem'};
  background: #fff;
  transition: all 0.3s ease;
  line-height: 1.6;
  color: #666;
`;

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: 'Saç ekimi operasyonu ne kadar sürer?',
      answer: 'Saç ekimi operasyonu, ekilecek greft sayısına bağlı olarak genellikle 6-8 saat sürer. İşlem lokal anestezi altında gerçekleştirilir ve hasta operasyon sırasında uyanıktır. DHI tekniği kullanılıyorsa süre biraz daha uzun olabilir.'
    },
    {
      question: 'Saç ekimi sonrası iyileşme süreci nasıldır?',
      answer: 'İyileşme süreci genellikle şu şekilde ilerler:\n- İlk 3 gün: Ödem ve hafif ağrı görülebilir\n- 3-7 gün: Kabuklama başlar\n- 10-14 gün: Kabuklar dökülür\n- 2-3 ay: Şok dökülme yaşanabilir (normal bir süreçtir)\n- 6. aydan itibaren: Yeni saçlar çıkmaya başlar\n- 12-18 ay: Tam sonuç görülür'
    },
    {
      question: 'Saç ekimi kalıcı mıdır?',
      answer: 'Evet, saç ekimi kalıcı bir çözümdür. Ense bölgesinden alınan saç kökleri genetik olarak dökülmeye dirençlidir ve nakledildikleri bölgede ömür boyu yaşamaya devam ederler. Ancak, var olan diğer saçların dökülmesi devam edebilir, bu nedenle bazı hastalar için ek tedaviler (PRP, ilaç tedavisi vb.) önerilebilir.'
    },
    {
      question: 'Saç ekimi sonrası ne zaman işe dönebilirim?',
      answer: 'Çoğu hasta 3-5 gün içinde işe dönebilir. Ancak, işinizin niteliğine ve sosyal görünürlük ihtiyacınıza bağlı olarak bu süre değişebilir. Tıraşsız saç ekimi yaptırdıysanız, ertesi gün bile işe dönebilirsiniz. Fiziksel aktivite gerektiren işler için 2 hafta beklemenizi öneririz.'
    },
    {
      question: 'Saç ekimi operasyonu ağrılı mıdır?',
      answer: 'Operasyon lokal anestezi altında yapıldığı için ağrı hissedilmez. Sadece anestezi yapılırken kısa süreli bir batma hissi olabilir. Operasyon sonrası ilk 2-3 gün hafif bir ağrı ve gerginlik hissi normal olup, verilen ağrı kesicilerle kontrol altına alınabilir.'
    },
    {
      question: 'Saç ekimi için en uygun yaş nedir?',
      answer: 'Saç ekimi için ideal yaş aralığı 25-50 arasıdır. Ancak, her vaka bireysel olarak değerlendirilmelidir. Önemli olan saç kaybı paterninin oturmuş olması ve donör alanın (ense bölgesi) yeterli yoğunlukta olmasıdır. 20 yaş altı genellikle önerilmez çünkü saç kaybı paterni henüz netleşmemiş olabilir.'
    },
    {
      question: 'DHI ve FUE teknikleri arasındaki fark nedir?',
      answer: 'DHI (Direct Hair Implantation) ve FUE (Follicular Unit Extraction) teknikleri arasındaki temel farklar şunlardır:\n\nFUE Tekniği:\n- Kanal açma ve greft yerleştirme iki aşamada yapılır\n- Daha ekonomiktir\n- Operasyon süresi daha kısadır\n\nDHI Tekniği:\n- Özel Choi kalemleri ile greftler direkt yerleştirilir\n- Daha sık ekim yapılabilir\n- İyileşme süresi daha kısadır\n- Kanama daha azdır'
    },
    {
      question: 'Saç ekimi sonrası ne zaman duş alabilirim?',
      answer: 'İlk yıkama operasyondan 48-72 saat sonra klinik gözetiminde yapılır. Bundan sonra size özel şampuan ve teknikle evde yıkamaya devam edebilirsiniz. Normal duş almaya ise 10-14 gün sonra başlayabilirsiniz. İlk 15 gün ekim bölgesine direkt su basıncı uygulanmamalıdır.'
    },
    {
      question: 'Saç ekimi sonrası spor ve yüzme ne zaman yapılabilir?',
      answer: 'Hafif egzersizlere 2 hafta sonra başlanabilir. Ağır sporlar, yüzme ve sauna gibi aktiviteler için 1 ay beklenmesi önerilir. Bu süre zarfında terlemeyi artıracak aktivitelerden kaçınılmalıdır çünkü enfeksiyon riskini artırabilir.'
    },
    {
      question: 'Saç ekimi için mevsim önemli midir?',
      answer: 'Saç ekimi her mevsim yapılabilir. Ancak yaz aylarında güneşe maruz kalma ve terleme fazla olacağı için, genellikle sonbahar ve kış ayları tercih edilir. Eğer yaz aylarında yaptıracaksanız, ilk 15 gün güneşe direkt maruz kalmamaya özen göstermelisiniz.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Sıkça Sorulan Sorular</FAQTitle>
      <FAQDescription>
        Saç ekimi hakkında merak ettiğiniz tüm soruların cevaplarını burada bulabilirsiniz. 
        Daha detaylı bilgi için bizimle iletişime geçebilirsiniz.
      </FAQDescription>
      <FAQList>
        {faqData.map((faq, index) => (
          <FAQItem key={index}>
            <FAQHeader 
              isOpen={openIndex === index}
              onClick={() => toggleQuestion(index)}
            >
              <Question>{faq.question}</Question>
              <IconWrapper>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </IconWrapper>
            </FAQHeader>
            <Answer isOpen={openIndex === index}>
              {faq.answer}
            </Answer>
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ; 