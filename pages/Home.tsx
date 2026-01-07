
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Users, MessageCircle, Sparkles, Zap, ChevronDown, Heart } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [typedText, setTypedText] = useState('');
  const fullText = 'تحدث بثقة.';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-32 md:pb-40 bg-brand-cream overflow-hidden fade-in-up">
        {/* Animated Background Graphics */}
        <div className="absolute top-20 right-[-5%] w-48 h-48 md:w-64 md:h-64 bg-brand-coral opacity-10 rounded-full blur-3xl animate-pulse pulse-slow"></div>
        <div className="absolute bottom-10 left-[-5%] w-64 h-64 md:w-96 md:h-96 bg-brand-navy opacity-5 rounded-full blur-3xl float-animation"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-right space-y-6 md:space-y-8">
              <div className="inline-flex items-center space-x-2 space-x-reverse bg-brand-navy text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold animate-bounce shadow-xl">
                <Sparkles size={16} className="text-brand-coral md:w-[18px]" />
                <span>التسجيل متاح الآن للفصل الجديد!</span>
              </div>
              
            <h1
              className="
                text-4xl sm:text-5xl md:text-7xl lg:text-8xl
                font-extrabold
                text-brand-navy
                leading-[1.3] md:leading-[1.25]
                tracking-normal
                text-balance
              "
            >
              تعلم{" "}
              <span
                className="
                  text-brand-coral
                  font-black
                  bg-gradient-to-l from-brand-coral to-orange-400
                  bg-clip-text text-transparent
                "
              >
                الإنجليزية
              </span>
              <br />
              <span className="block mt-2">
                {typedText}
              </span>
            </h1>

              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl ml-auto">
                في إنجلشرز نخلق لك بيئة تجمع بين المتعة والتعلم الحقيقي. انضم لأكبر مجتمع تعليمي في كربلاء وابدأ رحلتك اليوم.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-end">
                <Link to="/contact" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-brand-coral text-white font-black rounded-2xl hover:bg-brand-navy transition-all shadow-lg flex items-center justify-center space-x-3 space-x-reverse active:scale-95 group glow">
                  <span>انضم إلينا الآن</span>
                  <ArrowLeft size={20} className="md:w-6 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <a href="#about-preview" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-brand-navy font-bold rounded-2xl hover:bg-slate-50 transition-all border-2 border-brand-navy flex items-center justify-center">
                  اكتشف من نحن
                </a>
              </div>

              <div className="flex items-center space-x-4 md:space-x-6 space-x-reverse justify-end pt-4 md:pt-8">
                <div className="flex -space-x-2 md:-space-x-3 space-x-reverse">
                </div>
              </div>
            </div>

            {/* Hero Image/Graphic */}
            <div className="relative hidden lg:block">
               <div className="absolute inset-0 bg-brand-coral/20 rounded-[3rem] rotate-3 translate-x-4 translate-y-4"></div>
               <div className="relative bg-brand-navy rounded-[3rem] p-4 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" 
                    className="rounded-[2.5rem] shadow-xl border-4 border-white"
                    alt="Hero English Learning"
                  />
                  <div className="absolute bottom-10 left-10 bg-white p-6 rounded-3xl shadow-2xl border-2 border-brand-coral animate-float">
                     <p className="text-brand-navy font-black text-2xl">أفضل بيئة تعليمية</p>
                     <p className="text-brand-coral font-bold">بشهادة الجميع ✨</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

