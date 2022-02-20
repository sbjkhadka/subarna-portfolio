import { Component, Input } from '@angular/core';
import { ContactDetail } from '../Models/contact-details.interface';
import { DownloadService } from '../services/download.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() contactDetails: ContactDetail;

  constructor(private downloadService: DownloadService) { }

  returnBlob(res: any): Blob {
    return new Blob([res], { type: 'application/pdf'});
  }

  downloadResume(): void {
    this.downloadService.downloadResume().subscribe(res => {
      if(res) {
        const url = window.URL.createObjectURL(this.returnBlob(res));
        window.open(url);
      }
    });
  }

}
