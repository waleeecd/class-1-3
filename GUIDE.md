# دليل استخدام موقع فصل 1/3

## كيف تضيف أسماء وصور الطلاب والمعلمين؟

افتح الملف: `client/src/lib/data.ts`

### طريقة إضافة الصور

كل صورة في الموقع تحتاج **رابط URL** مباشر للصورة.
استبدل `"REPLACE_WITH_URL"` بالرابط الحقيقي.

**مثال:**
```ts
// قبل التعديل:
{ id: 1, name: "الطالب 1", image: "REPLACE_WITH_URL" }

// بعد التعديل:
{ id: 1, name: "أحمد محمد", image: "https://i.imgur.com/abc123.jpg" }
```

### كيف أحصل على رابط للصورة؟

**الطريقة الأسهل - Imgur:**
1. افتح موقع https://imgur.com
2. اضغط "New post" ثم ارفع الصورة
3. اضغط على الصورة بعد الرفع
4. اضغط كليك يمين على الصورة → "Copy image address"
5. الصق الرابط في الكود

**طريقة أخرى - ImgBB:**
1. افتح https://imgbb.com
2. ارفع الصورة
3. انسخ "Direct link"

---

## هيكل ملف data.ts

### المعلمين (4 معلمين)
```ts
export const teachers = [
  {
    id: 1,
    name: "اسم المعلم",        // ← غيّر الاسم
    role: "مادة المعلم",       // ← غيّر التخصص
    description: "وصف المعلم", // ← غيّر الوصف
    image: "رابط_الصورة",      // ← ضع رابط الصورة
  },
  // ... باقي المعلمين
];
```

### الطلاب (26 طالب)
```ts
export const students = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  name: `الطالب ${i + 1}`,
  image: "REPLACE_WITH_URL",
}));
```

**لتعديل الطلاب بأسماء حقيقية، استبدل الكود بهذا:**
```ts
export const students = [
  { id: 1,  name: "أحمد محمد",    image: "رابط_صورة_1" },
  { id: 2,  name: "عبدالله علي",  image: "رابط_صورة_2" },
  { id: 3,  name: "محمد سعد",     image: "رابط_صورة_3" },
  // ... حتى 26 طالب
];
```

### أبرز الطلاب (7 طلاب)
```ts
export const topStudents = [
  {
    id: 1,
    name: "اسم الطالب",
    achievement: "إنجازه (مثل: الأول على الفصل)",
    description: "وصف قصير عنه",
    image: "رابط_الصورة",
  },
  // ...
];
```

### الرياضيين (8 رياضيين)
```ts
export const athletes = [
  {
    id: 1,
    name: "اسم الرياضي",
    sport: "الرياضة (مثل: كرة القدم)",
    description: "وصف قصير",
    image: "رابط_الصورة",
  },
  // ...
];
```

### أبرز الرياضيين (2)
```ts
export const topAthletes = [
  {
    id: 1,
    name: "اسم الرياضي",
    sport: "الرياضة",
    achievement: "الإنجاز (مثل: هداف البطولة)",
    description: "وصف تفصيلي",
    image: "رابط_الصورة",
  },
];
```

---

## رفع المشروع على GitHub

### الخطوة 1: إنشاء حساب GitHub
- افتح https://github.com وسجّل حساب جديد

### الخطوة 2: إنشاء Repository جديد
1. اضغط على **"+"** في الأعلى → **"New repository"**
2. اسم المشروع: `class-1-3`
3. اختر **Public** أو **Private**
4. اضغط **"Create repository"**

### الخطوة 3: رفع الملفات
بعد إنشاء الـ Repository ستجد أوامر مثل هذه، نفّذها في مجلد المشروع:

```bash
git init
git add .
git commit -m "موقع فصل 1/3"
git branch -M main
git remote add origin https://github.com/اسم_المستخدم/class-1-3.git
git push -u origin main
```

---

## تشغيل الموقع على Render (مجاني)

### الخطوة 1: إنشاء حساب Render
- افتح https://render.com
- سجّل بحساب GitHub مباشرة (أسهل)

### الخطوة 2: إنشاء Web Service جديد
1. اضغط **"New +"** → **"Web Service"**
2. اختر **"Build and deploy from a Git repository"**
3. اضغط **"Connect"** بجانب مشروعك `class-1-3`

### الخطوة 3: إعدادات البناء
| الحقل | القيمة |
|-------|--------|
| **Name** | class-1-3 |
| **Region** | Singapore (الأقرب) |
| **Branch** | main |
| **Runtime** | Node |
| **Build Command** | `pnpm install && pnpm build` |
| **Start Command** | `pnpm start` |

### الخطوة 4: النشر
- اضغط **"Create Web Service"**
- انتظر 3-5 دقائق حتى يكتمل البناء
- ستحصل على رابط مثل: `https://class-1-3.onrender.com`

---

## ملاحظات مهمة

- الخطة المجانية في Render تجعل الموقع **ينام** بعد 15 دقيقة من عدم الاستخدام
- أول تحميل بعد النوم يأخذ 30-60 ثانية
- لتجنب ذلك، يمكن الترقية للخطة المدفوعة ($7/شهر)

---

## تم التطوير بواسطة: حسام الحكمي