{/* Introductory video Section */}
<section className="py-10 sm:py-14">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <div className="text-center mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
        فيديو تعريفي سريع
      </h2>
    </div>

    {/* Reels Frame */}
    <div className="mx-auto w-full max-w-[360px] sm:max-w-[420px]">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_20px_70px_-35px_rgba(0,0,0,0.35)]">
        {/* Soft glow */}
        <div className="pointer-events-none absolute -inset-24 bg-gradient-to-tr from-brand-coral/15 via-transparent to-brand-navy/10 blur-2xl" />

        {/* 9:16 area */}
        <div className="relative p-2 sm:p-3">
          <div className="relative overflow-hidden rounded-[1.6rem] sm:rounded-[1.8rem] bg-black">
            <div className="aspect-[9/16] w-full">
              <video
                src="/videos/video1.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label="فيديو ريلز تعريفي عن المعهد"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about-preview" className="text-brand-navy/30 hover:text-brand-coral transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-20 md:py-32 bg-white scroll-mt-20" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-brand-cream rounded-[3rem] -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                className="relative rounded-[2.5rem] shadow-xl border-4 border-white"
                alt="About Englishers Club"
              />
            </div>
            <div className="order-1 lg:order-2 text-right space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic">أكثر من مجرد نادي</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                يهدف نادي انكليشرز إلى جعل تعلّم اللغة الإنجليزية تجربة ممتعة، تفاعلية، وخالية من التوتر. نحن نركز على التواصل الحقيقي وبناء الثقة بالنفس أكثر من الحفظ التقليدي.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 rounded-full bg-brand-coral/10 flex items-center justify-center text-brand-coral">
                    <Heart size={20} />
                  </div>
                  <span className="font-bold text-brand-navy">بيئة تعليمية إيجابية ومحفزة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                    <Users size={20} />
                  </div>
                  <span className="font-bold text-brand-navy">مجتمع حيوي من المتعلمين الطموحين</span>
                </div>
              </div>
              <Link to="/about" className="inline-block px-8 py-4 bg-brand-navy text-white font-bold rounded-2xl hover:bg-brand-coral transition-all">
                اقرأ قصتنا كاملة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section / Why EnglishersClub */}
      <section id="why-us" className="py-16 md:py-24 bg-brand-cream scroll-mt-20" ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-4 italic">لماذا تختارنا؟</h2>
            <div className="w-24 h-1 bg-brand-coral mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 text-right">
            {[
              {
                icon: <Users className="text-brand-navy" size={40} />,
                title: "مجتمع تفاعلي",
                desc: "نحن لسنا مجرد فصل دراسي، نحن عائلة تدعم بعضها البعض في كل خطوة."
              },
              {
                icon: <MessageCircle className="text-brand-coral" size={40} />,
                title: "تركيز على التحدث",
                desc: "مارس اللغة يومياً من خلال مواقف حقيقية وجلسات محادثة مكثفة."
              },
              {
                icon: <Zap className="text-yellow-500" size={40} />,
                title: "نتائج ملموسة",
                desc: "منهجنا الحديث يضمن لك التقدم السريع والطلاقة في أقل وقت ممكن."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white hover:bg-brand-navy transition-all duration-500 border-2 border-transparent hover:border-brand-coral shadow-sm">
                <div className="bg-brand-cream w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-brand-navy group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed text-base md:text-lg transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Callout */}
      <section id="featured-courses" className="py-16 md:py-24 bg-brand-navy text-white relative overflow-hidden scroll-mt-20" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-coral"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="text-right">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-3 md:mb-4 italic">جاهز تكتشف مهاراتك؟</h2>
              <p className="text-slate-400 text-lg md:text-xl">دوراتنا مصممة خصيصاً لتناسب احتياجاتك ومستواك الحالي.</p>
            </div>
            <Link to="/courses" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-brand-coral text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl text-center">
              تصفح جميع الدورات
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { level: "Beginner", name: "مستوى المبتدئين", color: "bg-white/10" },
              { level: "Intermediate", name: "المستوى المتوسط", color: "bg-brand-coral" },
              { level: "Advanced", name: "المستوى المتقدم", color: "bg-white/10" }
            ].map((c, i) => (
              <div key={i} className={`${c.color} p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-white/10 hover:border-white transition-all group`}>
                <div className="text-5xl md:text-6xl font-black opacity-10 mb-6 md:mb-8 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                <h4 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">{c.name}</h4>
                <p className="text-base md:text-lg opacity-80 mb-6 md:mb-8">جلسات تفاعلية، ألعاب لغوية، وتركيز كامل على النطق الصحيح.</p>
                <div className="flex items-center space-x-2 space-x-reverse text-sm font-bold">
                  <CheckCircle2 className="text-white" size={18} />
                  <span>شهادة معتمدة عند الإتمام</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights Preview */}
      <section id="community-highlights" className="py-20 md:py-32 bg-white scroll-mt-20" ref={(el) => (sectionsRef.current[3] = el)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-12 italic">لمحات من فعالياتنا</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover hover:scale-105 transition-transform shadow-lg" alt="Community 1" />
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover mt-8 hover:scale-105 transition-transform shadow-lg" alt="Community 2" />
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover hover:scale-105 transition-transform shadow-lg" alt="Community 3" />
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover mt-8 hover:scale-105 transition-transform shadow-lg" alt="Community 4" />
          </div>
          <Link to="/community" className="inline-block mt-16 px-10 py-5 bg-brand-navy text-white font-black rounded-2xl hover:bg-brand-coral transition-all shadow-xl">
             استكشف مجتمعنا بالكامل
          </Link>
        </div>
      </section>

      {/* Big Social Callout */}
      <section id="join-the-club" className="py-20 md:py-32 scroll-mt-20" ref={(el) => (sectionsRef.current[4] = el)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-coral rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 md:mb-10 leading-tight">
                   صرنا عائلة، <br className="hidden sm:block" />ناقصنا بس أنت!
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                  <a href="https://instagram.com/englishers.club" target="_blank" className="bg-brand-navy px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-lg md:text-xl hover:bg-white hover:text-brand-navy transition-all shadow-2xl flex items-center justify-center space-x-3 space-x-reverse">
                    <Instagram size={24} />
                    <span>تابعنا على إنستجرام</span>
                  </a>
                  <Link to="/contact" className="bg-white text-brand-coral px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-lg md:text-xl hover:scale-105 transition-all shadow-2xl">
                    ابدأ رحلتك مجاناً
                  </Link>
                </div>
             </div>
             {/* Large Logo Watermark */}
             <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 opacity-10 rotate-12">
                <div className="w-64 h-64 md:w-96 md:h-96 border-[20px] md:border-[40px] border-white rounded-full"></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Instagram = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default Home;
