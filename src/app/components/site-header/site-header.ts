import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { WORKSHOP_CONTACT } from '../../workshop-contact.config';

/** شريط علوي ثابت: شعار، روابط تنقل، زر اتصال */
@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  /** قائمة الجوال المفتوحة/المغلقة */
  readonly menuOpen = signal(false);

  readonly callUrl = WORKSHOP_CONTACT.primaryCallUrl;

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
