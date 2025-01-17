import React, { createContext, useState, useContext } from 'react';
import type { Language } from '../types/language';

export type TranslationKey =
  | 'address'
  | 'name'
  | 'hero_title'
  | 'hero_description'
  | 'free_consultation'
  | 'hair_transplant'
  | 'hair_transplant_desc'
  | 'dhi_technique'
  | 'dhi_desc'
  | 'prp_treatment'
  | 'prp_desc'
  | 'no_shave'
  | 'no_shave_desc'
  | 'beard_transplant'
  | 'beard_transplant_desc'
  | 'eyebrow_transplant'
  | 'eyebrow_transplant_desc'
  | 'stem_cell'
  | 'stem_cell_desc'
  | 'fue_technique'
  | 'fue_desc'
  | 'aftercare'
  | 'aftercare_desc'
  | 'nav_home'
  | 'nav_about'
  | 'nav_services'
  | 'nav_blog'
  | 'nav_contact'
  | 'testimonials_title'
  | 'email_address'
  | 'phone_number'
  | 'message'
  | 'send_message'
  | 'detailed_info'
  | 'read_more'
  | 'contact_title'
  | 'contact_description'
  | 'contact_form_title'
  | 'phone'
  | 'email'
  | 'working_hours'
  | 'working_hours_detail'
  | 'name'
  | 'email_address'
  | 'phone_number'
  | 'message'
  | 'send_message'
  | 'about_title'
  | 'about_description'
  | 'expert_team'
  | 'expert_team_desc'
  | 'modern_facilities'
  | 'modern_facilities_desc'
  | 'quality_service'
  | 'quality_service_desc'
  | 'personalized_care'
  | 'personalized_care_desc'
  | 'patient_satisfaction'
  | 'patient_satisfaction_desc'
  | 'lifetime_support'
  | 'lifetime_support_desc'
  | 'services_title'
  | 'services_description'
  | 'blog_title'
  | 'blog_description'
  | 'footer_rights'
  | 'footer_services'
  | 'footer_blog'
  | 'footer_contact'
  | 'footer_address'
  | 'footer_phone'
  | 'footer_email';

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
    beard_transplant: 'Sakal Ekimi',
    beard_transplant_desc: 'Doğal ve sık görünümlü sakal için uzman ekibimizle kişiye özel sakal ekimi operasyonları.',
    eyebrow_transplant: 'Kaş Ekimi',
    eyebrow_transplant_desc: 'Kaş şeklinizi ve yoğunluğunu iyileştirmek için hassas ve doğal görünümlü kaş ekimi.',
    stem_cell: 'Kök Hücre Tedavisi',
    stem_cell_desc: 'Saç köklerini canlandırmak ve güçlendirmek için yenilikçi kök hücre tedavisi.',
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
    contact_title: 'Bizimle İletişime Geçin',
    contact_description: 'Saç ekimi hakkında sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.',
    contact_form_title: 'İletişim Formu',
    phone: 'Telefon',
    email: 'E-posta',
    address: 'Adres',
    working_hours: 'Çalışma Saatleri',
    working_hours_detail: 'Pazartesi - Cumartesi: 09:00 - 18:00',
    name: 'Adınız',
    email_address: 'E-posta Adresiniz',
    phone_number: 'Telefon Numaranız',
    message: 'Mesajınız',
    send_message: 'MESAJ GÖNDER',
    read_more: 'Devamını Oku',
    about_title: 'Hakkımızda',
    about_description: 'LoyaltyHair olarak, saç ekimi alanında uzun yıllara dayanan deneyimimizle, müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Modern teknolojiler ve uluslararası standartlarda hizmet kalitesi sunuyoruz.',
    expert_team: 'Uzman Ekip',
    expert_team_desc: 'Alanında uzman doktorlarımız ve deneyimli ekibimizle profesyonel hizmet sunuyoruz.',
    modern_facilities: 'Modern Klinik',
    modern_facilities_desc: 'Son teknoloji cihazlarla donatılmış kliniğimizde en iyi hizmeti veriyoruz.',
    quality_service: 'Kaliteli Hizmet',
    quality_service_desc: 'Uluslararası standartlarda kaliteli hizmet ve hasta memnuniyeti odaklı yaklaşım.',
    personalized_care: 'Kişiye Özel Bakım',
    personalized_care_desc: 'Her hastamıza özel tedavi planı ve kişiselleştirilmiş bakım hizmeti sunuyoruz.',
    patient_satisfaction: 'Hasta Memnuniyeti',
    patient_satisfaction_desc: '%98\'in üzerinde hasta memnuniyeti ile güvenilir hizmet sağlıyoruz.',
    lifetime_support: 'Ömür Boyu Destek',
    lifetime_support_desc: 'Operasyon sonrası süreçte de yanınızda olmaya devam ediyoruz.',
    services_title: 'Hizmetlerimiz',
    services_description: 'LoyaltyHair olarak, saç ekimi alanında uzun yıllara dayanan deneyimimizle, müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Modern teknolojiler ve uluslararası standartlarda hizmet kalitesi sunuyoruz.',
    blog_title: 'Blog',
    blog_description: 'LoyaltyHair olarak, saç ekimi alanında uzun yıllara dayanan deneyimimizle, müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Modern teknolojiler ve uluslararası standartlarda hizmet kalitesi sunuyoruz.',
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_services: 'Dienstleistungen',
    footer_blog: 'Blog',
    footer_contact: 'Kontakt',
    footer_address: 'Adresse',
    footer_phone: 'Telefon',
    footer_email: 'E-Mail'
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
    beard_transplant: 'Beard Transplant',
    beard_transplant_desc: 'Personalized beard transplant operations with our expert team for a natural and dense appearance.',
    eyebrow_transplant: 'Eyebrow Transplant',
    eyebrow_transplant_desc: 'Precise and natural-looking eyebrow transplantation to improve your eyebrow shape and density.',
    stem_cell: 'Stem Cell Treatment',
    stem_cell_desc: 'Innovative stem cell treatment to revitalize and strengthen hair follicles.',
    fue_technique: 'FUE Technique',
    fue_desc: 'Achieve natural and permanent results with minimal invasive method.',
    aftercare: 'Aftercare',
    aftercare_desc: 'Get information about post-operation care and precautions.',
    testimonials_title: 'Our Reviews',
    testimonials_subtitle: 'We value our customers experiences and their feedback is very important to us.',
    detailed_info: 'Detailed Info',
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    contact_title: 'Contact Us',
    contact_description: 'Have questions about hair transplantation? We\'d be happy to help.',
    contact_form_title: 'Contact Form',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    working_hours: 'Working Hours',
    working_hours_detail: 'Monday - Saturday: 09:00 - 18:00',
    name: 'Your Name',
    email_address: 'Your Email',
    phone_number: 'Your Phone',
    message: 'Your Message',
    send_message: 'SEND MESSAGE',
    read_more: 'Read More',
    about_title: 'About Us',
    about_description: 'At LoyaltyHair, we aim to provide the best service to our customers with our years of experience in hair transplantation. We offer modern technologies and international service quality standards.',
    expert_team: 'Expert Team',
    expert_team_desc: 'We provide professional service with our expert doctors and experienced team.',
    modern_facilities: 'Modern Clinic',
    modern_facilities_desc: 'We provide the best service in our clinic equipped with the latest technology.',
    quality_service: 'Quality Service',
    quality_service_desc: 'International quality standards and patient satisfaction focused approach.',
    personalized_care: 'Personalized Care',
    personalized_care_desc: 'We offer personalized treatment plans and customized care services for each patient.',
    patient_satisfaction: 'Patient Satisfaction',
    patient_satisfaction_desc: 'We provide reliable service with over 98% patient satisfaction.',
    lifetime_support: 'Lifetime Support',
    lifetime_support_desc: 'We continue to be with you in the post-operation process.',
    services_title: 'Services',
    services_description: 'At LoyaltyHair, we aim to provide the best service to our customers with our years of experience in hair transplantation. We offer modern technologies and international service quality standards.',
    blog_title: 'Blog',
    blog_description: 'At LoyaltyHair, we aim to provide the best service to our customers with our years of experience in hair transplantation. We offer modern technologies and international service quality standards.',
    footer_rights: 'All rights reserved.',
    footer_services: 'Services',
    footer_blog: 'Blog',
    footer_contact: 'Contact',
    footer_address: 'Address',
    footer_phone: 'Phone',
    footer_email: 'Email'
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
    beard_transplant: 'Barttransplantation',
    beard_transplant_desc: 'Personalisierte Barttransplantationen mit unserem Expertenteam für ein natürliches und dichtes Aussehen.',
    eyebrow_transplant: 'Augenbrauentransplantation',
    eyebrow_transplant_desc: 'Präzise und natürlich aussehende Augenbrauentransplantation zur Verbesserung Ihrer Augenbrauenform und -dichte.',
    stem_cell: 'Stammzellenbehandlung',
    stem_cell_desc: 'Innovative Stammzellenbehandlung zur Revitalisierung und Stärkung der Haarfollikel.',
    fue_technique: 'FUE-Technik',
    fue_desc: 'Erzielen Sie natürliche und dauerhafte Ergebnisse mit minimal-invasiver Methode.',
    aftercare: 'Nachsorge',
    aftercare_desc: 'Informieren Sie sich über die postoperative Pflege und Vorsichtsmaßnahmen.',
    testimonials_title: 'Unsere Bewertungen',
    testimonials_subtitle: 'Wir schätzen die Erfahrungen unserer Kunden und ihr Feedback ist uns sehr wichtig.',
    detailed_info: 'Mehr Details',
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
    send_message: 'Nachricht senden',
    read_more: 'Weiterlesen',
    about_title: 'Über uns',
    about_description: 'Bei LoyaltyHair streben wir danach, unseren Kunden mit unserer langjährigen Erfahrung in der Haartransplantation den besten Service zu bieten. Wir bieten moderne Technologien und internationale Servicequalitätsstandards.',
    expert_team: 'Expertenteam',
    expert_team_desc: 'Wir bieten professionellen Service mit unseren erfahrenen Ärzten und unserem erfahrenen Team.',
    modern_facilities: 'Moderne Klinik',
    modern_facilities_desc: 'Wir bieten den besten Service in unserer mit modernster Technologie ausgestatteten Klinik.',
    quality_service: 'Qualitätsservice',
    quality_service_desc: 'Internationale Qualitätsstandards und patientenorientierter Ansatz.',
    personalized_care: 'Personalisierte Pflege',
    personalized_care_desc: 'Wir bieten personalisierte Behandlungspläne und maßgeschneiderte Pflegedienste für jeden Patienten.',
    patient_satisfaction: 'Patientenzufriedenheit',
    patient_satisfaction_desc: 'Wir bieten zuverlässigen Service mit über 98% Patientenzufriedenheit.',
    lifetime_support: 'Lebenslange Unterstützung',
    lifetime_support_desc: 'Wir bleiben auch nach der Operation an Ihrer Seite.',
    services_title: 'Unsere Dienstleistungen',
    services_description: 'Wir bieten eine breite Palette von Haartransplantationsdiensten mit modernster Technologie.',
    blog_title: 'Unser Blog',
    blog_description: 'Aktuelle Informationen und Artikel über Haartransplantation.',
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_services: 'Dienstleistungen',
    footer_blog: 'Blog',
    footer_contact: 'Kontakt',
    footer_address: 'Adresse',
    footer_phone: 'Telefon',
    footer_email: 'E-Mail'
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
    beard_transplant: 'زراعة اللحية',
    beard_transplant_desc: 'عمليات زراعة لحية مخصصة مع فريقنا من الخبراء لمظهر طبيعي وكثيف.',
    eyebrow_transplant: 'زراعة الحواجب',
    eyebrow_transplant_desc: 'زراعة حواجب دقيقة وطبيعية المظهر لتحسين شكل وكثافة حواجبك.',
    stem_cell: 'علاج الخلايا الجذعية',
    stem_cell_desc: 'علاج مبتكر بالخلايا الجذعية لتنشيط وتقوية بصيلات الشعر.',
    fue_technique: 'تقنية FUE',
    fue_desc: 'احصل على نتائج طبيعية ودائمة مع طريقة الحد الأدنى من التدخل الجراحي.',
    aftercare: 'العناية بعد العملية',
    aftercare_desc: 'احصل على معلومات حول العناية بعد العملية والاحتياطات.',
    testimonials_title: 'آراء عملائنا',
    testimonials_subtitle: 'نحن نقدر تجارب عملائنا وآراؤهم مهمة جداً بالنسبة لنا.',
    detailed_info: 'معلومات مفصلة',
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
    send_message: 'إرسال الرسالة',
    read_more: 'اقرأ أكثر',
    about_title: 'معلومات عنا',
    about_description: 'في لويالتي هير، نهدف إلى تقديم أفضل خدمة لعملائنا مع خبرتنا الطويلة في زراعة الشعر. نقدم تقنيات حديثة ومعايير جودة خدمة دولية.',
    expert_team: 'فريق من الخبراء',
    expert_team_desc: 'نقدم خدمة احترافية مع أطبائنا الخبراء وفريقنا ذوي الخبرة.',
    modern_facilities: 'عيادة حديثة',
    modern_facilities_desc: 'نقدم أفضل خدمة في عيادتنا المجهزة بأحدث التقنيات.',
    quality_service: 'خدمة عالية الجودة',
    quality_service_desc: 'معايير جودة دولية ونهج يركز على رضا المرضى.',
    personalized_care: 'رعاية شخصية',
    personalized_care_desc: 'نقدم خطط علاج مخصصة وخدمات رعاية مخصصة لكل مريض.',
    patient_satisfaction: 'رضا المرضى',
    patient_satisfaction_desc: 'نقدم خدمة موثوقة مع أكثر من 98٪ من رضا المرضى.',
    lifetime_support: 'دعم مدى الحياة',
    lifetime_support_desc: 'نستمر في أن نكون بجانبك في عملية ما بعد العملية.',
    services_title: 'خدماتنا',
    services_description: 'نقدم مجموعة واسعة من خدمات زراعة الشعر بأحدث التقنيات.',
    blog_title: 'مدونتنا',
    blog_description: 'معلومات ومقالات حديثة عن زراعة الشعر.',
    footer_rights: 'جميع الحقوق محفوظة.',
    footer_services: 'الخدمات',
    footer_blog: 'المدونة',
    footer_contact: 'اتصل بنا',
    footer_address: 'العنوان',
    footer_phone: 'الهاتف',
    footer_email: 'البريد الإلكتروني'
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