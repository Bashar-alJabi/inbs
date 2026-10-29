import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks/useDocTitle';
import './redesign.css';

const serviceItems = [
  { en: 'Businessmen Services', ar: 'خدمات رجال الأعمال', descEn: 'Government transactions and professional business support', descAr: 'المعاملات الحكومية وخدمات رجال الأعمال', path: 'businessmen-services' },
  { en: 'Real Estate Services', ar: 'الخدمات العقارية', descEn: 'Property brokerage and specialised consultations', descAr: 'الوساطة العقارية والاستشارات المتخصصة', path: 'real-estate-services' },
  { en: 'Website Services', ar: 'خدمات المواقع الإلكترونية', descEn: 'Website design, visual identity and user experience', descAr: 'تصميم المواقع والهوية البصرية وتجربة المستخدم', path: 'website-services' },
  { en: 'Financial Services', ar: 'الخدمات المالية', descEn: 'Accounting, auditing and financial guidance', descAr: 'المحاسبة والتدقيق والخدمات المالية', path: 'financial-services' },
  { en: 'Consultation', ar: 'الاستشارات', descEn: 'Feasibility studies and professional consultation', descAr: 'دراسات الجدوى والاستشارات المهنية', path: 'consultation-services' },
  { en: 'Customs & Cargo', ar: 'الجمارك والشحن', descEn: 'Customs clearance and cargo-related services', descAr: 'التخليص الجمركي وخدمات الشحن', path: 'customs-services' },
];

