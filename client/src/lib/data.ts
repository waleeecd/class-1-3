/*
 * ============================================
 * بيانات موقع فصل 1/3
 * ============================================
 * يمكنك تعديل الأسماء والصور والروابط بسهولة من هنا
 * لتغيير صورة: استبدل رابط الصورة بالرابط الجديد
 * ============================================
 */

// ===== روابط الصور الخلفية =====
export const IMAGES = {
  heroBg: "https://private-us-east-1.manuscdn.com/sessionFile/eaN9QYXKvtJ98cdMzq4xuN/sandbox/wfUuy1kFNVoVBL2AUmko9V-img-1_1771964860000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWFOOVFZWEt2dEo5OGNkTXpxNHh1Ti9zYW5kYm94L3dmVXV5MWtGTlZvVkJMMkFVbWtvOVYtaW1nLTFfMTc3MTk2NDg2MDAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XaofGgdIZqLkjef8cMzMoo~mGeAz4t~6d8gewntmh4eV31WlVreY1jkHND6d36bcHii5Y1GfrSaiHNy9ZD3Y0~VrDq4ThhK2w-JFpL5IhJcXWS4yyKR6LcflCaxnFT0qurlTiqHKmdjRlPD9hsWbyYOBw9I1HVO9SU9VZ9MuvfhPVJ83a5s2yGq5c-kp6A-spbMshCJtBEiZD55UvsLC1KW4FTokM7S~NX7ziCFiGVLIEpq~1xZgDOPPVYseYenq6j2qA0R80iMq8LdqGJwXqfO54Ae0LWcD6oeknZYq4Kx-0oGYbfIoyhd88GEuNejR8oDSb5w9BFOBUHVt1DRyrA__",
  logo: "https://private-us-east-1.manuscdn.com/sessionFile/eaN9QYXKvtJ98cdMzq4xuN/sandbox/wfUuy1kFNVoVBL2AUmko9V_1771964871453_na1fn_Y2xhc3MtbG9nbw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWFOOVFZWEt2dEo5OGNkTXpxNHh1Ti9zYW5kYm94L3dmVXV5MWtGTlZvVkJMMkFVbWtvOVZfMTc3MTk2NDg3MTQ1M19uYTFmbl9ZMnhoYzNNdGJHOW5idy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AXdThaSYeeEX2gx3y09P1gszOVHiJ~EkMG94NqXf8ywaUALdLolpkmLg8ZP0ZsRqaPe6g-RPhqhfMr3TWRpkfhk4tFfjIJ62FUBi1gV84sryjboy4L7luqRKFX9TG2NLhmaT5MoZKDzOFrjrUr4OWTFKfxQ2IcTxrCf3nNbvz0~K3~X6dXqDjkuh~g032grCaw83Ae7ESsGsANvPCj4gghrbz4ET9SQLCqtWbzS~Ct-vOA4a9XRjYfVGwk4vE8Fvl8AgSfARtNTLDRK5VlP~Inx9PtHmyNh6nr6Vfp8ScxUuzZXPp47M1PrH5hyCTfpuZFA~BdYLzTfpbCX2xMjUbQ__",
  teachersBg: "https://private-us-east-1.manuscdn.com/sessionFile/eaN9QYXKvtJ98cdMzq4xuN/sandbox/wfUuy1kFNVoVBL2AUmko9V-img-3_1771964860000_na1fn_dGVhY2hlcnMtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWFOOVFZWEt2dEo5OGNkTXpxNHh1Ti9zYW5kYm94L3dmVXV5MWtGTlZvVkJMMkFVbWtvOVYtaW1nLTNfMTc3MTk2NDg2MDAwMF9uYTFmbl9kR1ZoWTJobGNuTXRZbWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=db0nOkWZIG4SKbx7auX6FZMSamg9Je4XHyUtYnXWoSoAsaNAKYoagKHEaWalOWMXTEakg8w~LWpeVLRjQhLP7D4RWKN0oLffo1o48~ZhUmOtgSwOjWvngAzEWucMV7c4lYmNMRCVchedgfjBWQZCBWVD~eq0Hxz6q1TMBEb1Ikxv35kEgL2O4bfg1pvGP5Ut5et4~1aKqlgMNmFiFfPKckAaYidLWhcVgHqa-IyQzEoFQtG1YBIJ-ppvlIYVH0Pefwi3XDPAyiZqaZvvA18ahaVAj-7vHhrFdquyu8XpyyofJi8HpfDSRHHqrX022JfRUvt1airPAv4ibS3mvoqtrg__",
  studentsBg: "https://private-us-east-1.manuscdn.com/sessionFile/eaN9QYXKvtJ98cdMzq4xuN/sandbox/wfUuy1kFNVoVBL2AUmko9V-img-4_1771964864000_na1fn_c3R1ZGVudHMtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWFOOVFZWEt2dEo5OGNkTXpxNHh1Ti9zYW5kYm94L3dmVXV5MWtGTlZvVkJMMkFVbWtvOVYtaW1nLTRfMTc3MTk2NDg2NDAwMF9uYTFmbl9jM1IxWkdWdWRITXRZbWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ts1MiJd0FKAz76n9rrT-5F~701IgPhQoyNRmidzF5krEuhq9Z1yjO1mamKIJjQOY9aHrGwIeV9M14ikeKq6V4e4nDnEtoPx8NL-NXZqT84EQzrGJEUNt3hvDOMPSjzP5rTd~fiSnuO96KDsPPE7wsDinG4UUtnXvuHNsr37iOVLui~Zu5jnPkQiDOcb86CwF9rB7TBOF-abiPkFc91THceQypr5i-WkxpbdjNPxjFWk1l9dy-wijlxTkmI8TJkci7hfJfPIIZ8i9x0~eYp32w~TbdaZgeefSGXef5hyS5fYMma9-Y9fQYmzWswQVo~JtLw92o4leh-FuPNBzTP44wg__",
  aboutBg: "https://private-us-east-1.manuscdn.com/sessionFile/eaN9QYXKvtJ98cdMzq4xuN/sandbox/wfUuy1kFNVoVBL2AUmko9V-img-5_1771964864000_na1fn_YWJvdXQtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWFOOVFZWEt2dEo5OGNkTXpxNHh1Ti9zYW5kYm94L3dmVXV5MWtGTlZvVkJMMkFVbWtvOVYtaW1nLTVfMTc3MTk2NDg2NDAwMF9uYTFmbl9ZV0p2ZFhRdFltYy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lwqHmT2spbptNUmhml36aIKS7lZgkiaTLFdbZ3joZ~4iDYLlRNmPZ~1LAswP0i7osySzatYE5zCYeY2e-JxXrRb9ydzyfLWzimVg6OJG57mUezg6ZVc8LjCF4AQWD5QAEEbGauGbRuzmPD0blU25nhOg0nN8s2WxwHDpPvkLV5xDq6oSMAG9659qu80LNt8H~CXSYAB4tepeKPkmbIHDsFErkCA6vImHJighKn2nLpmXHXwkDthDv3-187eDDeVxRd8BQJyAuCoRzmwxpapeGLn3RUDBMcNw~Msixbg2Iza8DjYTTdeUgtxz6FL1IKSRQt5-rD7h~UKOmo-tv8PJeQ__",
};

