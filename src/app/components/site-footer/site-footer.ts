import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WORKSHOP_CONTACT } from '../../workshop-contact.config';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  readonly contact = WORKSHOP_CONTACT;
  readonly year = new Date().getFullYear();
}
