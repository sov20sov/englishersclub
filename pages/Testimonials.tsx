
import React from 'react';
import { Star, X, Minus, Square } from 'lucide-react';

interface ReviewCardProps {
  text: string;
  author?: string;
  isDark?: boolean;
  className?: string;
}

const ReviewWindow: React.FC<ReviewCardProps> = ({ text, author, isDark = false, className = "" }) => (
  <div className={`relative ${className} group transition-all duration-300 hover:-translate-y-2`}>
    {/* Shadow/Outline Offset effect seen in designs */}
    <div className="absolute inset-0 bg-slate-900 rounded-xl translate-x-2 translate-y-2 opacity-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
    
    <div className={`relative border-2 border-slate-900 rounded-xl overflow-hidden ${isDark ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 shadow-sm'}`}>
      {/* Window Header */}
      <div className={`flex items-center justify-between px-4 py-2 border-b-2 border-slate-900 ${isDark ? 'bg-indigo-900/50' : 'bg-[#FF8B66]'}`}>
        <div className="flex space-x-1.5 space-x-reverse">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900/20"></div>
        </div>
        <X size={16} className="text-slate-900" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <p className={`text-sm md:text-base leading-relaxed whitespace-pre-line ${isDark ? 'text-indigo-100' : 'text-slate-700'}`}>
          {text}
        </p>
        {author && (
          <div className={`mt-4 pt-4 border-t border-slate-900/10 font-bold ${isDark ? 'text-white' : 'text-indigo-600'}`}>
            — {author}
          </div>
        )}
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Hello! Tank you very much for taking our feedbacks. These four month of attending the courses were a great experience for me. It improved my listening and speaking skills and especially the phrases and vocabularies I need in daily life. I just wish that teachers give us more homework so it will encourage me to stay in touch more with the language even at home. And also it will be better if the activities are more related to the language than general knowledge",
      isDark: false,
    },
    {
      text: "من انضميت للنادي جنت بس رايد اتعلم لغة بس هسه ويه استاذ محمد خلاني احبهه و اني اتعلمه و احس الوقت يمر بسرعة اثناء المحاضرة و انتظر المحاضرة الي بعده بكل واهس و من يصحح اخطائنا ميحسسنه ان احنه حجيناهه غلط و الالعاب الي بنهاية المحاضرة دائما تكون متنوعة و ممتعة و تضيفلنه مفردات جديدة و بالنسبة للملاحظات ما عندي اي ملاحظة لان his explanation is literally a masterpiece\n\nFor my teacher Muhammad Hussein is a great teacher and his class is useful and enjoyble at the same time.",
      author: "طالب لدى الأستاذ محمد حسين",
      isDark: true,
    },
    {
      text: "طريقه كلش حلوه وممتاز ماكو اي تقصير بلتدريس ومن اجها الاستاذ مصطفى، تعلمنه هواي اشياء رغم انو هسه نتقل يدرسنه بس علمنه هواي اشياء وشكراً الكم والكادر التدريس كلكم متقصرون ويانه وبس نريد شيء تساعدون شكراً وشكر كبير الاستاذ مصطفى 🤍",
      isDark: false,
    },
    {
      text: "عاشت ايدكم كلش زين من ناحية الترتيب والنظافة والتدريس كلش ممتاز هواي تعلمت واستفاديت منكم 🤍🤍",
      isDark: false,
    },
    {
      text: "طبعا النادي كلش مرتب واحلى شي بيه هو فريق الاعلام. استاذ حسن الوزني كلش متألق ولطيف صح هو ما يدرسنه بس اللغة مالته تخبل وتصويره بعد احلى وكلش حباب. اما استاذ منتظر المصمم تصاميمه دائما مميزة ومختلفه وبيه لمسه خاصة. الله يخليهم خيمه على راسنه.",
      author: "شكر خاص لقسم الإعلام",
      isDark: true,
    },
    {
      text: "وعليكم السلام ورحمة الله وبركاته اهلا استاذي العزيزي والله عاشت ايديكم واتقدم بشكر خاص للأستاذة ضحى على اسلوبها وطريقتها الرائعة والممتعة 🤍",
      isDark: false,
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FDF5E6] py-20 overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-10 right-10 w-12 h-12 bg-[#FF8B66] rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 left-10 w-8 h-8 bg-slate-900 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#FF8B66] rounded-full opacity-40"></div>
      <div className="absolute bottom-10 left-20 w-6 h-6 border-2 border-slate-900 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 bg-slate-900 text-white rounded-full text-xs font-bold tracking-widest uppercase">
            STUDENT FEEDBACK
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 drop-shadow-sm">
            آراؤكم <span className="text-indigo-600">الحلوة</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            كلماتكم هي اللي تخلينا نستمر ونقدم الأفضل دائماً. شكراً لثقتكم بنادي انكلشرز.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-right">
          {reviews.map((review, i) => (
            <ReviewWindow 
              key={i} 
              text={review.text} 
              author={review.author} 
              isDark={review.isDark} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
           <div className="inline-flex items-center space-x-4 space-x-reverse bg-white p-6 rounded-[2rem] border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
              <div className="w-12 h-12 bg-[#FF8B66] rounded-full flex items-center justify-center text-slate-900">
                <Star fill="currentColor" size={24} />
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">تريد تكون جزء من قصص النجاح؟</p>
                <a href="https://instagram.com/englishers.club" target="_blank" className="text-indigo-600 font-extrabold hover:underline">
                  تواصل معنا على إنستجرام الآن!
                </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