const copy = {
 en: {
   about:'About us', services:'Our expertise', team:'Our people', contact:'Let’s talk', kicker:'DUBAI, UNITED ARAB EMIRATES · EST. 2003',
   heroA:'Where ambition', heroB:'meets possibility.', heroDesc:'Your ambitions deserve more than a service provider. Discover a trusted business partner with the expertise, connections, and commitment to move you forward.',
   explore:'Explore our services', discover:'Discover INBS', founded:'FOUNDED IN DUBAI', scroll:'SCROLL TO EXPLORE',
   aboutLabel:'01 / INTRODUCTION', aboutEyebrow:'A LEGACY OF TRUST', aboutA:'A world of business.', aboutB:'One trusted network.',
   aboutText:'Founded in Dubai in 2003, International Network Businessmen Services provides businesses and individuals with a diverse range of professional services. We believe lasting partnerships are built through trust, experience and an unwavering commitment to our clients.',
   aboutMore:'More about our story', years:'YEARS OF EXPERIENCE IN THE UAE',
   servicesLabel:'02 / WHAT WE DO', servicesA:'Many services.', servicesB:'One standard of excellence.',
   servicesDesc:'From essential government transactions to real estate, financial, travel and business services — discover support built around your next move.', allServices:'View all ten services',
   whyLabel:'03 / THE DIFFERENCE', whyA:'Progress is built', whyB:'on partnership.', whyDesc:'We make space for what matters most: your business, your goals and the next opportunity ahead.',
   reasons:[['Established experience','Serving clients from Dubai since 2003, with an understanding of the local business landscape.'],['A diverse service network','A wide range of services designed to simplify business and everyday requirements.'],['Relationships that last','A commitment to trust, accuracy and long-term client relationships.']],
   quote:'“Time is the basis of success.”', teamLabel:'04 / OUR PEOPLE', teamA:'Built on human', teamB:'connections.', teamDesc:'Behind every service is a commitment to listening, understanding and finding the right path forward.', meet:'Meet our people',
   contactLabel:'05 / GET IN TOUCH', contactA:'The next chapter', contactB:'starts with a conversation.', contactDesc:'Have a business question or need a service? Our team is here to help you take the next step.', visit:'VISIT US', connect:'CONNECT',
 },
 ar: {
   about:'من نحن', services:'خدماتنا', team:'فريقنا', contact:'تواصل معنا', kicker:'دبي، الإمارات العربية المتحدة · تأسست 2003',
   heroA:'حيث يلتقي الطموح', heroB:'بالفرص.', heroDesc:'طموحاتك تستحق أكثر من مجرد مزود خدمات. اكتشف شريكاً موثوقاً بخبرته وعلاقاته والتزامه بمساعدتك على التقدم.',
   explore:'اكتشف خدماتنا', discover:'تعرّف على INBS', founded:'تأسست في دبي', scroll:'اكتشف المزيد',
   aboutLabel:'01 / التعريف بالشركة', aboutEyebrow:'تاريخ من الثقة', aboutA:'عالم من الأعمال.', aboutB:'وشبكة واحدة تثق بها.',
   aboutText:'تأسست الشبكة العالمية لخدمات رجال الأعمال في دبي عام 2003، وتقدم مجموعة متنوعة من الخدمات المهنية للشركات والأفراد. نؤمن بأن الشراكات المستدامة تُبنى بالثقة والخبرة والالتزام تجاه عملائنا.',
   aboutMore:'اكتشف قصتنا', years:'عاماً من الخبرة في الإمارات',
   servicesLabel:'02 / خدماتنا', servicesA:'خدمات متعددة.', servicesB:'ومعيار واحد للتميز.',
   servicesDesc:'من المعاملات الحكومية إلى الخدمات العقارية والمالية والسياحية وخدمات رجال الأعمال، نقدم الدعم الذي يناسب خطواتك القادمة.', allServices:'اكتشف الخدمات العشر',
   whyLabel:'03 / ما يميزنا', whyA:'النجاح يبدأ', whyB:'بالشراكة.', whyDesc:'نركز على ما يهمك حقاً: أعمالك وأهدافك والفرصة القادمة أمامك.',
   reasons:[['خبرة راسخة','نخدم عملاءنا من دبي منذ عام 2003، مع فهم لبيئة الأعمال المحلية.'],['شبكة خدمات متنوعة','مجموعة واسعة من الخدمات لتسهيل متطلبات الأعمال والمعاملات المختلفة.'],['علاقات تدوم','التزام بالثقة والدقة وبناء علاقات طويلة الأمد مع العملاء.']],
   quote:'«الوقت هو أساس النجاح»', teamLabel:'04 / فريقنا', teamA:'نجاحنا يبدأ', teamB:'بالعلاقات الإنسانية.', teamDesc:'خلف كل خدمة التزام بالاستماع والفهم واختيار الطريق المناسب للمضي قدماً.', meet:'تعرّف على الفريق',
   contactLabel:'05 / تواصل معنا', contactA:'فصلك القادم', contactB:'يبدأ بحوار.', contactDesc:'لديك سؤال يتعلق بالأعمال أو تحتاج إلى إحدى خدماتنا؟ فريقنا مستعد لمساعدتك في خطوتك التالية.', visit:'زورنا', connect:'تواصل',
 }
};
const Home = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('ar') ? 'ar' : 'en';
  const c = copy[lang];
  useDocumentTitle('INBS | International Network Businessmen Services');
  return (
   <div className="inbs-new" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <header className="topbar">
     <Link to="/" className="brand" aria-label="INBS home"><img src="/Images/logo.png" alt="INBS official logo" /><span>INTERNATIONAL NETWORK<br/>BUSINESSMEN SERVICES</span></Link>
     <nav className="navx" aria-label="Main navigation">
      <a href="#about">{c.about}</a><a href="#services">{c.services}</a><a href="#team">{c.team}</a>
      <button type="button" className="language" onClick={() => i18n.changeLanguage(lang === 'en' ? 'ar' : 'en')} aria-label="Switch language">{lang === 'en' ? 'العربية' : 'EN'}</button>
      <a className="navcta" href="#contact">{c.contact} ↗</a>
     </nav>
    </header>
    <main>
     <section className="hero-new" aria-labelledby="homepage-title">
      <div className="hero-grid" aria-hidden="true"/><div className="glow" aria-hidden="true"/>
      <div className="skyline" aria-hidden="true"><div className="building b1"/><div className="building b2"/><div className="building b3"/></div>
      <div className="containerx hero-inner"><p className="eyebrow">{c.kicker}</p><h1 id="homepage-title">{c.heroA}<br/><em>{c.heroB}</em></h1><p className="hero-intro">{c.heroDesc}</p>
       <div className="actions"><a className="primary-btn" href="#services">{c.explore}<span>↗</span></a><a className="secondary-btn" href="#about">{c.discover} ↗</a></div>
      </div>
      <div className="containerx hero-foot"><strong>2003</strong><p>{c.founded}</p><div className="rule"/><span className="scroll">{c.scroll} ↓</span></div>
     </section>
     <section className="content" id="about"><div className="containerx"><p className="section-label">{c.aboutLabel} · {c.aboutEyebrow}</p>
      <div className="about-grid"><div><h2>{c.aboutA}<br/><em>{c.aboutB}</em></h2></div><div><p>{c.aboutText}</p><Link className="textlink" to="/about">{c.aboutMore} ↗</Link></div></div>
      <div className="experience"><strong>20<span>+</span></strong><p>{c.years}</p></div></div></section>
     <section className="services-new" id="services"><div className="containerx"><p className="section-label">{c.servicesLabel}</p>
      <div className="section-head"><h2>{c.servicesA}<br/><em>{c.servicesB}</em></h2><p>{c.servicesDesc}</p></div>
      <div className="services-table">{serviceItems.map((s,i)=><Link key={s.path} className="serviceitem" to={`/services/${s.path}`}><small>0{i+1}</small><h3>{s[lang === 'ar' ? 'ar' : 'en']}</h3><p>{s[lang === 'ar' ? 'descAr' : 'descEn']}</p><b aria-hidden="true">↗</b></Link>)}</div>
      <Link className="textlink" to="/services" style={{color:'#a1d8ff'}}>{c.allServices} ↗</Link></div></section>
     <section className="content" id="why"><div className="containerx"><p className="section-label">{c.whyLabel}</p><div className="why-grid"><div><h2>{c.whyA}<br/><em>{c.whyB}</em></h2><p>{c.whyDesc}</p></div>
     <div>{c.reasons.map((r,i)=><div className="reason" key={i}><small>0{i+1}</small><div><h3>{r[0]}</h3><p>{r[1]}</p></div></div>)}</div></div></div></section>
     <section className="statement"><p>{c.quote}</p><span>— INBS</span></section>
     <section className="content" id="team"><div className="containerx"><p className="section-label">{c.teamLabel}</p>
      <div className="team-head"><h2>{c.teamA}<br/><em>{c.teamB}</em></h2><p>{c.teamDesc}</p></div>
      <div className="team-images"><img loading="lazy" src="/Images/JalalOmar1.jpeg" alt="INBS team member"/><img loading="lazy" src="/Images/TeamMembers.jpeg" alt="INBS team"/><img loading="lazy" src="/Images/JalalOmar2.jpeg" alt="INBS team member"/></div>
      <Link className="textlink" to="/team">{c.meet} ↗</Link></div></section>
     <section className="contact-block" id="contact"><div className="containerx"><p className="section-label">{c.contactLabel}</p><h2>{c.contactA}<br/><em>{c.contactB}</em></h2><div className="contact-bottom"><p>{c.contactDesc}</p><Link className="round-cta" to="/contact" aria-label={c.contact}>↗</Link></div></div></section>
    </main>
    <footer className="footer-new"><div className="containerx"><div className="foot-grid"><div><strong>INBS<span style={{color:'#6bb3ec'}}>.</span></strong><p>International Network Businessmen Services</p></div>
    <div><h4>{c.visit}</h4><p>ParkLane Tower, Office 1720<br/>Business Bay, Dubai, UAE</p></div><div><h4>{c.connect}</h4><a href="mailto:info@inbs-uae.com">info@inbs-uae.com</a><a href="tel:+971508866555">+971 50 886 6555</a></div></div>
    <div className="foot-bottom"><span>© {new Date().getFullYear()} INBS. ALL RIGHTS RESERVED.</span><a href="#top" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}}>BACK TO TOP ↑</a></div></div></footer>
   </div>
  );
};
export default Home;
