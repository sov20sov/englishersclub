
import React from 'react';
import { Clock, Users, BookOpen, GraduationCap } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      title: "الإنجليزيه للمبتدئين (A1-A2)",
      price: "99$",
      features: [
        "القواعد الأساسية",
        "جمل وعبارات يومية",
        "بناء الثقة في التحدث"
      ],
      tag: "الأكثر طلباً",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "الإنجليزية المتوسطة (B1-B2)",
      price: "129$",
      features: [
        "طلاقة متقدمة",
        "مفردات الأعمال",
        "مناظرات ومناقشات"
      ],
      tag: "الأكثر مبيعاً",
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "إتقان المستوى المتقدم (C1)",
      price: "149$",
      features: [
        "الكتابة الأكاديمية",
        "تعبيرات دقيقة ومعقدة",
        "مهارات الخطابة العامة"
      ],
      tag: "للمحترفين",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "التحضير للآيلتس (IELTS)",
      price: "199$",
      features: [
        "اختبارات تجريبية",
        "تقنيات حل الاختبار",
        "جلسات تقييم فردية"
      ],
      tag: "تخصصي",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="py-16 md:py-20 bg-white text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h1 className="text-3xl md:text-5xl font-black text-brand-navy mb-4 md:mb-6">
            اختر مسارك التعليمي
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            نقدم دورات لجميع المستويات. سواء كنت تبدأ من الصفر تماماً أو تتطلع إلى إتقان طلاقتك والوصول لمستوى الاحتراف، لدينا مكان مخصص لك.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white border-2 border-slate-50 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:border-brand-coral/20 transition-all group flex flex-col h-full">
              <div className={`h-3 md:h-4 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-coral bg-brand-coral/10 px-3 py-1 rounded-full w-fit mb-4">
                  {course.tag}
                </span>
                <h3 className="text-lg md:text-xl font-extrabold text-brand-navy mb-4">{course.title}</h3>
                <div className="mb-6 md:mb-8" dir="ltr">
                   <span className="text-2xl md:text-3xl font-black text-brand-navy">{course.price}</span>
                   <span className="text-slate-400 text-sm ml-1">/ شهر</span>
                </div>
                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
                  {course.features.map((feat, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-coral ml-3 shrink-0"></div>
                      {feat}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-brand-navy text-white font-bold rounded-xl md:rounded-2xl hover:bg-brand-coral transition-colors active:scale-95 shadow-lg">
                  اختر الخطة
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
             { icon: <Clock size={28} />, label: "ساعات مرنة" },
             { icon: <Users size={28} />, label: "مجموعات صغيرة" },
             { icon: <BookOpen size={28} />, label: "محتوى مختار بعناية" },
             { icon: <GraduationCap size={28} />, label: "شهادات معتمدة" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-5 md:p-8 bg-brand-cream rounded-[1.5rem] md:rounded-[2.5rem] border border-brand-coral/5 group hover:border-brand-coral/20 transition-all">
              <div className="text-brand-coral mb-3 md:mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-brand-navy text-sm md:text-base">{item.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
