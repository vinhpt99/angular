import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private htttp: HttpClient) { }
  getTemp(cityName: string){
     const url = 'https://api.openweathermap.org/data/2.5/weather?appid=0cba7613b37ce8cbeb1aabf13eae4959&units=metric&q='+cityName;
     return this.htttp.get(url);
  }
}
