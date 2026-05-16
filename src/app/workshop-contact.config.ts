/**
 * إعدادات التواصل — عدّل الأرقام والروابط هنا بسهولة دون لمس باقي المكوّنات.
 * رقم الواتساب: كود الدولة + الرقم بدون + أو مسافات (مثال مصر: 201234567890).
 */
export const WORKSHOP_CONTACT = {
  /** رقم الواتساب لـ wa.me (أرقام فقط، مع كود الدولة) */
  whatsappPhoneE164Digits: '201000000000',

  /** رسالة افتراضية عند الضغط على «استفسار عبر الواتساب» */
  whatsappDefaultMessage: 'السلام عليكم، أود الاستفسار عن منتج من ورشة المصطفى.',

  /** هاتف للعرض في التذييل (نص حر) */
  displayPhone: '+20 10X XXX XXXX',

  /** رابط اتصال tel: — أرقام و + فقط (للتعديل لاحقاً) */
  phoneTelHref: 'tel:+201000000000',

  /** روابط وهمية — استبدلها بروابطك */
  facebookUrl: 'https://www.facebook.com/your-page',
  mapsUrl: 'https://maps.google.com/?q=your+location',

  /** رابط اتصال سريع من الشريط (يمكن أن يكون tel: أو واتساب) */
  primaryCallUrl: 'https://wa.me/201000000000',
} as const;

/** يبني رابط واتساب مع نص اختياري يتضمن اسم المنتج */
export function buildWhatsAppInquiryUrl(productTitle?: string): string {
  const base = `https://wa.me/${WORKSHOP_CONTACT.whatsappPhoneE164Digits}`;
  const msg =
    productTitle != null && productTitle.length > 0
      ? `${WORKSHOP_CONTACT.whatsappDefaultMessage}\n\nالمنتج: ${productTitle}`
      : WORKSHOP_CONTACT.whatsappDefaultMessage;
  return `${base}?text=${encodeURIComponent(msg)}`;
}
