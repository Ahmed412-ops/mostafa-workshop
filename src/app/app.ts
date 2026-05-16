import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { ProductGallery } from './components/product-gallery/product-gallery';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { WhyChooseUs } from './components/why-choose-us/why-choose-us';

/** الصفحة الرئيسية — تجميع أقسام الموقع في صفحة واحدة (SPA بدون باك-إند). */
@Component({
  selector: 'app-root',
  imports: [SiteHeader, HeroBanner, ProductGallery, WhyChooseUs, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