// ===== صورة افتراضية للأشخاص =====
export const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face";

// ===== بيانات المعلمين =====
// لتغيير صورة معلم: استبدل رابط image بالرابط الجديد
export const teachers = [
  {
    id: 1,
    name: "المعلم الأول",
    role: "معلم الرياضيات",
    description: "معلم متميز ذو خبرة واسعة في تدريس الرياضيات وتبسيط المفاهيم المعقدة",
    image: "REPLACE_WITH_URL", // ← استبدل برابط الصورة
  },
  {
    id: 2,
    name: "المعلم الثاني",
    role: "معلم العلوم",
    description: "متخصص في العلوم الطبيعية ويتميز بأسلوب تعليمي تفاعلي ومبتكر",
    image: "REPLACE_WITH_URL", // ← استبدل برابط الصورة
  },
  {
    id: 3,
    name: "المعلم الثالث",
    role: "معلم اللغة العربية",
    description: "خبير في اللغة العربية والنحو والصرف مع شغف كبير بتعليم الطلاب",
    image: "REPLACE_WITH_URL", // ← استبدل برابط الصورة
  },
  {
    id: 4,
    name: "المعلم الرابع",
    role: "معلم اللغة الإنجليزية",
    description: "متميز في تعليم اللغة الإنجليزية بأساليب حديثة وتفاعلية",
    image: "REPLACE_WITH_URL", // ← استبدل برابط الصورة
  },
];

