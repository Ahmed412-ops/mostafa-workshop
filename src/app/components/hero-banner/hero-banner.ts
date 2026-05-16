import { ChangeDetectionStrategy, Component } from '@angular/core';

/** قسم المقدمة البارز مع عنوان ودعوة للإجراء */
@Component({
  selector: 'app-hero-banner',
  standalone: true,
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBanner {}
