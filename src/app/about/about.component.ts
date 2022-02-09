import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../services/download.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
  }

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