// ===== قائمة الطلاب (26 طالب) =====
// لتغيير صورة طالب: استبدل رابط image بالرابط الجديد
export const students = [
  { id: 1, name: "الطالب 1", image: "REPLACE_WITH_URL" },
  { id: 2, name: "الطالب 2", image: "REPLACE_WITH_URL" },
  { id: 3, name: "الطالب 3", image: "REPLACE_WITH_URL" },
  { id: 4, name: "الطالب 4", image: "REPLACE_WITH_URL" },
  { id: 5, name: "الطالب 5", image: "REPLACE_WITH_URL" },
  { id: 6, name: "الطالب 6", image: "REPLACE_WITH_URL" },
  { id: 7, name: "الطالب 7", image: "REPLACE_WITH_URL" },
  { id: 8, name: "الطالب 8", image: "REPLACE_WITH_URL" },
  { id: 9, name: "الطالب 9", image: "REPLACE_WITH_URL" },
  { id: 10, name: "الطالب 10", image: "REPLACE_WITH_URL" },
  { id: 11, name: "الطالب 11", image: "REPLACE_WITH_URL" },
  { id: 12, name: "الطالب 12", image: "REPLACE_WITH_URL" },
  { id: 13, name: "الطالب 13", image: "REPLACE_WITH_URL" },
  { id: 14, name: "الطالب 14", image: "REPLACE_WITH_URL" },
  { id: 15, name: "الطالب 15", image: "REPLACE_WITH_URL" },
  { id: 16, name: "الطالب 16", image: "REPLACE_WITH_URL" },
  { id: 17, name: "الطالب 17", image: "REPLACE_WITH_URL" },
  { id: 18, name: "الطالب 18", image: "REPLACE_WITH_URL" },
  { id: 19, name: "الطالب 19", image: "REPLACE_WITH_URL" },
  { id: 20, name: "الطالب 20", image: "REPLACE_WITH_URL" },
  { id: 21, name: "الطالب 21", image: "REPLACE_WITH_URL" },
  { id: 22, name: "الطالب 22", image: "REPLACE_WITH_URL" },
  { id: 23, name: "الطالب 23", image: "REPLACE_WITH_URL" },
  { id: 24, name: "الطالب 24", image: "REPLACE_WITH_URL" },
  { id: 25, name: "الطالب 25", image: "REPLACE_WITH_URL" },
  { id: 26, name: "الطالب 26", image: "REPLACE_WITH_URL" },
];

// ===== أبرز الطلاب (7 طلاب) =====
export const topStudents = [
  {
    id: 1,
    name: "الطالب المتميز 1",
    achievement: "الأول على الفصل",
    description: "طالب متفوق ومجتهد يتميز بالتزامه وحرصه على التعلم",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 2,
    name: "الطالب المتميز 2",
    achievement: "متفوق في الرياضيات",
    description: "يتميز بقدرات عالية في حل المسائل الرياضية المعقدة",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 3,
    name: "الطالب المتميز 3",
    achievement: "متفوق في العلوم",
    description: "شغوف بالعلوم والاكتشاف ويشارك في المسابقات العلمية",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 4,
    name: "الطالب المتميز 4",
    achievement: "الطالب المثالي",
    description: "يجمع بين التفوق الدراسي والأخلاق الحميدة والنشاط",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 5,
    name: "الطالب المتميز 5",
    achievement: "متفوق في اللغة العربية",
    description: "موهوب في الكتابة والتعبير ويتميز بأسلوبه الأدبي",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 6,
    name: "الطالب المتميز 6",
    achievement: "متفوق في اللغة الإنجليزية",
    description: "يتقن اللغة الإنجليزية بمهارة عالية في التحدث والكتابة",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 7,
    name: "الطالب المتميز 7",
    achievement: "الأكثر تطوراً",
    description: "حقق تطوراً ملحوظاً في مستواه الدراسي خلال الفصل",
    image: "REPLACE_WITH_URL",
  },
];

