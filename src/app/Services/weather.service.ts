import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData():Observable<any>
  {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/1083709409150124032');
  }
}
