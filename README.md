# MostafaWorkshop

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## ملخص المشروع — موقع ورشة المصطفى (عربي)

### Tailwind والإعداد العام

- **`tailwind.config.js`**: مسارات المحتوى (`content`) + ألوان مخصصة (`wood`, `cream`, `ink`) وظلال مناسبة للهوية الخشبية.
- **`src/styles.css`**: مبني على **Tailwind v3** (`@tailwind base/components/utilities`) بما يتوافق مع `tailwindcss@^3` في `package.json`.
- **`angular.json`**: إضافة نسخ **`src/assets`** إلى المخرجات تحت المسار **`/assets`** (إلى جانب مجلد `public`).

### اتجاه الصفحة والخط

- **`src/index.html`**: `lang="ar"` و `dir="rtl"`، وخط **Tajawal** من Google Fonts.

### إعدادات التواصل (سهلة التعديل)

- **`src/app/workshop-contact.config.ts`**: رقم الواتساب (`whatsappPhoneE164Digits`)، الرسالة الافتراضية، روابط فيسبوك وخرائط Google، رابط `tel:`، و`primaryCallUrl` لزر «اتصل الآن». الدالة **`buildWhatsAppInquiryUrl(productTitle?)`** تُستخدم لروابط «استفسار عبر الواتساب».

### المكوّنات (Standalone، `OnPush`)

| القسم | المسار |
|--------|--------|
| شريط علوي وتنقل | `src/app/components/site-header/` |
| قسم البطل (Hero) | `src/app/components/hero-banner/` |
| معرض المنتجات والتصفية | `src/app/components/product-gallery/` — مصفوفة **`MOCK_PRODUCTS`** داخل `product-gallery.ts` مع `activeCategory` و **`filteredProducts()`** |
| لماذا نحن | `src/app/components/why-choose-us/` |
| التذييل | `src/app/components/site-footer/` |

### الصور التجريبية

- **`src/assets/images/*.svg`**: اثنا عشر ملف SVG كعناوين/ألوان تجريبية؛ يمكن استبدالها بصورك الحقيقية مع الحفاظ على الأسماء أو تعديل المسارات في **`MOCK_PRODUCTS`**.

### تجميع الصفحة

- **`src/app/app.ts`** و **`src/app/app.html`**: تجميع الصفحة الواحدة (SPA بدون باك-إند).

### الاختبارات والبناء

- **`src/app/app.spec.ts`**: يتحقق من ظهور نص «ورشة المصطفى».
- **`npm run build`**: يمر بنجاح في المشروع.
- **`npm test`**: يحتاج متصفح Chrome مثبتاً لـ Karma؛ في بيئات بدون Chrome قد تحتاج تعيين **`CHROME_BIN`**.

### أوامر سريعة

- تشغيل التطوير: `npm start` أو `ng serve` ثم فتح `http://localhost:4200/`.
- لتعديل الواتساب والروابط: عدّل **`src/app/workshop-contact.config.ts`** فقط.
