import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage{
  myweather:any[]=[];
  location:string = "";

  constructor(private service:WeatherService){

  }

  ionViewWillEnter() {

    this.service.getWeatherData().subscribe((data)=>{this.myweather = data.weather; this.location = data.name;});
    
  }

 
}
