
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-cream">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-navy to-brand-navy/90"></div>
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-[-10%] w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              تواصل معنا
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك في رحلتك التعليمية. تواصل معنا وابدأ تعلم الإنجليزية اليوم!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Mail className="text-brand-coral" size={32} />,
                title: "البريد الإلكتروني",
                detail: "hello@englishers.club",
                bgColor: "bg-white",
                shadowColor: "shadow-brand-coral/10"
              },
              {
                icon: <Phone className="text-brand-navy" size={32} />,
                title: "الهاتف",
                detail: "0775 000 7476",
                bgColor: "bg-white",
                shadowColor: "shadow-brand-navy/10"
              },
              {
                icon: <MessageCircle className="text-green-500" size={32} />,
                title: "واتساب",
                detail: "0775 000 7476",
                bgColor: "bg-white",
                shadowColor: "shadow-green-500/10"
              },
              {
                icon: <MapPin className="text-brand-coral" size={32} />,
                title: "الموقع",
                detail: "كربلاء، تقاطع جسر الضريبة، ركن حي النقيب، بناية نادي إنجلشرز",
                bgColor: "bg-white",
                shadowColor: "shadow-brand-coral/10"
              }
            ].map((item, i) => (
              <div key={i} className={`${item.bgColor} p-8 rounded-3xl shadow-xl ${item.shadowColor} hover:shadow-2xl transition-all duration-300 group border border-slate-100`}>
                <div className="bg-brand-cream w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-brand-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Business Hours & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Business Hours */}
            <div className="bg-brand-navy p-10 rounded-[3rem] text-white shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="bg-brand-coral p-3 rounded-2xl mr-4">
                  <Clock size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black">ساعات العمل</h3>
              </div>
              <div className="space-y-4">
                {[
                  { days: "الأحد - الخميس", hours: "10:00 ص - 8:00 م" },
                  { days: "الجمعة", hours: "مغلق" },
                  { days: "السبت", hours: "12:00 م - 6:00 م" }
                ].map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0">
                    <span className="font-bold text-lg">{schedule.days}</span>
                    <span className="text-brand-cream font-medium" dir="ltr">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
              <div className="flex items-center mb-8">
                <div className="bg-brand-coral p-3 rounded-2xl mr-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-brand-navy">موقعنا على الخريطة</h3>
              </div>
              <div className="bg-slate-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-brand-coral mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">كربلاء، العراق</p>
                  <p className="text-sm text-slate-500 mt-2">تقاطع جسر الضريبة، ركن حي النقيب</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-brand-navy mb-4">أرسل رسالة</h2>
              <p className="text-slate-600 text-lg">نحن نتطلع للرد عليك في أقرب وقت ممكن</p>
            </div>

            {submitted ? (
              <div className="text-center py-16 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black text-brand-navy mb-4">
                  تم إرسال رسالتك بنجاح!
                </h3>
                <p className="text-slate-600 text-lg">
                  شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-black text-brand-navy mb-3">الاسم الكامل *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-brand-cream border-2 border-transparent rounded-2xl px-6 py-4 focus:border-brand-coral focus:ring-0 transition-all outline-none text-right placeholder:text-slate-400"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-brand-navy mb-3">رقم الهاتف *</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-brand-cream border-2 border-transparent rounded-2xl px-6 py-4 focus:border-brand-coral focus:ring-0 transition-all outline-none text-right placeholder:text-slate-400"
                      placeholder="0775..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-brand-navy mb-3">المستوى المطلوب</label>
                  <select className="w-full bg-brand-cream border-2 border-transparent rounded-2xl px-6 py-4 focus:border-brand-coral focus:ring-0 transition-all outline-none text-right">
                    <option>اختر المستوى</option>
                    <option>مبتدئ</option>
                    <option>متوسط</option>
                    <option>متقدم</option>
                    <option>تحضير امتحانات دولية</option>
                    <option>دورات متخصصة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-brand-navy mb-3">رسالتك</label>
                  <textarea
                    rows={6}
                    className="w-full bg-brand-cream border-2 border-transparent rounded-2xl px-6 py-4 focus:border-brand-coral focus:ring-0 transition-all outline-none text-right placeholder:text-slate-400 resize-none"
                    placeholder="أخبرنا عن أهدافك التعليمية أو أي أسئلة لديك..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-brand-coral to-orange-400 text-white font-black text-lg rounded-2xl hover:shadow-xl hover:shadow-brand-coral/30 transition-all duration-300 flex items-center justify-center space-x-3 space-x-reverse group"
                >
                  <span>إرسال الرسالة</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
