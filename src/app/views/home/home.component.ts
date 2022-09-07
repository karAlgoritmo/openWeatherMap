import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service'

export interface city {
  id: number;
  name: string;
  cod: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  windSpeed: number;
  country:string,
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Temp. min', 'Temp. max', 'Humity','Wind Speed'];
  modelCity = ''
  public city: city = {
    id: 0,
    name: '',
    cod: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    windSpeed: 0,
    country: ''
  };
  public searchCity = async(cityName: string) => {
    (document.getElementById('closeButton') as HTMLButtonElement).click();
    const res = await this.ms.get(cityName)
    
    this.city= {
      id: res.data.id,
      name: res.data.name,
      cod: res.data.cod,
      temp_min: res.data.main.temp_min,
      temp_max: res.data.main.temp_max,
      humidity: res.data.main.humidity,
      windSpeed: res.data.wind.speed,
      country: res.data.sys.country
    }
    
  }
  constructor(private ms: MasterService) { }

  ngOnInit(): void {
  }

}
