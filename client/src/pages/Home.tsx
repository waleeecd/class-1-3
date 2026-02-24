/*
 * تصميم مستوحى من uula.com
 * خلفية كحلي داكنة، ألوان تركواز، صور 3D، بطاقات زجاجية
 * خطوط منحنية زخرفية، نقاط مضيئة، أنيميشن سلس
 */
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Trophy, Users, GraduationCap, Medal, Star, Award, Dumbbell, BookOpen } from "lucide-react";
import {
  LOGO_URL, HERO_3D, ABOUT_3D, STUDENTS_3D,
  NAV_ITEMS, teachers, students, topStudents, athletes, topAthletes, aboutText, DEFAULT_AVATAR,
} from "@/lib/data";

// ===== شاشة الترحيب =====
function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #070b16 0%, #0d1528 50%, #0a1020 100%)" }}
      onClick={onEnter}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* خطوط دائرية زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-teal-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-teal-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-teal-500/[0.03]" />
        {/* نقاط مضيئة */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-teal-400"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0.2 + Math.random() * 0.4 }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* الشعار */}
        <motion.div
          className="w-40 h-40 mb-8 rounded-2xl overflow-hidden shadow-2xl"
          style={{ boxShadow: "0 0 60px rgba(20,184,166,0.15)" }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={LOGO_URL} alt="شعار فصل 1/3" className="w-full h-full object-cover" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-3 text-center" style={{ fontFamily: "'Tajawal', sans-serif" }}>
          مرحباً بك في موقع
        </h1>
        <h2 className="text-5xl md:text-7xl font-black mb-6 text-center gradient-text">
          فصل 1/3
        </h2>
        <p className="text-lg text-gray-400 mb-2">الفصل المثالي</p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-2 text-gray-500"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">المس الشاشة للدخول</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ===== شريط التنقل =====
function Navbar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#070b16]/90 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* الشعار */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <img src={LOGO_URL} alt="شعار" className="w-10 h-10 rounded-lg object-cover" />
            <span className="text-lg font-bold text-white hidden sm:block">فصل 1/3</span>
          </button>

          {/* القوائم */}
          <div className="flex items-center gap-1 md:gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-teal-400 bg-teal-400/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

// ===== قسم البداية (Hero) =====
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* خلفية */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b16] via-[#0a1020] to-[#0d1528]" />
        {/* دائرة زرقاء كبيرة مثل uula */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-3xl" />
        {/* خط منحني */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 900" fill="none">
          <ellipse cx="720" cy="450" rx="600" ry="400" stroke="#14b8a6" strokeWidth="1" />
          <ellipse cx="720" cy="450" rx="400" ry="280" stroke="#14b8a6" strokeWidth="0.5" />
        </svg>
        {/* نقاط */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-teal-400/30"
            style={{ top: `${10 + Math.random() * 80}%`, left: `${5 + Math.random() * 90}%` }}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Star className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-medium">العام الدراسي 2025 - 2026</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
              فصل <span className="gradient-text">1/3</span>
            </h1>
            <p className="text-xl text-gray-300 mb-3 font-bold">الفصل المثالي</p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              نخبة من الطلاب المتميزين والمعلمين المبدعين، نسعى معاً نحو التفوق والإبداع في بيئة تعليمية محفزة ومتطورة
            </p>

            <div className="flex gap-4 mb-10">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full bg-teal-500 text-[#070b16] font-bold text-lg hover:bg-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
              >
                تعرف علينا
              </button>
              <button
                onClick={() => document.getElementById("students")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full border border-teal-500/30 text-teal-400 font-bold text-lg hover:bg-teal-500/10 transition-all duration-300"
              >
                قائمة الطلاب
              </button>
            </div>

            {/* إحصائيات */}
            <div className="flex gap-8">
              {[
                { num: "26", label: "طالب", icon: Users },
                { num: "4", label: "معلمين", icon: GraduationCap },
                { num: "8", label: "رياضيين", icon: Dumbbell },
                { num: "+5", label: "إنجازات", icon: Trophy },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <stat.icon className="w-5 h-5 text-teal-400/60 mx-auto mb-1" />
                  <div className="text-2xl md:text-3xl font-black text-white">{stat.num}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* صورة 3D */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* دائرة زرقاء خلف الصورة */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-2xl" />
              <motion.img
                src={HERO_3D}
                alt="فصل دراسي 3D"
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ===== قسم المعلمين =====
function TeachersSection() {
  return (
    <section id="teachers" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1528] via-[#0a1222] to-[#0d1528]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={GraduationCap} title="المعلمين" subtitle="نخبة من المعلمين المتميزين" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 opacity-20 group-hover:opacity-40 transition-opacity" />
                <img
                  src={teacher.image === "REPLACE_WITH_URL" ? DEFAULT_AVATAR : teacher.image}
                  alt={teacher.name}
                  className="w-full h-full rounded-full object-cover border-2 border-teal-500/30"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{teacher.name}</h3>
              <p className="text-teal-400 text-sm font-medium mb-3">{teacher.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{teacher.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== قسم قائمة الطلاب =====
function StudentsListSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<typeof students[0] | null>(null);

  const filteredStudents = useMemo(
    () => students.filter((s) => s.name.includes(searchQuery)),
    [searchQuery]
  );

  return (
    <section id="students" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1528] via-[#070b16] to-[#0d1528]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={Users} title="قائمة الطلاب" subtitle="طلاب الفصل (26 طالب)" />

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* القائمة */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-teal-400" />
                <h3 className="text-lg font-bold text-white">طلاب الفصل ({students.length} طالب)</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 max-h-[500px] overflow-y-auto pr-2" style={{ scrollbarWidth: "thin" }}>
                {filteredStudents.map((student, i) => (
                  <motion.button
                    key={student.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    onClick={() => setSelectedStudent(student)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-right transition-all duration-300 ${
                      selectedStudent?.id === student.id
                        ? "bg-teal-500/15 border border-teal-500/30"
                        : "hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 text-sm font-bold shrink-0">
                      {student.id}
                    </span>
                    <span className="text-gray-300 text-sm font-medium">{student.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* البحث وبطاقة الطالب */}
          <div className="space-y-6">
            {/* البحث */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-teal-400" />
                بحث عن طالب
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="اكتب اسم الطالب..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.07] transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>

            {/* بطاقة الطالب */}
            <AnimatePresence mode="wait">
              {selectedStudent ? (
                <motion.div
                  key={selectedStudent.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass-card rounded-2xl p-8 text-center"
                  style={{ boxShadow: "0 0 40px rgba(20,184,166,0.1)" }}
                >
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-3 border-teal-500/40">
                    <img
                      src={selectedStudent.image === "REPLACE_WITH_URL" ? DEFAULT_AVATAR : selectedStudent.image}
                      alt={selectedStudent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedStudent.name}</h3>
                  <p className="text-teal-400 text-sm">طالب في فصل 1/3</p>
                  <div className="mt-4 px-4 py-2 rounded-full bg-teal-500/10 inline-block">
                    <span className="text-teal-400 text-sm font-medium">#{selectedStudent.id}</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="glass-card rounded-2xl p-8 text-center"
                >
                  <Search className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">اختر طالباً من القائمة أو ابحث عن اسمه لعرض بطاقته</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== قسم أبرز الطلاب =====
function FeaturedStudentsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1528] via-[#0a1222] to-[#0d1528]" />
      {/* دائرة زخرفية */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={Star} title="أبرز الطلاب" subtitle="طلاب تميزوا بإنجازاتهم" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
          {topStudents.map((student, i) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5 text-center group"
            >
              <div className="relative w-20 h-20 mx-auto mb-3">
                <img
                  src={student.image === "REPLACE_WITH_URL" ? DEFAULT_AVATAR : student.image}
                  alt={student.name}
                  className="w-full h-full rounded-full object-cover border-2 border-yellow-500/30"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 text-[#070b16]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{student.name}</h3>
              <p className="text-yellow-400 text-xs font-medium mb-2">{student.achievement}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{student.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== قسم الرياضيين =====
function AthletesSection() {
  return (
    <section id="athletes" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1528] via-[#070b16] to-[#0d1528]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader icon={Dumbbell} title="الرياضيين" subtitle="أبطال الفصل في الميادين الرياضية" />
          <p className="text-gray-400 mt-4 leading-relaxed text-center max-w-2xl mx-auto">
            يضم فصلنا مجموعة من الرياضيين المتميزين الذين يمثلون الفصل في مختلف البطولات والمسابقات الرياضية على مستوى المدرسة
          </p>
        </div>

        {/* بطاقات الرياضيين */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {athletes.map((athlete, i) => (
            <motion.div
              key={athlete.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5 text-center group"
            >
              <div className="relative w-20 h-20 mx-auto mb-3">
                <img
                  src={athlete.image === "REPLACE_WITH_URL" ? DEFAULT_AVATAR : athlete.image}
                  alt={athlete.name}
                  className="w-full h-full rounded-full object-cover border-2 border-green-500/30"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                  <Medal className="w-3.5 h-3.5 text-[#070b16]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{athlete.name}</h3>
              <p className="text-green-400 text-xs font-medium mb-2">{athlete.sport}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{athlete.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== قسم أبرز الرياضيين =====
function FeaturedAthletesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1528] via-[#0a1222] to-[#0d1528]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={Trophy} title="أبرز الرياضيين" subtitle="أبطال حققوا إنجازات استثنائية" />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {topAthletes.map((athlete, i) => (
            <motion.div
              key={athlete.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 flex gap-6 items-center"
              style={{ boxShadow: "0 0 30px rgba(20,184,166,0.08)" }}
            >
              <div className="shrink-0">
                <div className="relative w-28 h-28">
                  <img
                    src={athlete.image === "REPLACE_WITH_URL" ? DEFAULT_AVATAR : athlete.image}
                    alt={athlete.name}
                    className="w-full h-full rounded-2xl object-cover border-2 border-teal-500/30"
                  />
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                    <Trophy className="w-4 h-4 text-[#070b16]" />
                  </div>
                </div>
              </div>
              <div className="text-right flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{athlete.name}</h3>
                <p className="text-teal-400 font-medium mb-1">{athlete.sport}</p>
                <p className="text-yellow-400 text-sm font-medium mb-2">{athlete.achievement}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{athlete.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== قسم حولنا =====
function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1528] via-[#070b16] to-[#0d1528]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={BookOpen} title={aboutText.title} subtitle={aboutText.subtitle} />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">{aboutText.subtitle}</h3>
            {aboutText.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-lg">{p}</p>
            ))}
          </motion.div>

          {/* الإنجازات + صورة 3D */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.img
              src={ABOUT_3D}
              alt="حولنا 3D"
              className="w-64 mx-auto mb-6 drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                الإنجازات
              </h4>
              <div className="space-y-3">
                {aboutText.achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <Star className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span className="text-gray-300 text-sm">{ach}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ===== الفوتر =====
function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#050810]" />
      <div className="section-divider mb-12" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* عدد الطلاب */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass-card mb-8"
        >
          <Users className="w-8 h-8 text-teal-400" />
          <div>
            <span className="text-4xl font-black text-white">26</span>
            <p className="text-gray-400 text-sm">طالب في الفصل</p>
          </div>
        </motion.div>

        {/* الشعار */}
        <div className="flex justify-center mb-6">
          <img src={LOGO_URL} alt="شعار" className="w-16 h-16 rounded-xl object-cover opacity-60" />
        </div>

        <p className="text-gray-500 text-sm mb-2">فصل 1/3 — العام الدراسي 2025 - 2026</p>
        <div className="section-divider my-6 max-w-xs mx-auto" />
        <p className="text-gray-600 text-sm">
          تم التطوير بواسطة: <span className="text-teal-400 font-medium">حسام الحكمي</span>
        </p>
      </div>
    </footer>
  );
}

// ===== عنوان القسم =====
function SectionHeader({ icon: Icon, title, subtitle, align = "center" }: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  align?: "center" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={align === "center" ? "text-center" : "text-right"}
    >
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4 ${align === "center" ? "mx-auto" : ""}`}>
        <Icon className="w-4 h-4 text-teal-400" />
        <span className="text-teal-400 text-sm font-medium">{subtitle}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-white gradient-text">{title}</h2>
      <div className={`w-20 h-1 bg-gradient-to-l from-teal-400 to-blue-500 rounded-full mt-4 ${align === "center" ? "mx-auto" : "mr-0"}`} />
    </motion.div>
  );
}

// ===== الصفحة الرئيسية =====
export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (showWelcome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [showWelcome]);

  return (
    <div className="min-h-screen" style={{ background: "#070b16" }}>
      <AnimatePresence>
        {showWelcome && <WelcomeScreen onEnter={() => setShowWelcome(false)} />}
      </AnimatePresence>

      {!showWelcome && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Navbar activeSection={activeSection} />
          <HeroSection />
          <div className="section-divider" />
          <TeachersSection />
          <div className="section-divider" />
          <StudentsListSection />
          <div className="section-divider" />
          <FeaturedStudentsSection />
          <div className="section-divider" />
          <AthletesSection />
          <div className="section-divider" />
          <FeaturedAthletesSection />
          <div className="section-divider" />
          <AboutSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
