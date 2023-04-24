import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  GetNewsData(): Observable<any>
  {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cc9709250e0f47c0a8b967cb81716caa');
  }
}
