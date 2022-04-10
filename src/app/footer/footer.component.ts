import { Component, Input } from '@angular/core';
import { ContactDetail } from '../Models/contact-details.interface';
import { Social } from '../Models/social.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() socials: Social[];
  @Input() contactDetails: ContactDetail;
  @Input() name: string;
  year = new Date().getFullYear();

}
