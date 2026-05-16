import { ChangeDetectionStrategy, Component } from '@angular/core';

/** عناصر قسم «لماذا نحن» — نص ثابت مع أيقونات SVG مضمّنة */
@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyChooseUs {
  readonly reasons = [
    {
      title: 'جودة خشب أهلي',
      body: 'اختيار دقيق للخامات مع تشطيبات تحمي الخشب وتبرز حبّته الطبيعية.',
      icon: 'wood',
    },
    {
      title: 'تصميمات مودرن',
      body: 'خطوط بسيطة ومساحات عملية تناسب أسلوب المعيشة المعاصر.',
      icon: 'design',
    },
    {
      title: 'تسليم في الوقت',
      body: 'جدول زمني واضح ومتابعة مراحل التنفيذ لضمان الالتزام بالموعد.',
      icon: 'time',
    },
    {
      title: 'خبرة سنوات',
      body: 'ورشة عمل متكاملة تجمع الحرفية التقليدية بأدوات تصنيع حديثة.',
      icon: 'experience',
    },
  ] as const;
}
