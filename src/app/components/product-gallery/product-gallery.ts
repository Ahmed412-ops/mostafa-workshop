import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { buildWhatsAppInquiryUrl } from '../../workshop-contact.config';

/** معرفات أقسام المعرض — تُستخدم في التصفية */
export type ProductCategoryId = 'doors-windows' | 'living' | 'bedrooms' | 'kitchens';

export interface WorkshopProduct {
  id: string;
  category: ProductCategoryId;
  title: string;
  imageSrc: string;
}

/**
 * بيانات تجريبية محلية للمنتجات — استبدل الصور بملفاتك داخل `src/assets/images/`.
 * يمكن لاحقاً استبدال هذا المصفوفة باستيراد JSON إن رغبت.
 */
const MOCK_PRODUCTS: WorkshopProduct[] = [
  {
    id: 'dw-1',
    category: 'doors-windows',
    title: 'باب رئيسي خشب سويدي مع زخرفة CNC',
    imageSrc: 'assets/images/doors-1.png',
  },
  {
    id: 'dw-2',
    category: 'doors-windows',
    title: 'شباك ألمنيوم وخشب مدمج — عزل حراري',
    imageSrc: 'assets/images/doors-2.png',
  },
  {
    id: 'dw-3',
    category: 'doors-windows',
    title: 'مكتبة مدخل مع باب مخفي',
    imageSrc: 'assets/images/doors-3.png',
  },
  {
    id: 'lv-1',
    category: 'living',
    title: 'ركنة مودرن قماش قابل للغسيل',
    imageSrc: 'assets/images/living-1.svg',
  },
  {
    id: 'lv-2',
    category: 'living',
    title: 'أنتريه خشب زان مع رخام طبيعي',
    imageSrc: 'assets/images/living-2.svg',
  },
  {
    id: 'lv-3',
    category: 'living',
    title: 'طقم جلوس L مع وحدة تخزين',
    imageSrc: 'assets/images/living-3.svg',
  },
  {
    id: 'bd-1',
    category: 'bedrooms',
    title: 'غرفة نوم كينج — خشب MDF مغلف',
    imageSrc: 'assets/images/bedroom-1.svg',
  },
  {
    id: 'bd-2',
    category: 'bedrooms',
    title: 'غرفة شباب سريرين وخزائن علوية',
    imageSrc: 'assets/images/bedroom-2.svg',
  },
  {
    id: 'bd-3',
    category: 'bedrooms',
    title: 'تسريحة مع مرآة LED',
    imageSrc: 'assets/images/bedroom-3.svg',
  },
  {
    id: 'kc-1',
    category: 'kitchens',
    title: 'مطبخ كلاسيكي خشب طبيعي',
    imageSrc: 'assets/images/kitchen-1.svg',
  },
  {
    id: 'kc-2',
    category: 'kitchens',
    title: 'مطبخ مودرن أكريليك — إضاءة مخفية',
    imageSrc: 'assets/images/kitchen-2.svg',
  },
  {
    id: 'kc-3',
    category: 'kitchens',
    title: 'جزيرة وسطية مع بار إفطار',
    imageSrc: 'assets/images/kitchen-3.svg',
  },
];

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  templateUrl: './product-gallery.html',
  styleUrl: './product-gallery.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGallery {
  /** التبويب النشط — يبدأ بأول قسم */
  readonly activeCategory = signal<ProductCategoryId>('doors-windows');

  /** كل المنتجات (مرجع للقالب إن لزم) */
  readonly products = MOCK_PRODUCTS;

  readonly categories: { id: ProductCategoryId; label: string }[] = [
    { id: 'doors-windows', label: 'الأبواب والشبابيك' },
    { id: 'living', label: 'الركن والأنتريهات' },
    { id: 'bedrooms', label: 'غرف النوم والشباب' },
    { id: 'kitchens', label: 'المطابخ والديكورات' },
  ];

  /** قائمة مُصفّاة حسب التبويب — تحديث فوري بدون إعادة تحميل */
  readonly filteredProducts = computed(() => {
    const cat = this.activeCategory();
    return this.products.filter((p) => p.category === cat);
  });

  selectCategory(id: ProductCategoryId): void {
    this.activeCategory.set(id);
  }

  isActive(id: ProductCategoryId): boolean {
    return this.activeCategory() === id;
  }

  whatsappUrl(title: string): string {
    return buildWhatsAppInquiryUrl(title);
  }
}
