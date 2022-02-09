import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

resumeURL = 'https://github.com/sbjkhadka/COMP397-W2021-Lesson8a/blob/main/Resume_Subarna.docx?raw=true';

constructor(private http: HttpClient) { }

downloadResume(): Observable<Blob> {
  // return this.http.get(this.resumeURL, {responseType: 'blob'})
  return this.http.get('../../assets/temp/Resume_Subarna.pdf', { responseType: 'blob' })
}

}
