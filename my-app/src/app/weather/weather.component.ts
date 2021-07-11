import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from './weatherservice.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherserviceService],
})
export class WeatherComponent implements OnInit {
  public temp;
  txtCityName = '';
  constructor(private weatherService: WeatherserviceService) { }

  ngOnInit(): void {
      // this.getInfoTemp();
   
  }
  getInfoTemp(){
    this.weatherService.getTemp(this.txtCityName).subscribe(data =>{
           this.temp = data['main'].temp;
    })
  }

}