// ===== الرياضيين (8 رياضيين) =====
export const athletes = [
  {
    id: 1,
    name: "الرياضي 1",
    sport: "كرة القدم",
    description: "لاعب متميز في كرة القدم ويمثل الفصل في البطولات",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 2,
    name: "الرياضي 2",
    sport: "كرة السلة",
    description: "لاعب كرة سلة محترف ويتميز بمهاراته العالية",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 3,
    name: "الرياضي 3",
    sport: "ألعاب القوى",
    description: "بطل في سباقات الجري ويحقق أرقاماً مميزة",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 4,
    name: "الرياضي 4",
    sport: "السباحة",
    description: "سباح ماهر ويشارك في بطولات السباحة المدرسية",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 5,
    name: "الرياضي 5",
    sport: "كرة الطائرة",
    description: "لاعب كرة طائرة متميز ويقود فريق الفصل",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 6,
    name: "الرياضي 6",
    sport: "تنس الطاولة",
    description: "بطل تنس الطاولة على مستوى المدرسة",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 7,
    name: "الرياضي 7",
    sport: "الكاراتيه",
    description: "حاصل على حزام متقدم في الكاراتيه ويمثل المدرسة",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 8,
    name: "الرياضي 8",
    sport: "كرة اليد",
    description: "لاعب كرة يد موهوب ويتميز بروح الفريق",
    image: "REPLACE_WITH_URL",
  },
];

// ===== أبرز الرياضيين (2) =====
export const topAthletes = [
  {
    id: 1,
    name: "الرياضي المتميز 1",
    sport: "كرة القدم",
    achievement: "هداف البطولة المدرسية",
    description: "حقق لقب هداف البطولة المدرسية وقاد فريق الفصل للفوز بالمركز الأول",
    image: "REPLACE_WITH_URL",
  },
  {
    id: 2,
    name: "الرياضي المتميز 2",
    sport: "ألعاب القوى",
    achievement: "بطل سباق 100 متر",
    description: "فاز ببطولة سباق 100 متر على مستوى المدرسة وحقق رقماً قياسياً جديداً",
    image: "REPLACE_WITH_URL",
  },
];

// ===== نص حولنا =====
export const aboutText = {
  title: "حولنا",
  subtitle: "إنجازات فصل 1/3",
  paragraphs: [
    "فصل 1/3 هو فصل متميز يضم نخبة من الطلاب المتفوقين والمبدعين الذين يسعون دائماً للتميز والإبداع في جميع المجالات الأكاديمية والرياضية.",
    "حقق الفصل العديد من الإنجازات المتميزة خلال العام الدراسي، من بينها الحصول على المركز الأول في المسابقات العلمية والثقافية على مستوى المدرسة، بالإضافة إلى تحقيق نتائج مبهرة في البطولات الرياضية.",
    "يتميز طلاب الفصل بروح التعاون والعمل الجماعي، حيث يدعم كل طالب زملاءه في رحلة التعلم والتطور. كما يحرص المعلمون على توفير بيئة تعليمية محفزة تشجع على الإبداع والابتكار.",
  ],
  achievements: [
    "المركز الأول في المسابقة العلمية",
    "بطولة كرة القدم المدرسية",
    "أفضل فصل منظم",
    "المركز الأول في مسابقة القرآن الكريم",
    "التميز في الأنشطة اللاصفية",
  ],
};
