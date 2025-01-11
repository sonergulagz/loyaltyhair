import React, { createContext, useState, useContext } from 'react';
import type { Language } from '../types/language';

type TranslationKey = keyof typeof translations.tr;

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: TranslationKey) => string;
};

const translations = {
  tr: {
    hero_title: 'Saç Ekiminde Güvenilir Çözüm Ortağınız',
    hero_description: 'Modern teknoloji ve uzman kadromuzla doğal görünümlü saçlara kavuşmanızı sağlıyoruz.',
    free_consultation: 'Ücretsiz Danışmanlık',
    hair_transplant: 'Saç Ekimi',
    hair_transplant_desc: 'FUE ve DHI teknikleri ile ağrısız ve doğal görünümlü saç ekimi operasyonları gerçekleştiriyoruz.',
    dhi_technique: 'DHI Tekniği',
    dhi_desc: 'Choi kalemleri ile yapılan, kanal açılmadan uygulanan modern saç ekimi tekniği.',
    prp_treatment: 'PRP Tedavisi',
    prp_desc: 'Kendi kanınızdan elde edilen plazma ile saç köklerinizi güçlendiriyoruz.',
    no_shave: 'Tıraşsız Saç Ekimi',
    no_shave_desc: 'Sosyal hayatınızı kesintiye uğratmadan saç ekimi yaptırabilirsiniz.',
    fue_technique: 'FUE Tekniği',
    fue_desc: 'Minimal invaziv yöntemle doğal ve kalıcı sonuçlar elde edin.',
    aftercare: 'Sonrası Bakım',
    aftercare_desc: 'Operasyon sonrası bakım ve dikkat edilmesi gerekenler hakkında bilgi alın.',
    testimonials_title: 'Bizi Değerlendirenler',
    testimonials_subtitle: 'Müşterilerimizin deneyimlerini önemsiyoruz ve onların geri bildirimleri bizim için çok değerli.',
    detailed_info: 'Detaylı Bilgi',
    nav_home: 'Ana Sayfa',
    nav_about: 'Hakkımızda',
    nav_services: 'Hizmetlerimiz',
    nav_blog: 'Blog',
    nav_contact: 'İletişim',
    contact_title: 'İletişime Geçin',
    contact_description: 'Sağlığınıza dair her türlü soru ve ihtiyaç için deneyimli ekibimiz her zaman yanınızda. Geniş kapsamlı hizmet yelpazemizden faydalanmak ve özelleştirilmiş sağlık planlarımız hakkında bilgi almak için bizimle iletişime geçin.',
    contact_form_title: 'Mesaj Gönderin',
    address: 'Adres',
    phone: 'Telefon',
    email: 'E-posta',
    working_hours: 'Çalışma Saatleri',
    working_hours_detail: 'Pazartesi - Cumartesi: 09:00 - 18:00\nPazar: Kapalı',
    name: 'Ad Soyad',
    email_address: 'E-posta Adresi',
    phone_number: 'Telefon Numarası',
    message: 'Mesajınız',
    send_message: 'Mesajı Gönder'
  },
  en: {
    hero_title: 'Your Trusted Partner in Hair Transplantation',
    hero_description: 'We help you achieve natural-looking hair with modern technology and our expert team.',
    free_consultation: 'Free Consultation',
    hair_transplant: 'Hair Transplant',
    hair_transplant_desc: 'We perform painless and natural-looking hair transplant operations with FUE and DHI techniques.',
    dhi_technique: 'DHI Technique',
    dhi_desc: 'Modern hair transplant technique performed with Choi pens without opening channels.',
    prp_treatment: 'PRP Treatment',
    prp_desc: 'We strengthen your hair follicles with plasma obtained from your own blood.',
    no_shave: 'No-Shave Hair Transplant',
    no_shave_desc: 'You can have hair transplantation without interrupting your social life.',
    fue_technique: 'FUE Technique',
    fue_desc: 'Achieve natural and permanent results with minimal invasive method.',
    aftercare: 'Aftercare',
    aftercare_desc: 'Get information about post-operation care and precautions.',
    testimonials_title: 'Our Reviews',
    testimonials_subtitle: 'We value our customers experiences and their feedback is very important to us.',
    detailed_info: 'Learn More',
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    contact_title: 'Contact Us',
    contact_description: 'Our experienced team is always by your side for all your health-related questions and needs. Contact us to benefit from our comprehensive service range and learn about our customized healthcare plans.',
    contact_form_title: 'Send Message',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    working_hours: 'Working Hours',
    working_hours_detail: 'Monday - Saturday: 09:00 - 18:00\nSunday: Closed',
    name: 'Full Name',
    email_address: 'Email Address',
    phone_number: 'Phone Number',
    message: 'Your Message',
    send_message: 'Send Message'
  },
  de: {
    hero_title: 'Ihr vertrauenswürdiger Partner bei der Haartransplantation',
    hero_description: 'Wir helfen Ihnen mit moderner Technologie und unserem Expertenteam zu natürlich aussehendem Haar.',
    free_consultation: 'Kostenlose Beratung',
    hair_transplant: 'Haartransplantation',
    hair_transplant_desc: 'Wir führen schmerzlose und natürlich aussehende Haartransplantationen mit FUE- und DHI-Techniken durch.',
    dhi_technique: 'DHI-Technik',
    dhi_desc: 'Moderne Haartransplantationstechnik mit Choi-Stiften ohne Kanalöffnung.',
    prp_treatment: 'PRP-Behandlung',
    prp_desc: 'Wir stärken Ihre Haarfollikel mit Plasma aus Ihrem eigenen Blut.',
    no_shave: 'No-Shave Haartransplantation',
    no_shave_desc: 'Sie können sich einer Haartransplantation unterziehen, ohne Ihr soziales Leben zu unterbrechen.',
    fue_technique: 'FUE-Technik',
    fue_desc: 'Erzielen Sie natürliche und dauerhafte Ergebnisse mit minimal-invasiver Methode.',
    aftercare: 'Nachsorge',
    aftercare_desc: 'Informieren Sie sich über die postoperative Pflege und Vorsichtsmaßnahmen.',
    testimonials_title: 'Unsere Bewertungen',
    testimonials_subtitle: 'Wir schätzen die Erfahrungen unserer Kunden und ihr Feedback ist uns sehr wichtig.',
    detailed_info: 'Mehr Erfahren',
    nav_home: 'Startseite',
    nav_about: 'Über uns',
    nav_services: 'Leistungen',
    nav_blog: 'Blog',
    nav_contact: 'Kontakt',
    contact_title: 'Kontaktieren Sie uns',
    contact_description: 'Unser erfahrenes Team steht Ihnen bei allen gesundheitlichen Fragen und Bedürfnissen zur Seite. Kontaktieren Sie uns, um von unserem umfassenden Serviceangebot zu profitieren und mehr über unsere maßgeschneiderten Gesundheitspläne zu erfahren.',
    contact_form_title: 'Nachricht senden',
    address: 'Adresse',
    phone: 'Telefon',
    email: 'E-Mail',
    working_hours: 'Öffnungszeiten',
    working_hours_detail: 'Montag - Samstag: 09:00 - 18:00\nSonntag: Geschlossen',
    name: 'Vollständiger Name',
    email_address: 'E-Mail-Adresse',
    phone_number: 'Telefonnummer',
    message: 'Ihre Nachricht',
    send_message: 'Nachricht senden'
  },
  ar: {
    hero_title: 'شريكك الموثوق في زراعة الشعر',
    hero_description: 'نساعدك في الحصول على شعر طبيعي المظهر بالتكنولوجيا الحديثة وفريقنا من الخبراء.',
    free_consultation: 'استشارة مجانية',
    hair_transplant: 'زراعة الشعر',
    hair_transplant_desc: 'نقوم بإجراء عمليات زراعة شعر خالية من الألم وطبيعية المظهر بتقنيات FUE و DHI.',
    dhi_technique: 'تقنية DHI',
    dhi_desc: 'تقنية حديثة لزراعة الشعر باستخدام أقلام Choi بدون فتح قنوات.',
    prp_treatment: 'علاج البلازما الغنية بالصفائح الدموية',
    prp_desc: 'نقوي بصيلات الشعر لديك بالبلازما المستخرجة من دمك.',
    no_shave: 'زراعة الشعر بدون حلاقة',
    no_shave_desc: 'يمكنك إجراء زراعة الشعر دون مقاطعة حياتك الاجتماعية.',
    fue_technique: 'تقنية FUE',
    fue_desc: 'احصل على نتائج طبيعية ودائمة مع طريقة الحد الأدنى من التدخل الجراحي.',
    aftercare: 'العناية بعد العملية',
    aftercare_desc: 'احصل على معلومات حول العناية بعد العملية والاحتياطات.',
    testimonials_title: 'آراء عملائنا',
    testimonials_subtitle: 'نحن نقدر تجارب عملائنا وآراؤهم مهمة جداً بالنسبة لنا.',
    detailed_info: 'اعرف المزيد',
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_services: 'خدماتنا',
    nav_blog: 'المدونة',
    nav_contact: 'اتصل بنا',
    contact_title: 'اتصل بنا',
    contact_description: 'فريقنا المتمرس دائماً بجانبك لجميع أسئلتك واحتياجاتك الصحية. تواصل معنا للاستفادة من مجموعة خدماتنا الشاملة والتعرف على خطط الرعاية الصحية المخصصة.',
    contact_form_title: 'إرسال رسالة',
    address: 'العنوان',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    working_hours: 'ساعات العمل',
    working_hours_detail: 'الاثنين - السبت: ٩:٠٠ - ١٨:٠٠\nالأحد: مغلق',
    name: 'الاسم الكامل',
    email_address: 'البريد الإلكتروني',
    phone_number: 'رقم الهاتف',
    message: 'رسالتك',
    send_message: 'إرسال الرسالة'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'tr',
    name: 'Türkçe',
    flag: '🇹🇷'
  });

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    document.documentElement.lang = language.code;
  };

  const t = (key: TranslationKey): string => {
    return translations[currentLanguage.code]?.[key] || translations.tr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 