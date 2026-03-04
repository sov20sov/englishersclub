
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Sparkles } from 'lucide-react';
import TextType from '../components/TextType';

interface TestimonialCardProps {
  text: string;
  author?: string;
  role?: 'مشترك' | 'مشتركة' | 'طفل' | 'طفلة';
  isRtl?: boolean;
  variant?: 'default' | 'highlight';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  author,
  role,
  isRtl = true,
  variant = 'default',
}) => (
  <article
    className={`group relative rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      variant === 'highlight'
        ? 'bg-brand-navy dark:bg-slate-900 border-brand-coral/30 text-white shadow-lg'
        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-brand-navy dark:text-slate-100'
    }`}
    dir={isRtl ? 'rtl' : 'ltr'}
  >
    <div className={`absolute top-6 ${isRtl ? 'right-6' : 'left-6'} opacity-20`}>
      <Quote size={40} className={variant === 'highlight' ? 'text-brand-coral' : 'text-brand-navy dark:text-brand-coral'} />
    </div>

    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} fill="currentColor" className="text-brand-coral" />
      ))}
    </div>

    <p className="text-sm md:text-base leading-relaxed mb-6 relative z-10 min-h-[4rem]">
      {text}
    </p>

    <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700 flex items-center justify-between gap-4">
      {author ? (
        <span className="font-bold text-brand-navy dark:text-white">{author}</span>
      ) : (
        <span />
      )}
      {role && (
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-coral/10 text-brand-coral shrink-0">
          {role}
        </span>
      )}
    </div>
  </article>
);

interface TestimonialItem {
  text: string;
  author?: string;
  role: 'مشترك' | 'مشتركة' | 'طفل' | 'طفلة';
  isRtl?: boolean;
  variant?: 'default' | 'highlight';
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    text: "النادي جانت تجربتي وياهم كلش حلوه، من ناحية التدريس ونظامهم، والكلاس بالأخص، الفعاليات الي بيه والألعاب ممتازة جداً.",
    role: 'مشتركة' as const,
  },
  {
    text: "الكورس جان جداً ممتاز، وافضل شي بالمحاضرات جان الفعاليات الي بنهاية المحاضرة.",
    role: 'مشترك' as const,
  },
  {
    text: "ومن جهة الاستفادة طبعاً، بالبداية جنت ما أكدر اقره، وهسه بالنسبة للقراءة صارت أفضل.",
    role: 'مشترك' as const,
  },
  {
    text: "The environment here at Englishers makes you better. That's it!",
    role: 'مشترك' as const,
    isRtl: false,
    variant: 'highlight' as const,
  },
  {
    text: "If your dream to go to the english countries come to the englishers club and have nice days and it's so good here",
    role: 'طفل' as const,
    isRtl: false,
  },
  {
    text: "The course is good, I like it. It's beneficial. I learned a lot of things in Englishers club.",
    role: 'مشترك' as const,
    isRtl: false,
  },
  {
    text: "الطريقة الي يحجون ويعاملون بيها كلش حلوة وكلش تفهم، ويخلوك انه غصباً عليك انت تحجي انكليزي وتفتهم. جنت ولا طكه بالانكليزي ولا طكه حتى بقواعد الانكليزي، والحمد لله اجيت هنا كلش استفاديت والكادر يخبل، المدرسين كلش حلوين، كلش يفهمون ولطيفين، وان شاء الله يصير احسن واحسن.",
    role: 'مشتركة' as const,
  },
  {
    text: "حلو، والمدرسين كلش حبابين يعني ويفهمون الواحد، واذا ميفهم الواحد يضلون يعيدون، والاصحاب الي ويانه لطيفين هماتين.",
    role: 'طفلة' as const,
  },
  {
    text: "طريقة التدريس بالنادي كلش زينة، والي يدرسونه محترفين وزينين.",
    role: 'مشترك' as const,
  },
];

const Testimonials: React.FC = () => {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-cream dark:bg-brand-navy py-16 md:py-24 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-navy/5 dark:bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-coral/10 text-brand-coral rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles size={14} />
            آراء الطلبة
          </div>
          <TextType
            as="h1"
            className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy dark:text-white mb-4 md:mb-6"
            text={['آراؤكم الحلوة', 'تعني لنا الكثير']}
            typingSpeed={60}
            variableSpeed={{ min: 45, max: 95 }}
            pauseDuration={2200}
            deletingSpeed={32}
            loop
            showCursor
            hideCursorWhileTyping
            cursorCharacter="|"
            startOnVisible
            textColors={['#F28C63', '#1D1D41']}
          />
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            كلماتكم هي اللي تخلينا نستمر ونقدم الأفضل دائماً. شكراً لثقتكم بنادي إنجلشرز.
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 text-right">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="opacity-0 translate-y-6 transition-all duration-600 ease-out [transition-property:opacity,transform]"
            >
              <TestimonialCard
                text={t.text}
                author={t.author}
                role={t.role}
                isRtl={t.isRtl ?? true}
                variant={t.variant ?? 'default'}
              />
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        <section className="mt-20 md:mt-28">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-black text-brand-navy dark:text-white mb-2">
              شهادات الطلبة بالفيديو
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
              استمع إلى تجارب طلابنا مباشرة
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {[
              { src: '/video/video1-for-feedback.mp4', label: 'رأي الطلاب 1' },
              { src: '/video/video2-for-feedback.mp4', label: 'رأي الطلاب 2' },
            ].map(({ src, label }) => (
              <article
                key={src}
                className="group relative bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-brand-coral/30 transition-all duration-300"
              >
                <div className="relative w-full aspect-video bg-slate-900">
                  <video
                    src={src}
                    controls
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-contain"
                    aria-label={label}
                  />
                </div>
                <div className="p-4 md:p-6 text-center border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-20 md:mt-28 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 md:p-8 bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-brand-coral/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center shrink-0">
              <Star size={28} fill="currentColor" className="text-brand-coral" />
            </div>
            <div className="text-center sm:text-right">
              <TextType
                as="p"
                className="font-bold text-brand-navy dark:text-white text-lg md:text-xl mb-2"
                text={['تريد تكون جزء من قصص النجاح؟', 'انضم واكتب قصتك معنا']}
                typingSpeed={70}
                variableSpeed={{ min: 50, max: 100 }}
                pauseDuration={2200}
                deletingSpeed={35}
                loop
                showCursor
                hideCursorWhileTyping
                cursorCharacter="|"
                startOnVisible
                textColors={['#F28C63', '#1D1D41']}
              />
              <Link
                to="/contact"
                className="text-brand-coral font-extrabold hover:underline"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
