
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    {/* Book shape */}
    <div className="relative">
      {/* Book cover */}
      <div className="w-8 h-6 bg-brand-navy rounded-sm shadow-md"></div>
      {/* Pages */}
      <div className="absolute top-1 left-1 w-6 h-4 bg-white rounded-sm flex flex-col justify-center items-center">
        <div className="w-4 h-0.5 bg-brand-coral rounded-full mb-0.5"></div>
        <div className="w-4 h-0.5 bg-brand-coral rounded-full mb-0.5"></div>
        <div className="w-3 h-0.5 bg-brand-coral rounded-full"></div>
      </div>
      {/* Spine */}
      <div className="absolute -left-1 top-0 w-1 h-6 bg-brand-coral rounded-l-sm"></div>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: "الرئيسية" },
    { path: '/about', label: "من نحن" },
    { path: '/courses', label: "الدورات" },
    { path: '/testimonials', label: "آراء الطلاب" },
    { path: '/contact', label: "اتصل بنا" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 space-x-reverse group">
            <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold tracking-tight text-brand-navy">
                إنجلشرز
              </span>
              <span className="text-sm font-bold text-brand-coral uppercase tracking-widest">
                CLUB
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-colors hover:text-brand-coral ${
                  location.pathname === item.path ? 'text-brand-coral underline underline-offset-8 decoration-2' : 'text-brand-navy'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="bg-brand-navy text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-coral transition-all shadow-md active:scale-95">
              انضم الآن
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy hover:text-brand-coral transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 text-right">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-xl text-lg font-bold ${
                  location.pathname === item.path
                    ? 'bg-brand-cream text-brand-coral'
                    : 'text-brand-navy hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-4 bg-brand-coral text-white font-bold rounded-xl mt-4"
            >
              انضم الآن
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
