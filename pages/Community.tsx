
import React from 'react';
import { Camera, Coffee, Music, Map } from 'lucide-react';

const Community: React.FC = () => {
  const activities = [
    {
      icon: <Coffee size={24} />,
      title: "قهوة ودردشة",
      desc: "ممارسة غير رسمية للتحدث في أرقى المقاهي المحلية لكسر حاجز الخجل."
    },
    {
      icon: <Music size={24} />,
      title: "ليالي موسيقية",
      desc: "تعلم الإنجليزية من خلال الكلمات والإيقاعات والأغاني العالمية الشهيرة."
    },
    {
      icon: <Map size={24} />,
      title: "رحلات ثقافية",
      desc: "استكشاف المتاحف والمواقع التاريخية معاً وممارسة اللغة في مواقف حقيقية."
    },
    {
      icon: <Camera size={24} />,
      title: "فيديوهات قصيرة",
      desc: "التعاون في صنع محتوى ممتع لمنصات التواصل الاجتماعي باللغة الإنجليزية."
    }
  ];

  return (
    <div className="py-16 md:py-20 bg-slate-50 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h1 className="text-3xl md:text-5xl font-black text-brand-navy mb-4 md:mb-6">
            إنه أسلوب حياة
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            التعلم يحدث في كل مكان وليس فقط داخل القاعات. ينظم نادينا فعاليات تنقل اللغة الإنجليزية خارج الفصل الدراسي إلى الحياة الحقيقية الممتعة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {activities.map((act, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex items-start gap-4 md:gap-6 border border-slate-100 hover:shadow-xl transition-all group">
              <div className="bg-brand-coral p-3 md:p-4 rounded-xl md:rounded-2xl text-white group-hover:rotate-6 transition-transform shrink-0">
                {act.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-1 md:mb-2">{act.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-navy rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            <div className="text-center lg:text-right">
               <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 italic">انضم إلى فعالياتنا الاجتماعية الشهرية</h2>
               <p className="text-slate-300 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
                 كل شهر، نستضيف حدثاً رئيسياً لجميع الأعضاء. إنه الوقت المثالي للقاء أصدقاء جدد، وممارسة مهاراتك اللغوية في جو مليء بالمرح والضحك!
               </p>
               <button className="w-full sm:w-auto px-10 py-4 md:py-5 bg-brand-coral rounded-xl md:rounded-2xl font-black hover:scale-105 transition-all active:scale-95 shadow-xl">
                 تحقق من تقويم الفعاليات
               </button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400" className="rounded-2xl md:rounded-3xl h-40 md:h-64 w-full object-cover shadow-2xl" alt="فعالية" />
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400" className="rounded-2xl md:rounded-3xl h-40 md:h-64 w-full object-cover mt-6 md:mt-12 shadow-2xl" alt="فعالية" />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-coral/10 blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Community;
