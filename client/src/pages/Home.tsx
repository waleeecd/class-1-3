/**
 * ============================================
 * صفحة فصل 1/3 الرئيسية
 * Design: Cyberpunk Academic - أكاديمي مستقبلي
 * خلفية داكنة عميقة + نيون أزرق/أخضر + glassmorphism
 * ============================================
 */
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, Trophy, Dumbbell, Info, ChevronDown, X, Star, Medal, Zap } from "lucide-react";
import {
  IMAGES,
  DEFAULT_AVATAR,
  teachers,
  students,
  topStudents,
  athletes,
  topAthletes,
  aboutText,
} from "@/lib/data";

/* ───────── شاشة الترحيب ───────── */
function WelcomeScreen({ onDismiss }: { onDismiss: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer select-none"
      onClick={onDismiss}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* خلفية مغبشة */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMAGES.heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.3)",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* المحتوى */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.img
          src={IMAGES.logo}
          alt="شعار فصل 1/3"
          className="w-32 h-32 sm:w-44 sm:h-44 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]"
          animate={{ 
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 20px rgba(0,212,255,0.4))",
              "drop-shadow(0 0 40px rgba(0,212,255,0.7))",
              "drop-shadow(0 0 20px rgba(0,212,255,0.4))",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <h1
          className="text-4xl sm:text-6xl font-black mb-4 neon-text"
          style={{ fontFamily: "var(--font-cairo)" }}
        >
          مرحباً بك في موقع
        </h1>
        <h2
          className="text-5xl sm:text-7xl font-black mb-8"
          style={{
            fontFamily: "var(--font-cairo)",
            background: "linear-gradient(135deg, #00d4ff, #00ff88)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          فصل 1/3
        </h2>
        <motion.div
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-lg text-cyan-300/80">المس الشاشة للدخول</p>
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </motion.div>

      {/* جزيئات متحركة */}
      <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: i % 2 === 0 ? "#00d4ff" : "#00ff88",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ───────── شريط التنقل ───────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "البداية", href: "#home" },
    { label: "المعلمين", href: "#teachers" },
    { label: "الطلاب", href: "#students" },
    { label: "الرياضيين", href: "#athletes" },
    { label: "حولنا", href: "#about" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a1a]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,212,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-8">
        {/* الشعار */}
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-3">
          <img src={IMAGES.logo} alt="شعار" className="w-10 h-10 sm:w-12 sm:h-12" />
          <span
            className="text-xl sm:text-2xl font-bold neon-text hidden sm:block"
            style={{ fontFamily: "var(--font-cairo)" }}
          >
            فصل 1/3
          </span>
        </button>

        {/* قوائم سطح المكتب */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
              style={{ fontFamily: "var(--font-cairo)" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* زر القائمة للجوال */}
        <button
          className="md:hidden text-cyan-400 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* قائمة الجوال */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-t border-cyan-500/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-3 text-right text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                  style={{ fontFamily: "var(--font-cairo)" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ───────── مكون بطاقة شخص ───────── */
function PersonCard({
  name,
  subtitle,
  description,
  image,
  icon,
  accentColor = "cyan",
}: {
  name: string;
  subtitle: string;
  description?: string;
  image: string;
  icon?: React.ReactNode;
  accentColor?: "cyan" | "green" | "gold";
}) {
  const colors = {
    cyan: { border: "border-cyan-500/20", hoverBorder: "hover:border-cyan-400/50", glow: "rgba(0,212,255,0.15)", text: "text-cyan-400" },
    green: { border: "border-emerald-500/20", hoverBorder: "hover:border-emerald-400/50", glow: "rgba(0,255,136,0.15)", text: "text-emerald-400" },
    gold: { border: "border-amber-500/20", hoverBorder: "hover:border-amber-400/50", glow: "rgba(255,200,0,0.15)", text: "text-amber-400" },
  };
  const c = colors[accentColor];

  const imgSrc = (!image || image === "REPLACE_WITH_URL") ? DEFAULT_AVATAR : image;

  return (
    <motion.div
      className={`glass-card rounded-2xl p-5 sm:p-6 ${c.border} ${c.hoverBorder} transition-all duration-300 group`}
      whileHover={{ y: -5, boxShadow: `0 10px 40px ${c.glow}` }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2"
            style={{ borderColor: accentColor === "cyan" ? "#00d4ff40" : accentColor === "green" ? "#00ff8840" : "#ffc80040" }}
          >
            <img
              src={imgSrc}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          {icon && (
            <div
              className={`absolute -bottom-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center ${
                accentColor === "gold" ? "bg-amber-500" : accentColor === "green" ? "bg-emerald-500" : "bg-cyan-500"
              }`}
            >
              {icon}
            </div>
          )}
        </div>
        <h3
          className="text-lg sm:text-xl font-bold text-white mb-1"
          style={{ fontFamily: "var(--font-cairo)" }}
        >
          {name}
        </h3>
        <p className={`text-sm font-medium ${c.text} mb-2`}>{subtitle}</p>
        {description && (
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

/* ───────── عنوان القسم ───────── */
function SectionTitle({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-10 sm:mb-14"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
        {icon}
      </div>
      <div>
        <h2 className="section-title">{title}</h2>
        <div className="h-1 w-20 bg-gradient-to-l from-cyan-500 to-emerald-500 rounded-full mt-2" />
      </div>
    </motion.div>
  );
}

/* ───────── قسم البداية (Hero) ───────── */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* خلفية */}
      <div className="absolute inset-0">
        <img src={IMAGES.heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/70 via-[#0a0a1a]/50 to-[#0a0a1a]" />
      </div>

      {/* محتوى */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
              <Zap className="w-4 h-4" />
              <span>العام الدراسي 2025 - 2026</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cairo)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            فصل{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff, #00ff88)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              1/3
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            نخبة من الطلاب المتميزين والمعلمين المبدعين، نسعى معاً نحو التفوق
            والإبداع في بيئة تعليمية محفزة ومتطورة. هذا الموقع يوثق مسيرتنا
            وإنجازاتنا.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => document.querySelector("#teachers")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-xl font-bold text-[#0a0a1a] transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "var(--font-cairo)",
                background: "linear-gradient(135deg, #00d4ff, #00ff88)",
              }}
            >
              تعرف علينا
            </button>
            <button
              onClick={() => document.querySelector("#students")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-xl font-bold text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
              style={{ fontFamily: "var(--font-cairo)" }}
            >
              قائمة الطلاب
            </button>
          </motion.div>

          {/* إحصائيات سريعة */}
          <motion.div
            className="flex flex-wrap gap-8 mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { num: "26", label: "طالب" },
              { num: "4", label: "معلمين" },
              { num: "8", label: "رياضيين" },
              { num: "5+", label: "إنجازات" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white neon-text" style={{ fontFamily: "var(--font-cairo)" }}>
                  {s.num}
                </div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* سهم التمرير */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400/60" />
      </motion.div>
    </section>
  );
}

/* ───────── قسم المعلمين ───────── */
function TeachersSection() {
  return (
    <section id="teachers" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={IMAGES.teachersBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[#0a0a1a]/90" />

      <div className="relative z-10 container mx-auto px-4 sm:px-8">
        <SectionTitle title="المعلمين" icon={<Users className="w-6 h-6" />} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PersonCard
                name={t.name}
                subtitle={t.role}
                description={t.description}
                image={t.image}
                accentColor="cyan"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── قسم قائمة الطلاب ───────── */
function StudentsListSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<typeof students[0] | null>(null);

  const filteredStudents = useMemo(
    () => students.filter((s) => s.name.includes(searchQuery)),
    [searchQuery]
  );

  return (
    <section id="students" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={IMAGES.studentsBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[#0a0a1a]/95" />

      <div className="relative z-10 container mx-auto px-4 sm:px-8">
        <SectionTitle title="قائمة الطلاب" icon={<Users className="w-6 h-6" />} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* القائمة على اليمين */}
          <div className="lg:w-2/3 order-1">
            <div className="glass-card rounded-2xl border border-cyan-500/10 overflow-hidden">
              {/* رأس القائمة */}
              <div className="bg-gradient-to-l from-cyan-500/10 to-transparent p-4 sm:p-5 border-b border-cyan-500/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-cairo)" }}>
                    طلاب الفصل ({students.length} طالب)
                  </h3>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* قائمة الأسماء */}
              <div className="max-h-[600px] overflow-y-auto p-3 sm:p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {students.map((student, i) => (
                    <motion.button
                      key={student.id}
                      onClick={() => setSelectedStudent(student)}
                      className={`flex items-center gap-3 p-3 rounded-xl text-right transition-all duration-200 ${
                        selectedStudent?.id === student.id
                          ? "bg-cyan-500/15 border border-cyan-500/30"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.02 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-sm font-bold shrink-0">
                        {student.id}
                      </div>
                      <span className="text-gray-200 text-sm font-medium truncate">{student.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* حقل البحث */}
            <div className="mt-6">
              <div className="glass-card rounded-2xl p-5 border border-cyan-500/10">
                <h4 className="text-base font-bold text-white mb-3" style={{ fontFamily: "var(--font-cairo)" }}>
                  بحث عن طالب
                </h4>
                <div className="relative">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/50" />
                  <input
                    type="text"
                    placeholder="اكتب اسم الطالب..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0a0a1a]/60 border border-cyan-500/15 rounded-xl py-3 pr-12 pl-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400/40 transition-colors"
                    style={{ fontFamily: "var(--font-ibm)" }}
                  />
                </div>

                {/* نتائج البحث */}
                {searchQuery && (
                  <div className="mt-4 space-y-2">
                    {filteredStudents.length === 0 ? (
                      <p className="text-gray-500 text-sm text-center py-4">لا توجد نتائج</p>
                    ) : (
                      filteredStudents.map((student) => (
                        <motion.button
                          key={student.id}
                          onClick={() => setSelectedStudent(student)}
                          className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-cyan-500/10 transition-colors text-right"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-500/20 shrink-0">
                            <img
                              src={(!student.image || student.image === "REPLACE_WITH_URL") ? DEFAULT_AVATAR : student.image}
                              alt={student.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-white font-medium">{student.name}</span>
                        </motion.button>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* بطاقة الطالب المحدد */}
          <div className="lg:w-1/3 order-2">
            <div className="lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                {selectedStudent ? (
                  <motion.div
                    key={selectedStudent.id}
                    className="glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/20 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => setSelectedStudent(null)}
                      className="absolute top-4 left-4 text-gray-500 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-cyan-500/30 mx-auto mb-6 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                      <img
                        src={(!selectedStudent.image || selectedStudent.image === "REPLACE_WITH_URL") ? DEFAULT_AVATAR : selectedStudent.image}
                        alt={selectedStudent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-cairo)" }}
                    >
                      {selectedStudent.name}
                    </h3>
                    <p className="text-cyan-400 text-sm">طالب في فصل 1/3</p>
                    <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/15 text-cyan-400">
                        #{selectedStudent.id}
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="glass-card rounded-2xl p-8 border border-cyan-500/10 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-cyan-400/50" />
                    </div>
                    <p className="text-gray-400" style={{ fontFamily: "var(--font-cairo)" }}>
                      اختر طالباً من القائمة أو ابحث عن اسمه لعرض بطاقته
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── قسم أبرز الطلاب ───────── */
function TopStudentsSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0a1020] to-[#0a0a1a]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-8">
        <SectionTitle title="أبرز الطلاب" icon={<Star className="w-6 h-6" />} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topStudents.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PersonCard
                name={s.name}
                subtitle={s.achievement}
                description={s.description}
                image={s.image}
                icon={<Star className="w-4 h-4 text-white" />}
                accentColor="gold"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── قسم الرياضيين ───────── */
function AthletesSection() {
  return (
    <section id="athletes" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={IMAGES.studentsBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[#0a0a1a]/95" />

      <div className="relative z-10 container mx-auto px-4 sm:px-8">
        <SectionTitle title="الرياضيين" icon={<Dumbbell className="w-6 h-6" />} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {athletes.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <PersonCard
                name={a.name}
                subtitle={a.sport}
                description={a.description}
                image={a.image}
                icon={<Dumbbell className="w-4 h-4 text-white" />}
                accentColor="green"
              />
            </motion.div>
          ))}
        </div>

        {/* أبرز الرياضيين */}
        <div className="mt-20">
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Medal className="w-6 h-6" />
            </div>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-extrabold"
                style={{
                  fontFamily: "var(--font-cairo)",
                  background: "linear-gradient(135deg, #f0c040, #ff8800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                أبرز الرياضيين
              </h2>
              <div className="h-1 w-20 bg-gradient-to-l from-amber-500 to-orange-500 rounded-full mt-2" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topAthletes.map((a, i) => (
              <motion.div
                key={a.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(240,192,64,0.15)" }}
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative shrink-0">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-amber-500/30 shadow-[0_0_30px_rgba(240,192,64,0.2)]">
                      <img
                        src={(!a.image || a.image === "REPLACE_WITH_URL") ? DEFAULT_AVATAR : a.image}
                        alt={a.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-cairo)" }}
                    >
                      {a.name}
                    </h3>
                    <p className="text-amber-400 font-medium mb-1">{a.sport}</p>
                    <p className="text-emerald-400 text-sm font-medium mb-3">{a.achievement}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{a.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── قسم حولنا ───────── */
function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={IMAGES.aboutBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[#0a0a1a]/90" />

      <div className="relative z-10 container mx-auto px-4 sm:px-8">
        <SectionTitle title={aboutText.title} icon={<Info className="w-6 h-6" />} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* النص */}
          <div className="lg:col-span-3">
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-10 border border-cyan-500/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-cairo)" }}
              >
                {aboutText.subtitle}
              </h3>
              <div className="space-y-4">
                {aboutText.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* الإنجازات */}
          <div className="lg:col-span-2">
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/15"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3
                className="text-xl font-bold text-amber-400 mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-cairo)" }}
              >
                <Trophy className="w-6 h-6" />
                الإنجازات
              </h3>
              <div className="space-y-3">
                {aboutText.achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <span className="text-gray-200 text-sm font-medium">{ach}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── الفوتر ───────── */
function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-[#0a0a1a]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-8 text-center">
        {/* عدد الطلاب */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass-card border border-cyan-500/15">
            <Users className="w-8 h-8 text-cyan-400" />
            <div className="text-right">
              <div
                className="text-3xl sm:text-4xl font-black text-white neon-text"
                style={{ fontFamily: "var(--font-cairo)" }}
              >
                26
              </div>
              <div className="text-sm text-gray-400">طالب في الفصل</div>
            </div>
          </div>
        </motion.div>

        {/* الشعار */}
        <img src={IMAGES.logo} alt="شعار فصل 1/3" className="w-16 h-16 mx-auto mb-4 opacity-60" />

        <p className="text-gray-500 text-sm mb-2" style={{ fontFamily: "var(--font-cairo)" }}>
          فصل 1/3 — العام الدراسي 2025 - 2026
        </p>

        <div className="h-px w-32 bg-gradient-to-l from-transparent via-cyan-500/20 to-transparent mx-auto my-6" />

        <p className="text-gray-500 text-sm">
          تم التطوير بواسطة:{" "}
          <span className="text-cyan-400 font-medium">حسام الحكمي</span>
        </p>
      </div>
    </footer>
  );
}

/* ───────── الصفحة الرئيسية ───────── */
export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      <AnimatePresence>
        {showWelcome && <WelcomeScreen onDismiss={() => setShowWelcome(false)} />}
      </AnimatePresence>

      {!showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <HeroSection />
          <TeachersSection />
          <StudentsListSection />
          <TopStudentsSection />
          <AthletesSection />
          <AboutSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
