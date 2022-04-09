import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  resumeURL = 'https://drive.google.com/file/d/1X-ZKqDp_oDuLwwLKH7PDt0qJNnyknaNV/view?usp=sharing';

  constructor(private http: HttpClient) { }

  downloadResume(): Observable<Blob> {
    // return this.http.get(this.resumeURL, { responseType: 'blob' })
    return this.http.get('../../assets/temp/Resume_Subarna.pdf', { responseType: 'blob' })
  }

}
